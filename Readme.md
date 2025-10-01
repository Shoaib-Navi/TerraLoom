# 🚀 TerraLoom
A site where shade and meet shaded one.

## 📦 Features
- Fast and lightweight
- RESTful API with Express
- MongoDB integration
- Responsive UI with Bootstrap

## 🛠️ Installation
```bash
git clone https://github.com/your-username/project-name
cd project-name
npm install
npm start


------------------------------------------:(Notes Points):----------------------------------------------

 * `wrapSync` is used to convert a synchronous function into an asynchronous one by wrapping its return value and passing it to a callback. This is especially useful when you're working with libraries like async that expect all functions to follow the async pattern.


# Validations

1. Client side validation(form)
 -making each field as required
 -if in bootstrap then add "novalidation" and class="needs-validation"
 -for comment .invalid-feedback -- Now you can leave statement there.

 Now anyone can add wrong data from postman or Hopscooch. So we need to require server side validation.
 
2. Server side validation(joi)
?how i do this--
1.create joi schema
2.schema validate function
3.pass as middleware
```

## deleting individual list comment

? what will happen when i delete the post then the reviews should be deleted.

i want when i delete post then the reviews of that post should also be deleted.
for that i create listingSchema.post in the listing schema file 












## Express Router

📌 Express Router – In Simple Points
What it is---
>> A mini version of the main Express app.
>> Helps you organize routes into smaller, separate files.

Why use it---
>> Keeps your code clean and modular.
>> Avoids writing all routes in one big app.js.

How it works---
>> You create a router with express.Router().
>> Define routes on this router (like router.get(...)).
>> Export the router and use it in your main app with app.use().



## Notes

Routes - are basically for path
controller - basically hold callback function or we can say functionalities.












to know about....
{$in: }
{$pull:}
{$between:}

## Routing structure
1.app.js
2.