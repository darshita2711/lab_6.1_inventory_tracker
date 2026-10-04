## 1. How does TypeScript enforce type safety?
TypeScript checks that we use the correct type of data. For example, price should be a number and name should be a string.

## 2. How did inheritance reduce code duplication?
Both PhysicalProduct and DigitalProduct get common properties and methods from the Product class. This saves us from writing the same code again.

## 3. What are the benefits of access modifiers?
Access modifiers control who can use or change the data in a class. They help protect the data and keep the code organized.

## 4. How would polymorphism help with a new SubscriptionProduct?
Polymorphism would make it so after extending the Product class, SubscriptionProduct would have all the properties and methods available in Product, and could have additional properties added such as subscriptionLength.