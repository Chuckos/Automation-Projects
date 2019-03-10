# API Automation

* Technologies used: Mocha.js, Chai.js, Supertest.js, json-server.js, faker.js, lodash.js.

# Json-Server

faker.js and lodash.js libraries are also being used. 


Create a db.json file

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```
$ json-server --watch db.json
```

Now if you go to http://localhost:3000


To Run Data seed

```
json-server generate.js
```
