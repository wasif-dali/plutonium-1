# TOPIC: Mongoose-Reference1

## Instructions:
- For this assignment you have to create a new branch - assignment/refPopulate
- Please make sure you rename the collections. Books to ‘myBook’. Authors to ‘myAuthor’
- Your myAuthor document should look like this (no author_id anymore)

```
{ 
_id: ObjectId("61951bfa4d9fe0d34da86829"),
author_name:"Chetan Bhagat",
age:25,
address:"New delhi"
}
```

- Your myBook document should look like this. The author property is a reference to myAuthor collection. 
```
{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Two states",
	author:"61951bfa4d9fe0d34da86829",
	price:50,
	ratings:4.5,
	publisher: "61951bfa4d9fe0d34da84523"
}
```

A publisher document looks like this.
```
{
_id: ObjectId("61951bfa4d9fe0d34da86344"),
name: “Penguin”,
headQuarter: “New Delhi”,
}

```

## Problem Statements:
1. Write a create author api that creates an author from the details in request body
2.  Write a create book api that takes author from the request body. You have to first check if authorId is present as well a valid authorId. A valid authorId is which is present in your authors collection. Also make sure you receive a publisherId in the request and validate this id. A valid publisherId is which is present in your publishers collection.
3. Write a get books api that fetches all the books along with their author details (you have to populate author)
4. Write a post api that creates a publisher resource from the details in the request body
5. Update the 3rd api (GET /books) such that in the authors details you receive _id, author_name and age.

