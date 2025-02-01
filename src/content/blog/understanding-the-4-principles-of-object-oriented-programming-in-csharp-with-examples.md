---
title: 'Understanding the 4 Principles of Object-Oriented Programming in C# with Examples'
publishedOn: '2025-01-24'
slug: 'understanding-the-4-principles-of-object-oriented-programming-in-csharp-with-examples'
metaDescription: 'Learn the four principles of Object-Oriented Programming—Encapsulation, Abstraction, Inheritance, and Polymorphism—explained with clear C# examples. Perfect for beginners to strengthen their programming foundations!'
setup: |
  import { Picture } from "astro-imagetools/components";
---

In this article, I am going to talk about what the four principles of Object-Oriented Programming (Encapsulation, Abstraction, Inheritance and Polymorphism) stand for with some practical examples.

Let's get started!

## Encapsulation

Encapsulation means to protect the internal state of an object and preventing other classes from changing its state by directly accessing its properties. Only the object itself can change its properties.

For example, suppose there is a class named LibraryBook with properties like Title, Author, TotalCopies and AvailableCopies.

We can achieve encapsulation in this class by making its setters private. By doing this we ensure that the properties cannot be changed by directly accessing the them as before. Then we expose two public methods `LendBook` and `ReturnBook` to take care of lending and returning book.

```csharp
public class LibraryBook
{
    public LibraryBook(string title, string author, int totalCopies)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Title cannot be empty.");
        if (string.IsNullOrWhiteSpace(author))
            throw new ArgumentException("Author cannot be empty.");
        if (totalCopies < 0)
            throw new ArgumentException("Total copies cannot be negative.");

        Title = title;
        Author = author;
        TotalCopies = totalCopies;
        AvailableCopies = totalCopies;
    }

    public string Title { get; private set; }
    public string Author { get; private set; }
    public int TotalCopies { get; private set; }
    public int AvailableCopies { get; private set; }

    // Method to lend a book
    public void LendBook()
    {
        if (AvailableCopies <= 0)
            throw new InvalidOperationException("No copies available to lend.");

        AvailableCopies--;
        Console.WriteLine($"'{Title}' lent out. Remaining copies: {AvailableCopies}");
    }

    // Method to return a book
    public void ReturnBook()
    {
        if (AvailableCopies >= TotalCopies)
            throw new InvalidOperationException("All copies are already returned.");

        AvailableCopies++;
        Console.WriteLine($"'{Title}' returned. Available copies: {AvailableCopies}");
    }
}
```

```csharp
 // Creating a new book in the library
var book = new LibraryBook("Clean Code", "Robert C. Martin", 5);

Console.WriteLine($"Book: {book.Title} by {book.Author}");
Console.WriteLine($"Total Copies: {book.TotalCopies}");
Console.WriteLine($"Available Copies: {book.AvailableCopies}");

// Lending books
book.LendBook();
book.LendBook();

// Returning books
book.ReturnBook();
```

## Abstraction

Abstraction is about simplifying complexity by hiding implementation details and exposing only the necessary details through interfaces or abstract classes. It focuses on "what" an object does rather than "how" it does it.

Imagine we are building an e-commerce application where users can pay using different payment methods such as credit card, PayPal, or bank transfer. Each payment method has its own logic and API integration.

By using abstraction, you can define a general contract (interface or abstract class) for payment processing and let each payment method handle its own implementation.

```csharp
public abstract class PaymentProcessor
{
    public abstract void ProcessPayment(decimal amount);
}
```

```csharp
public class CreditCardPayment : PaymentProcessor
{
    public override void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of ${amount}.");
        // Logic for credit card payment (e.g., interacting with a payment gateway)
    }
}
```

```csharp
public class PayPalPayment : PaymentProcessor
{
    public override void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing PayPal payment of ${amount}.");
        // Logic for PayPal payment (e.g., interacting with PayPal API)
    }
}
```

```csharp
public class BankTransferPayment : PaymentProcessor
{
    public override void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing bank transfer payment of ${amount}.");
        // Logic for bank transfer payment (e.g., interacting with a bank API)
    }
}
```

```csharp
public class PaymentService
{
    public void MakePayment(PaymentProcessor processor, decimal amount)
    {
        processor.ProcessPayment(amount);
    }
}
```

```csharp
var paymentService = new PaymentService();

// Credit card payment
PaymentProcessor creditCard = new CreditCardPayment();
paymentService.MakePayment(creditCard, 100.50m);

// PayPal payment
PaymentProcessor paypal = new PayPalPayment();
paymentService.MakePayment(paypal, 75.00m);

// Bank transfer payment
PaymentProcessor bankTransfer = new BankTransferPayment();
paymentService.MakePayment(bankTransfer, 200.00m);
```

## Inheritance

Inheritance is about reusing and extending functionality. A child class inherits properties and behaviors from a parent class, reducing code duplication and creating a hierarchy of relationships.

For example, A Payment System where `Payment` is the base class, and specific types of payments like `CreditCardPayment` and `PayPalPayment` inherit from it. Each payment type shares common properties and methods but implements its specific logic for processing payments.

```csharp
public abstract class Payment
{
    public decimal Amount { get; private set; }
    public DateTime PaymentDate { get; private set; }

    protected Payment(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Amount must be greater than zero.");
        Amount = amount;
        PaymentDate = DateTime.UtcNow;
    }

    public abstract void ProcessPayment(); // Abstract method to be implemented by derived classes

    public virtual void DisplayPaymentInfo()
    {
        Console.WriteLine($"Payment of {Amount:C} made on {PaymentDate}.");
    }
}
```

```csharp
public class CreditCardPayment : Payment
{
    public string CardNumber { get; private set; }
    public string CardHolderName { get; private set; }

    public CreditCardPayment(decimal amount, string cardNumber, string cardHolderName)
        : base(amount)
    {
        if (string.IsNullOrWhiteSpace(cardNumber)) throw new ArgumentException("Card number cannot be empty.");
        if (string.IsNullOrWhiteSpace(cardHolderName)) throw new ArgumentException("Cardholder name cannot be empty.");

        CardNumber = cardNumber;
        CardHolderName = cardHolderName;
    }

    public override void ProcessPayment()
    {
        Console.WriteLine($"Processing credit card payment for {CardHolderName} with card {CardNumber}.");
    }

    public override void DisplayPaymentInfo()
    {
        base.DisplayPaymentInfo();
        Console.WriteLine($"Paid using credit card ending in {CardNumber.Substring(CardNumber.Length - 4)}.");
    }
}
```

```csharp
public class PayPalPayment : Payment
{
    public string PayPalEmail { get; private set; }

    public PayPalPayment(decimal amount, string payPalEmail)
        : base(amount)
    {
        if (string.IsNullOrWhiteSpace(payPalEmail)) throw new ArgumentException("PayPal email cannot be empty.");
        PayPalEmail = payPalEmail;
    }

    public override void ProcessPayment()
    {
        Console.WriteLine($"Processing PayPal payment for {PayPalEmail}.");
    }

    public override void DisplayPaymentInfo()
    {
        base.DisplayPaymentInfo();
        Console.WriteLine($"Paid using PayPal account: {PayPalEmail}.");
    }
}
```

```csharp
// Process a credit card payment
Payment creditCardPayment = new CreditCardPayment(150.75m, "1234567812345678", "John Doe");
creditCardPayment.ProcessPayment();
creditCardPayment.DisplayPaymentInfo();

Console.WriteLine();

// Process a PayPal payment
Payment payPalPayment = new PayPalPayment(200.00m, "johndoe@example.com");
payPalPayment.ProcessPayment();
payPalPayment.DisplayPaymentInfo();
```

## Polymorphism

Polymorphism refers to the ability of objects to take on multiple forms. It allows a single interface to be used for different underlying data types, enabling a method or operation to behave differently based on the object it is acting upon.

Polymorphism allows you to write flexible and reusable code by defining methods in a base class and overriding them in derived classes to provide specific behavior.

There are two types of polymorphisms:

- Compile-time (Method Overloading): Same method name, different parameters.
- Run-time (Method Overriding): Child class overrides parent class methods.

Imagine an **Employee Management System** where different types of employees—`FullTimeEmployee`, `PartTimeEmployee`, and `ContractEmployee`—calculate their salary differently. Polymorphism enables treating all employee types uniformly while allowing each type to implement its own salary calculation logic.

```csharp
public abstract class Employee
{
    public string Name { get; private set; }
    public int Id { get; private set; }

    protected Employee(int id, string name)
    {
        if (string.IsNullOrWhiteSpace(name)) throw new ArgumentException("Name cannot be empty.");
        Id = id;
        Name = name;
    }

    public abstract decimal CalculateSalary(); // Abstract method for salary calculation

    public virtual void DisplayEmployeeInfo()
    {
        Console.WriteLine($"ID: {Id}, Name: {Name}");
    }
}
```

```csharp
public class FullTimeEmployee : Employee
{
    public decimal MonthlySalary { get; private set; }

    public FullTimeEmployee(int id, string name, decimal monthlySalary)
        : base(id, name)
    {
        if (monthlySalary <= 0) throw new ArgumentException("Monthly salary must be greater than zero.");
        MonthlySalary = monthlySalary;
    }

    public override decimal CalculateSalary()
    {
        return MonthlySalary;
    }

    public override void DisplayEmployeeInfo()
    {
        base.DisplayEmployeeInfo();
        Console.WriteLine($"Employee Type: Full-Time, Monthly Salary: {MonthlySalary:C}");
    }
}
```

```csharp
public class PartTimeEmployee : Employee
{
    public decimal HourlyRate { get; private set; }
    public int HoursWorked { get; private set; }

    public PartTimeEmployee(int id, string name, decimal hourlyRate, int hoursWorked)
        : base(id, name)
    {
        if (hourlyRate <= 0) throw new ArgumentException("Hourly rate must be greater than zero.");
        if (hoursWorked < 0) throw new ArgumentException("Hours worked cannot be negative.");

        HourlyRate = hourlyRate;
        HoursWorked = hoursWorked;
    }

    public override decimal CalculateSalary()
    {
        return HourlyRate * HoursWorked;
    }

    public override void DisplayEmployeeInfo()
    {
        base.DisplayEmployeeInfo();
        Console.WriteLine($"Employee Type: Part-Time, Hourly Rate: {HourlyRate:C}, Hours Worked: {HoursWorked}");
    }
}
```

```csharp
public class ContractEmployee : Employee
{
    public decimal ContractAmount { get; private set; }

    public ContractEmployee(int id, string name, decimal contractAmount)
        : base(id, name)
    {
        if (contractAmount <= 0) throw new ArgumentException("Contract amount must be greater than zero.");
        ContractAmount = contractAmount;
    }

    public override decimal CalculateSalary()
    {
        return ContractAmount;
    }

    public override void DisplayEmployeeInfo()
    {
        base.DisplayEmployeeInfo();
        Console.WriteLine($"Employee Type: Contract, Contract Amount: {ContractAmount:C}");
    }
}
```

```csharp
// Create a list of employees
List<Employee> employees = new List<Employee>
{
	new FullTimeEmployee(1, "Alice", 5000m),
	new PartTimeEmployee(2, "Bob", 20m, 100),
	new ContractEmployee(3, "Charlie", 3000m)
};

// Calculate and display salary for each employee
foreach (var employee in employees)
{
	employee.DisplayEmployeeInfo();
	Console.WriteLine($"Salary: {employee.CalculateSalary():C}");
	Console.WriteLine();
}
```

## In short you can remember like this:

- Encapsulation is like keeping the details of an object private while exposing only what's necessary and prevent unauthorized or incorrect use.

- Abstraction is about simplifying complexity by hiding implementation details and exposing only the necessary features through interfaces or abstract classes. It focuses on "what" an object does rather than "how" it does it.

- Inheritance is about reusing and extending functionality. A child class inherits properties and behaviors from a parent class, reducing code duplication and creating a hierarchy of relationships.

- Polymorphism allows the same operation to behave differently based on the object it’s working on. It can be achieved through method overriding or method overloading.

If you found this guide helpful, share it with others!
