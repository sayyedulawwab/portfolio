---
title: 'Choosing Between EF Core and Dapper — Benchmarking Performance and Efficiency'
publishedOn: 2024-11-01
slug: 'choosing-between-ef-core-and-dapper-benchmarking-performance-and-efficiency'
---

# Choosing Between EF Core and Dapper — Benchmarking Performance and Efficiency

When working with .NET applications, developers often face a choice between Entity Framework Core (EF Core) and Dapper for data access. EF Core is a full-fledged ORM that offers a rich set of features like migrations, LINQ queries, and change tracking, making it a convenient option for applications with complex data relationships. Dapper, on the other hand, is a lightweight ORM known for its performance, with minimal overhead and direct mapping capabilities.

The question then arises: When does it make sense to choose EF Core over Dapper, and vice versa? In this article, we’ll benchmark both ORMs to compare their performance and memory usage across common operations, providing insights on when each might be the better choice.

To get accurate results, I used `BenchmarkDotNet`, a popular .NET library designed for performance testing, which provides consistent measurements of execution time and memory allocation. Here’s a quick look at the environment and setup used for this benchmark:

- **BenchmarkDotNet version**: v0.14.0
- **.NET SDK**: 8.0.400
- **Operating System**: Windows 11
- **Hardware**: 12th Gen Intel Core i7–1255U, 12 logical cores, 16 GB RAM

For this test, I inserted 1 million records into a table of product data using the [Bogus](https://github.com/bchavez/Bogus) library to generate realistic sample data. I then benchmarked three types of operations using EF Core and Dapper:

Retrieving by ID:

- GetByIdWithDapperAsync
- GetByIdWithEFCoreAsync
- GetByIdWithEFCoreAsNoTrackingAsync

Inserting a Product:

- InsertProductWithDapperAsync
- InsertProductWithEFCoreAsync

Finding products with Filters like minimum price of 75 and maximum price of 1000 sorted by price in descending order with pagination of 50 records per page:

- FindWithFilterOrderByPaginationWithDapperAsync
- FindWithFilterOrderByPaginationWithEFCoreAsync
- FindWithFilterOrderByPaginationWithEFCoreAsNoTrackingAsync

For further details, the full code is available on [GitHub](https://github.com/sayyedulawwab/EFCoreVsDapper).

To provide a thorough analysis, I ran two sets of benchmarks for each operation: a single operation and 50 consecutive operations. Let’s break down the results by operation type:

## 1. Retrieving by ID

For a single operation:

| Method                             | Mean     | Error   | StdDev  | Allocated |
| ---------------------------------- | -------- | ------- | ------- | --------- |
| GetByIdWithDapperAsync             | 104.2 us | 2.06 us | 4.73 us | 7.55 KB   |
| GetByIdWithEFCoreAsync             | 240.6 us | 4.76 us | 8.94 us | 104.44 KB |
| GetByIdWithEFCoreAsNoTrackingAsync | 250.2 us | 2.07 us | 1.93 us | 103.96 KB |

For 50 consecutive operations:

| Method                             | Mean      | Error     | StdDev    | Allocated  |
| ---------------------------------- | --------- | --------- | --------- | ---------- |
| GetByIdWithDapperAsync             | 5.086 ms  | 0.1073 ms | 0.3061 ms | 366.99 KB  |
| GetByIdWithEFCoreAsync             | 13.975 ms | 0.2430 ms | 0.3406 ms | 5206.96 KB |
| GetByIdWithEFCoreAsNoTrackingAsync | 13.578 ms | 0.1481 ms | 0.1312 ms | 5177.34 KB |

**Summary**:

- **Dapper** is significantly faster for single-record retrieval, with a smaller memory footprint compared to EF Core.
- **EF Core** and **EF Core with AsNoTracking** take approximately twice as long as Dapper and have higher memory allocation.
- **Conclusion**: For high-performance applications requiring frequent single-record lookups, **Dapper** is ideal due to its speed and efficiency.

## 2. Finding Products with Filters, Sorting, and Pagination

For a single operation:

| Method                                                     | Mean         | Error        | StdDev       | Allocated |
| ---------------------------------------------------------- | ------------ | ------------ | ------------ | --------- |
| FindWithFilterOrderByPaginationWithDapperAsync             | 620,303.9 us | 10,092.80 us | 9,440.81 us  | 42.02 KB  |
| FindWithFilterOrderByPaginationWithEFCoreAsync             | 636,583.7 us | 12,314.05 us | 11,518.57 us | 256.57 KB |
| FindWithFilterOrderByPaginationWithEFCoreAsNoTrackingAsync | 620,287.4 us | 7,573.23 us  | 7,084.01 us  | 223.68 KB |

For 50 consecutive operations:

| Method                                                     | Mean          | Error       | StdDev      | Allocated  |
| ---------------------------------------------------------- | ------------- | ----------- | ----------- | ---------- |
| FindWithFilterOrderByPaginationWithDapperAsync             | 43,612.958 ms | 474.2633 ms | 443.6262 ms | 2048.23 KB |
| FindWithFilterOrderByPaginationWithEFCoreAsync             | 37,708.436 ms | 140.6169 ms | 109.7844 ms | 9988.21 KB |
| FindWithFilterOrderByPaginationWithEFCoreAsNoTrackingAsync | 37,770.107 ms | 214.9115 ms | 179.4608 ms | 8326.77 KB |

**Summary**:

- For single operations, **Dapper** and **EF Core with AsNoTracking** perform similarly, but **EF Core** uses more memory.
- In consecutive operations, **EF Core** with AsNoTracking performs faster but using more memory than Dapper.
- **Conclusion**: **EF Core** is generally preferable for repeated queries with filtering, sorting, and pagination, due to optimizations that make it more efficient in complex queries but one thing to be noted is the Error and Standard Deviation seems high for both EF Core and Dapper which means result may vary quite a bit. So, this part must be tested case to case basis.

## 3. Inserting a Product

For a single operation:

| Method                       | Mean     | Error   | StdDev   | Allocated |
| ---------------------------- | -------- | ------- | -------- | --------- |
| InsertProductWithDapperAsync | 167.3 us | 3.15 us | 4.10 us  | 6.83 KB   |
| InsertProductWithEFCoreAsync | 367.8 us | 7.24 us | 16.48 us | 110.8 KB  |

For 50 consecutive operations:

| Method                       | Mean      | Error     | StdDev    | Allocated  |
| ---------------------------- | --------- | --------- | --------- | ---------- |
| InsertProductWithDapperAsync | 9.218 ms  | 0.1760 ms | 0.1560 ms | 333.41 KB  |
| InsertProductWithEFCoreAsync | 18.945 ms | 0.2834 ms | 0.2512 ms | 5530.56 KB |

**Summary**:

- **Dapper** performs inserts faster and with lower memory usage compared to **EF Core**.
- The difference becomes more significant with consecutive operations, where **EF Core** is slower and has higher memory consumption.
- **Conclusion**: For applications with high insert volume, **Dapper** is preferable due to its efficiency in handling bulk insert operations.

## Overall Insights

In summary, each ORM has distinct strengths, making them suitable for different use cases in application development.

**Dapper**:

- Dapper excels in scenarios that demand high-speed, efficient data handling with minimal memory usage, such as single-record retrievals and high-volume inserts.
- It performs exceptionally well in both single and bulk insert operations, making it ideal for applications requiring quick, straightforward database interactions.
- However, for complex queries involving advanced filtering, sorting, and pagination, Dapper’s performance can vary, as indicated by higher error and standard deviation in these operations.

**EF Core**:

- EF Core is advantageous for applications requiring robust querying capabilities, including change tracking and handling entity relationships.
- It performs particularly well in complex, repeated queries with filtering, sorting, and pagination, benefiting from optimizations that improve query handling and tracking.
- While it consumes more memory and may be slower in single-record and bulk insert operations, using `AsNoTracking` can help improve performance in scenarios where change tracking is unnecessary.

## Conclusion

For high-performance cases needing rapid execution and low memory use, Dapper is ideal. EF Core, however, is better for complex data handling and change tracking. Evaluating each ORM on a case-by-case basis is wise, especially for operations where consistent performance is critical. A practical approach could be to start with EF Core for command-type operations, especially when working with complex entity models that need change tracking. Meanwhile, consider using Dapper for read operations to leverage its speed and the flexibility of SQL, delivering data efficiently to end users.

## Reference

<ul>
  <li class="break-words">
    GitHub Repository —
    <a href="https://github.com/sayyedulawwab/EFCoreVsDapper">
      https://github.com/sayyedulawwab/EFCoreVsDapper
    </a>
  </li>
  <li>ChatGPT for paraphrasing and refining content flow</li>
</ul>
