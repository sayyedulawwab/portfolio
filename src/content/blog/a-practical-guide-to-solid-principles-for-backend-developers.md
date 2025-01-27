---
title: 'A Practical Guide to SOLID Principles for Backend Developers'
publishedOn: 2025-01-28
slug: 'a-practical-guide-to-solid-principles-for-backend-developers'
metaDescription: 'Learn to apply the SOLID principles in backend development with practical C# examples for clean, scalable, and maintainable code.'
setup: |
  import { Picture } from "astro-imagetools/components";
---

These five software development principles are guidelines to follow when building software so that it is easier to scale and maintain. They were made popular by a software engineer, [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin).

## S - Single-responsibility Principle

A class should have only one responsibility and it should have only one reason to change.

How do we apply this principle in our codebase?

Ask yourself:

- What role does this class play in the system?
- What single task is this class responsible for?
- If something changes in the system, should this class be affected?

For example, We want to implement a feature where after payment of an order is done we need to generate an invoice and send the invoice to the customer through email.

Here we should not do all of this in one class like `PaymentService`.

We can break down the feature into three tasks

- Handling payment
- Generating invoice
- Sending the invoice through email

Now, based on the tasks we can have three classes to handle the feature we started implementing.

- `PaymentService`: Handles payment processing.
- `InvoiceService`: Manages operations related to invoices.
- `EmailService`: Responsible for sending emails.

By doing this we are future proofing the code because if in future:

- if we need to do payment related operation without invoice and email we can use the `PaymentService` class
- If we need to do payment and invoice generation but no email sending then we can use `PaymentService` and `InvoiceService` class
- If we need to email for some other features we can use `EmailService` class

So by modularizing the code like this we are avoiding redundancy in our codebase by reusing the classes instead of repeating the same code for multiple features.

## O - Open-closed Principle

Classes should be open for extension and closed to modification.

How do we apply this principle in our application?

When designing our application we have to be mindful of the fact that it is easy to add new functionality but existing code remains unchanged.

This is typically done using abstractions (e.g., interfaces, base classes) and polymorphism.

For example, we have a `PaymentProcessor` class to handle payments in our application.

```csharp
public class PaymentProcessor
{
    public void ProcessPayment(string paymentType, decimal amount)
    {
        if (paymentType == "CreditCard")
        {
            // Process credit card payment
        }
    }
}
```

The problem with the above example is we are receiving payment type as the parameter of ProcessPayment method and then we are using if conditions to determine payment method and then processing the payment.

So when we need to add another payment method like, PayPal, Google Pay, Apple Pay, etc. we need to modify the ProcessPayment method and add more if conditions based on payment type.

This violates OCP because the class is not closed for modification.

We can apply the OCP here by using an interface to define the payment processing behavior and allow extensions through new implementations:

```csharp
// Define an abstraction
public interface IPaymentMethod
{
    void ProcessPayment();
}

// Implement concrete payment methods
public class CreditCardPayment : IPaymentMethod
{
    public void ProcessPayment()
    {
        Console.WriteLine("Processing credit card payment...");
    }
}

public class PayPalPayment : IPaymentMethod
{
    public void ProcessPayment()
    {
        Console.WriteLine("Processing PayPal payment...");
    }
}

// Payment processor now depends on abstraction
public class PaymentProcessor
{
    public void ProcessPayment(IPaymentMethod paymentMethod)
    {
        paymentMethod.ProcessPayment();
    }
}
```

```csharp
public class PaymentService
{
    private readonly IPaymentProcessor _paymentProcessor;

    public PaymentService(IPaymentProcessor paymentProcessor)
    {
        _paymentProcessor = paymentProcessor;
    }

    public void MakePayment(decimal amount)
    {
        _paymentProcessor.ProcessPayment(amount);
    }
}

```

```csharp
IPaymentProcessor creditCardProcessor = new CreditCardProcessor();
IPaymentProcessor payPalProcessor = new PayPalProcessor();

PaymentService creditCardPaymentService = new PaymentService(creditCardProcessor);
PaymentService payPalPaymentService = new PaymentService(payPalProcessor);

creditCardPaymentService.MakePayment(100m);
payPalPaymentService.MakePayment(200m);
```

Now we can add new payment methods by creating new classes, not by modifying existing ones which sticks to the Open-Closed Principle.

## L - Liskov Substitution Principle

Every subclass or derived class should be substitutable for their base or parent class.

For example we want to convert document to html. For this we have an interface IDocumentRenderer and classes like PdfRenderer and MarkdownRenderer which implement IDocumentRenderer.

We have to make sure the PdfRenderer and MarkdownRenderer class always ensures expected output by rendering valid content to HTML and never return null/empty.

```csharp
public interface IDocumentRenderer
{
    // Contract: Render valid content to HTML (never returns null/empty)
    string RenderToHtml(string content);
}
```

```csharp
public class PdfRenderer : IDocumentRenderer
{
    public string RenderToHtml(string content)
    {
        // Simulate PDF-to-HTML conversion logic
        return $"<div class='pdf-preview'>{content}</div>";
    }
}

public class MarkdownRenderer : IDocumentRenderer
{
    public string RenderToHtml(string content)
    {
        try
        {
            // Convert Markdown to HTML
            // return html string
        }
        catch
        {
            // Handle gracefully instead of throwing
            return "<div>Error rendering Markdown</div>";
        }
    }
}
```

```csharp
// PDF preview
IDocumentRenderer pdfService = new PdfRenderer();
Console.WriteLine(pdfService.GeneratePreview("PDF content"));

// Markdown preview (substituted seamlessly)
IDocumentRenderer mdService = new MarkdownRenderer();
Console.WriteLine(mdService.GeneratePreview("## Hello Markdown"));
```

## I - Interface Segregation Principle

Clients should not be forced to depend upon interfaces that they do not use, or clients shouldn’t be forced to depend on methods they do not use.

For example, we want to send notification to users. For this we can declare `INotificationService` interface:

```csharp
public interface INotificationService
{
    void SendEmail(string emailAddress, string message);
    void SendSms(string phoneNumber, string message);
    void SendPushNotification(string deviceToken, string message);
}
```

We are thinking this interface is responsible notification sending. Then we have a use case where we need to send email to a user. So, we create a EmailService class which would implement INotificationService interface which create a big problem:

```csharp
public class EmailService : INotificationService
{
    public void SendEmail(string emailAddress, string message)
    {
        Console.WriteLine($"Email sent to {emailAddress}: {message}");
    }

    public void SendSms(string phoneNumber, string message)
    {
        throw new NotImplementedException("EmailNotification does not support SMS.");
    }

    public void SendPushNotification(string deviceToken, string message)
    {
        throw new NotImplementedException("EmailNotification does not support Push Notifications.");
    }
}
```

In the `EmailService` class we are bound to implement all the methods even `SendSms` and `SendPushNotification` method of `INotificationService` which is clearly not needed.

The solution is to apply Interface Segregation Principle.

We divide the `INotificationService` interface into 3 interfaces:

- `IEmailService`: Responsible for sending email.
- `ISmsService`: Responsible for sending SMS.
- `IPushNotificationService`: Responsible for sending push notification.

```csharp
public interface IEmailService
{
    void SendEmail(string emailAddress, string message);
}

public interface ISmsService
{
    void SendSms(string phoneNumber, string message);
}

public interface IPushNotificationService
{
    void SendPushNotification(string deviceToken, string message);
}
```

Then we can create `EmailService`, `SmsService` and `PushNotificationService` classes to implement these interfaces:

```csharp
public class EmailService : IEmailService
{
    public void SendEmail(string emailAddress, string message)
    {
        Console.WriteLine($"Email sent to {emailAddress}: {message}");
    }
}

public class SmsService : ISmsService
{
    public void SendSms(string phoneNumber, string message)
    {
        Console.WriteLine($"SMS sent to {phoneNumber}: {message}");
    }
}

public class PushNotificationService : IPushNotificationService
{
    public void SendPushNotification(string deviceToken, string message)
    {
        Console.WriteLine($"Push notification sent to {deviceToken}: {message}");
    }
}
```

Now, none of these classes have to implement methods which do not concern them. So, problem solved.

## D - Dependency Inversion Principle

High-level modules should not depend on low-level modules. Both should depend on the abstraction.
Abstractions should not depend on details. Details should depend on abstractions.

We have already done this while implementing Open-Closed Principle.

Uncle Bob summarizes this principle as follows:

> "If the OCP states the goal of OO architecture, the DIP states the primary mechanism".

```csharp
public class EmailService
{
    public void Send(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

public class NotificationService
{
    private readonly EmailService _emailService;

    public NotificationService()
    {
        _emailService = new EmailService(); // Direct dependency on a class
    }

    public void SendNotification(string message)
    {
        _emailService.Send(message);
    }
}
```

The `NotificationService` directly depends on the `EmailService` class. So, the Dependency Inversion Principle is violated.

So, how can we fix it?

We can introduce a `IEmailService` interface which would be implemented by `EmailService` class.

Then the `NotificationService` will not depend on `EmailService` implementation. And both `NotificationService` and `EmailService` will depend on `IEmailService` abstraction.

```csharp
public interface IEmailService
{
    void Send(string message);
}

public class EmailService : IEmailService
{
    public void Send(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}
```

```csharp
public class NotificationService
{
    private readonly IEmailService _emailService;

    public NotificationService(IEmailService emailService)
    {
        _emailService = emailService;
    }

    public void SendNotification(string message)
    {
        _emailService.Send(message);
    }
}
```

```csharp
IEmailService emailService = new EmailService();

NotificationService emailNotificationService = new NotificationService(emailService);
emailNotificationService.SendNotification("This is an email notification.");
```

### Example: Using .NET Core Dependency Injection with the Dependency Inversion Principle

In .NET Core, we can use the built-in DI container to follow the **Dependency Inversion Principle** effectively. Here's how we can register services and inject dependencies:

- **`AddSingleton`**: Creates a single instance of the service and shares it throughout the application.
- **`AddScoped`**: Creates an instance of the service per HTTP request (or per unit of work in other scenarios).
- **`AddTransient`**: Creates a new instance of the service each time it is requested.

Here’s an example of how we can use these DI lifetimes in our `Program.cs`:

```csharp
// Registering the dependency with the appropriate lifetime
builder.Services.AddScoped<IEmailService, EmailService>();
```

By doing this we don't need to manually inject the dependency into `NotificationService` class.

```csharp
public class NotificationService
{
    private readonly IEmailService _emailService;

    public NotificationService(IEmailService emailService)
    {
        _emailService = emailService;
    }

    public void SendNotification(string message)
    {
        _emailService.Send(message);
    }
}
```

With DI, the **`NotificationService`** will have its dependency automatically injected when it's instantiated. This ensures that the class doesn’t need to worry about managing its dependencies directly, keeping in line with the Dependency Inversion Principle.

The SOLID principles provide a foundation for writing clean, maintainable, and scalable code that is easier to understand, extend, and test.

The **Single Responsibility Principle** ensures each class focuses on a single responsibility, promoting modularity and reuse.

The **Open-Closed Principle** allows extending functionality without modifying existing code, leveraging abstractions like interfaces.

The **Liskov Substitution Principle** emphasizes substitutability, ensuring derived classes maintain the behavior of their base classes.

The **Interface Segregation Principle** advocates for smaller, client-specific interfaces to avoid unnecessary dependencies.

Finally, the **Dependency Inversion Principle** promotes designing systems where both high-level and low-level modules depend on these abstractions rather than concrete implementations.

By incorporating these principles into your development process, the codebase becomes flexible and easier to adapt to changes or new requirements.
