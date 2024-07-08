// Program.cs
using MinimalApiRest.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.MapGet("/", () => new { message = "Minimal API Rest (C#/.Net) is running." });

app.MapGet("/products", () =>
{
    var products = new List<Product>
    {
        new Product { Id = 1, Name = "Product1", Description = "Description1", Price = 10.5m, Stock = 100 },
        new Product { Id = 2, Name = "Product2", Description = "Description2", Price = 20.0m, Stock = 200 },
        new Product { Id = 3, Name = "Product3", Description = "Description3", Price = 30.5m, Stock = 300 },
    };
    return products;
});

app.MapPost("/products", (Product product) =>
{
    Console.WriteLine($"********** POST Product - Received Data. **********");
    return Results.Ok();
});

app.MapGet("/customers", () =>
{
    var customers = new List<Customer>
    {
        new Customer { Id = 1, FirstName = "John", LastName = "Doe", Email = "john@example.com", PhoneNumber = "1234567890" },
        new Customer { Id = 2, FirstName = "Jane", LastName = "Smith", Email = "jane@example.com", PhoneNumber = "0987654321" },
        new Customer { Id = 3, FirstName = "Bob", LastName = "Brown", Email = "bob@example.com", PhoneNumber = "1122334455" },
    };
    return customers;
});

app.MapPost("/customers", (Customer customer) =>
{
    Console.WriteLine($"********** POST Customer - Received Data. **********");
    return Results.Ok();
});

app.MapGet("/orders", () =>
{
    var orders = new List<Order>
    {
        new Order { Id = 1, ProductId = 1, CustomerId = 1, OrderDate = DateTime.Now, Quantity = 1 },
        new Order { Id = 2, ProductId = 2, CustomerId = 2, OrderDate = DateTime.Now, Quantity = 2 },
        new Order { Id = 3, ProductId = 3, CustomerId = 3, OrderDate = DateTime.Now, Quantity = 3 },
    };
    return orders;
});

app.MapPost("/orders", (Order order) =>
{
    Console.WriteLine($"********** POST Order - Received Data. **********");
    return Results.Ok();
});

app.MapGet("/categories", () =>
{
    var categories = new List<Category>
    {
        new Category { Id = 1, Name = "Category1", Description = "Description1", IsActive = true, CreatedAt = DateTime.Now },
        new Category { Id = 2, Name = "Category2", Description = "Description2", IsActive = true, CreatedAt = DateTime.Now },
        new Category { Id = 3, Name = "Category3", Description = "Description3", IsActive = true, CreatedAt = DateTime.Now },
    };
    return categories;
});

app.MapPost("/categories", (Category category) =>
{
    Console.WriteLine($"********** POST Category - Received Data. **********");
    return Results.Ok();
});

app.MapGet("/suppliers", () =>
{
    var suppliers = new List<Supplier>
    {
        new Supplier { Id = 1, CompanyName = "Supplier1", ContactName = "Contact1", Email = "contact1@example.com", Phone = "1234567890" },
        new Supplier { Id = 2, CompanyName = "Supplier2", ContactName = "Contact2", Email = "contact2@example.com", Phone = "0987654321" },
        new Supplier { Id = 3, CompanyName = "Supplier3", ContactName = "Contact3", Email = "contact3@example.com", Phone = "1122334455" },
    };
    return suppliers;
});

app.MapPost("/suppliers", (Supplier supplier) =>
{
    Console.WriteLine($"********** POST Supplier - Received Data. **********");
    return Results.Ok();
});

app.Run();
