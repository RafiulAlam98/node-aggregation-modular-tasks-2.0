# What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
To define and enforce a consistent structure and behaviour for the data stored in the database model has been created with interface and schema. 

To establish the rules for the fields, their types, and any constraints or validations that are applied to the data is known to the schema. This helps to maintain data integrity and consistency, ensuring that only valid and expected data is stored.

The interface allows the definition of a set of methods or functions that can interact with the data in a standardised way. The abstraction layer simplifies the process of reading, writing, updating, and deleting data, providing a clear and consistent API for working with the database.

Creating an interface and schema model helps organization, consistency, and maintainability in the MongoDB database, making it easier to manage and work with the data effectively.

Creating a model with an interface and schema in MongoDB helps in defining the structure of a collection in many ways,
The schema allows specifying the field names, data types, requirement status etc. This helps ensure that all documents in the collection adhere to a consistent structure.
The schema allows for data validation, such as type checks, value constraints or custom validations. MongoDB validates the data by inserting or updating elements, ensuring that only valid data is stored in the collection
The schema acts as a documentation source for the structure of the collection.




# Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Field filtering in MongoDB is known for the ability to specify which fields to include or exclude in the returned documents during the querying of a collection. It allows control of the shape of the data returned from a query and can be useful for optimizing performance and reducing the amount of data transferred over the network.
By using the projection parameter within the find() method in MongoDB include or exclude field can be specified. 
Inclusion and exclusion can be mixed in the same projection object but excluding fields can generally take precedence over including fields. 
If both inclusion and exclusion are specified for the same field, the exclusion takes effect.
Field filtering can significantly improve query performance and reduce the amount of data transferred over the network, especially when dealing with large documents or collections where not all fields are needed in a particular context.

# What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose?
  
The Instance methods are custom methods for individual documents of a user-defined model. These methods are unique for a document and can be accessed and invoked on that document. Instance methods help to encapsulate custom logic and operations that are specific to a document's behaviour.
Example:
Const userschema = new Schema(
{name:{type: String, required: true}}, 
{age:{type: Number, required: true}})
userSchema.methods.greeting = function() { return `Hello, my name is ${this.name} and I am ${this.age} years old.`; };
const User = mongoose.model('User', userSchema);
//creating instances
Const user = new User ({ name: “Tonmoy”, age: 25 });
console.log( user.greeting() )

An instance method can access and modify the document's fields using the this keyword, allowing for convenient manipulation of the document's properties within the context of the method

# How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage?

$ne (not equal): Use to find the document which is not equivalent to the required field. 
	Ex: db.collection.find({ status: { $ne: "completed" } })

$gt (greater than): Finds the document that is exactly greater than of the required document.
Ex: db.collection.find({ age: { $gt: 25 } })

$lt (less than): Finds the document that is exactly lesser than the required document.
Ex: db.collection.find({ age: { $lt: 25 } })

$gte (greater than equal or equal to): Finds the document that is greater than or equivalent to the required document.
Ex: db.collection.find({ age: { $gte: 25 } })

$lte (less than or equal to): Finds the document that is less than or equivalent to the required document.
Ex: db.collection.find({ age: { $lte: 25 } })


# What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

MongoDB's $in and $nin operators are used to match the values against of an array of values in a query.

$in operator matches all documents where a specified field's value matches any value in the given array.
Ex: 
// Find documents where the "colour" field is either "red", "green", or "blue" 

db. collection.find({ colour: { $in: ["red", "green", "blue"] } })
this query will return documents where the "colour" field matches any of the values in the array ["red", "green", "blue"].

$nin is the negation of $in, It matches the value where the specified value doesn’t match the required array document.
Ex:

// Find documents where the "colour" field is either "red", "green", or "blue" 

db. collection.find({ colour: { $in: ["red", "green", "blue"] } })
this query will return documents where the "colour" field doesn’t match any of the values in the array ["red", "green", "blue"].
