---
title: 'Introduction to GoF Design Patterns – What They Are, When to Use with GitHub Examples'
publishedOn: '2025-06-18'
slug: 'introduction-to-gof-design-patterns-what-they-are-when-to-use-with-github-examples'
metaDescription: 'A beginner-friendly introduction to the 23 Gang of Four (GoF) design patterns with clear explanations of what they are, when to use them, and GitHub links to practical backend-focused C# examples.'
---

Design patterns are time-tested, battle-hardened solutions to recurring design problems in software engineering. They help you write cleaner, more maintainable, and more scalable code by providing a shared language and best practices for solving architectural and structural challenges.

Whether you're building APIs, handling business logic, or integrating with third-party services, knowing when and how to apply these patterns can drastically improve your architecture.

## 📌 What are Design Patterns?

Design patterns are **general reusable solutions** to commonly occurring problems in software design. They are not code snippets, but **blueprints or templates** that guide implementation. The Gang of Four (GoF) Design Patterns refer to a set of 23 classic software design patterns, documented in the highly influential 1994 book <a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612" target="_blank">Design Patterns: Elements of Reusable Object-Oriented Software</a>.

## 🧠 Why Use Design Patterns?

- ✅ Improve code **readability** and **maintainability**
- ✅ Promote **reusability** and **extensibility**
- ✅ Enable better **communication** between engineers using shared terminology
- ✅ Help detect **code smells** and refactor better
- ✅ Make systems **scalable** and **robust** under change

## 🎯 This Guide

This guide is a curated list of all **23 GoF design patterns**, ordered by **real-world backend usefulness** and relevance (subjective) in modern industry applications.

Each pattern includes:

- ✅ What it is
- 🕐 When to use
- 🔗 Link to GitHub implementation

## 🧩 Design Patterns for Backend Developers

### 1. **Strategy (Behavioral)**

✅ Defines a family of interchangeable algorithms or behaviors and encapsulates each one.  
🕐 Use when you have multiple ways to perform a task and want to switch logic at runtime without `if-else` or `switch`.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Strategy" target="_blank">Example → GitHub</a>

### 2. **Observer (Behavioral)**

✅ Enables a one-to-many dependency so when one object changes state, all dependents are notified.  
🕐 Use for implementing event-driven communication (e.g., domain or integration events).  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Observer" target="_blank">Example → GitHub</a>

### 3. **Factory Method (Creational)**

✅ Provides an interface for creating objects, allowing subclasses or context to decide which to instantiate.  
🕐 Use when object creation depends on conditions and you want to avoid direct instantiation.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Creational/FactoryMethod" target="_blank">Example → GitHub</a>

### 4. **Decorator (Structural)**

✅ Adds behavior to individual objects without changing their structure or affecting others.  
🕐 Use to apply logging, caching, or authorization logic dynamically around core functionality.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Decorator" target="_blank">Example → GitHub</a>

### 5. **Adapter (Structural)**

✅ Converts the interface of one class into another expected by the client.  
🕐 Use when integrating with third-party APIs or systems that don't match your internal models.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Adapter" target="_blank">Example → GitHub</a>

### 6. **Command (Behavioral)**

✅ Encapsulates a request as an object, allowing for parameterization and queuing.  
🕐 Use for encapsulating operations like audit logging, action queuing, or as part of a CQRS architecture.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Command" target="_blank">Example → GitHub</a>

### 7. **Singleton (Creational)**

✅ Ensures a class has only one instance and provides a global access point to it.  
🕐 Use for shared configuration, logging, or caching components.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Creational/Singleton" target="_blank">Example → GitHub</a>

### 8. **Builder (Creational)**

✅ Builds complex objects step-by-step without using a telescoping constructor (having multiple constructors with increasing parameters).  
🕐 Use when creating objects that require many optional or configurable parameters.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Creational/Builder" target="_blank">Example → GitHub</a>

### 9. **Proxy (Structural)**

✅ Acts as a placeholder or surrogate for another object, controlling access.  
🕐 Use for lazy loading, access control, rate limiting, etc.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Proxy" target="_blank">Example → GitHub</a>

### 10. **Chain of Responsibility (Behavioral)**

✅ Passes a request along a chain of handlers until one handles it.  
🕐 Use to create processing pipelines (e.g., authorization, validation, logging, middleware).  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/ChainOfResponsibility" target="_blank">Example → GitHub</a>

### 11. **Composite (Structural)**

✅ Treats individual objects and groups uniformly.  
🕐 Use when representing tree structures like permissions or organizational units.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Composite" target="_blank">Example → GitHub</a>

### 12. **Template Method (Behavioral)**

✅ Defines the skeleton of an algorithm, deferring steps to subclasses.  
🕐 Use when multiple classes share the same workflow but differ in steps.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/TemplateMethod" target="_blank">Example → GitHub</a>

### 13. **Facade (Structural)**

✅ Provides a simplified interface to a complex system.  
🕐 Use when exposing simplified operations for external clients or APIs.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Facade" target="_blank">Example → GitHub</a>

### 14. **State (Behavioral)**

✅ Allows an object to alter its behavior when its internal state changes.  
🕐 Use for workflows like order/payment or any other status transitions.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/State" target="_blank">Example → GitHub</a>

### 15. **Abstract Factory (Creational)**

✅ Creates families of related or dependent objects without specifying concrete classes.  
🕐 Use when you need to provide a family of related components without tightly coupling the client to specific classes.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Creational/AbstractFactory" target="_blank">Example → GitHub</a>

### 16. **Mediator (Behavioral)**

✅ Centralizes communication between components to reduce coupling by introducing a central coordinator.  
🕐 Use when multiple components interact in complex ways.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Mediator" target="_blank">Example → GitHub</a>

### 17. **Bridge (Structural)**

✅ Decouples abstraction (what is done) from implementation (how it is done).  
🕐 Use when you want to avoid tight coupling between logic and its implementation, like logging to different outputs or switching data sources.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Bridge" target="_blank">Example → GitHub</a>

### 18. **Flyweight (Structural)**

✅ Shares data between many fine-grained objects to save memory.  
🕐 Use for immutable data reused at scale (e.g., country codes, currency).  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Structural/Flyweight" target="_blank">Example → GitHub</a>

### 19. **Prototype (Creational)**

✅ Creates new objects by cloning existing ones.  
🕐 Use for performance optimization, object pools, or similar object copies.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Creational/Prototype" target="_blank">Example → GitHub</a>

### 20. **Iterator (Behavioral)**

✅ Provides a way to access elements of a collection sequentially.  
🕐 Use to abstract traversal logic from the client (e.g., paged DB results).  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Iterator" target="_blank">Example → GitHub</a>

### 21. **Memento (Behavioral)**

✅ Captures and restores an object’s internal state without violating encapsulation.  
🕐 Use for undo/redo functionality, or state snapshots.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Memento" target="_blank">Example → GitHub</a>

### 22. **Interpreter (Behavioral)**

✅ Defines a way to evaluate grammar or expressions.  
🕐 Use for parsing simple DSLs (Domain-Specific Language), rules, or formula logic.  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Interpreter" target="_blank">Example → GitHub</a>

### 23. **Visitor (Behavioral)**

✅ Lets you add new operations to existing object structures without modifying them.  
🕐 Use when you need to perform different operations across a collection of object types without changing their classes. Often an overkill unless you’re operating on complex object structures (like compilers or ASTs).  
🔗 <a href="https://github.com/sayyedulawwab/GoFDesignPatterns/tree/main/src/Behavioral/Visitor" target="_blank">Example → GitHub</a>

## 🙌 Follow & Stay Tuned

I’ll be publishing **in-depth articles** on selected high-impact patterns with real-world use cases hopefully soon.  
🔗 Follow me on <a href="https://www.linkedin.com/in/sayyedulawwab" target="_blank">LinkedIn</a> for updates.  
You can ⭐ the <a href="https://github.com/sayyedulawwab/GoFDesignPatterns" target="_blank">GitHub repo</a> if you found this useful!
