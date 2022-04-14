# Student Organizer API solution

Solution to Ironhack final project

Front-end repository link:

## TECHNOLOGIES

- Node.js
- Express

## USAGE

- Online:

-or-

- Local:

  - Clone this repo;
  - `npm i`;
  - Set your enviroment variables with

```javascript
PORT =                      //use the one you prefer
MONGO_URI =                 //your local mongoDB or AtlasDB
SECRET_JWT =                // your favorite way to encode the secret
CLOUDINARY_NAME =           // your cloud name
CLOUDINARY_KEY =            // your cloud key
CLOUDINARY_SECRET =         // your cloud secret
```

- Use `npm start` (node) or `npm run dev` (nodemon) to start application at:

```
http://localhost:<PORT>
```

### PUBLIC ROUTES

#### Authentication

| Method | Endpoint     | Payload                                                 | Response                   | Action             |
| ------ | ------------ | ------------------------------------------------------- | -------------------------- | ------------------ |
| POST   | /auth/signup | { "email": string, <br/> "password": string,<br/> "name": string } | { user }            | Creates a new user |
| POST   | /auth/login  | { "email": string, <br/>"name": string }                     | { token } | Login user         |

### PRIVATE ROUTES

#### User

| Method | Endpoint            | Payload                             | Response | Action                    |
| ------ | ------------------- | ----------------------------------- | -------- | ------------------------- |
| GET    | /user               | \-                                  | { user}  | Gets logged user          |
| PUT    | /user               | { “name”: string, <br/> “email”: string } | { user } | Updates logged user       |
| * PUT    | /user/profile-image | { “image”: image }                  | { user } | Updates logged user image |

 \* This is a Multipart form route that receives a image file with <u>image</u> as the field name
#### Books

| Method | Endpoint            | Payload                              | Response    | Action                       |
| ------ | ------------------- | ------------------------------------ | ----------- | ---------------------------- |
| GET    | /book               | \-                                   | \[ books \] | Gets all books               |
| GET    | /book/:bookId       | \-                                   | { book }    | Gets a book                  |
| GET    | /book/favorites     | \-                                   | \[ books\]  | Gets favorited books by user |
| POST   | /book               | { "name": string, <br/> "author": string } | { book }    | Creates a book               |
| * PUT    | /book/image/:bookId | { "image": image }                   | { book }    | Updates a book cover         |
| DELETE | /book/:bookId       | \-                                   | \-          | Deletes a book               |

\* This is a Multipart form route that receives a image file with <u>image</u> as the field name
#### Tasks

| Method | Endpoint                | Payload             | Response    | Action            |
| ------ | ----------------------- | ------------------- | ----------- | ----------------- |
| GET    | /task                   | \-                  | \[ tasks \] | Gets all tasks    |
| POST   | /task                   | { "title": string } | { task }    | Creates a task    |
| PUT    | /task/:taskId           | { "title": string } | { task }    | Updates a task    |
| DELETE | /task/deleteOne/:taskId | \-                  | \-          | Deletes a task    |
| DELETE | /task/deleteAll         | \-                  | \-          | Deletes all tasks |

#### Events

| Method | Endpoint                  | Payload                                                  | Response     | Action            |
| ------ | ------------------------- | -------------------------------------------------------- | ------------ | ----------------- |
| GET    | /event                    | \-                                                       | \[ events \] | Gets all events   |
| POST   | /event                    | { "title": string, <br/> "description": string, <br/> "date": date } | { event }    | Creates a event   |
| PUT    | /event/:eventId           | { "title": string, <br/> "description": string, <br/> "date": date } | { event }    | Updates a event   |
| DELETE | /event/deleteOne/:eventId | \-                                                       | \-           | Deletes a event   |
| DELETE | /event/deleteAll          | \-                                                       | \-           | Deletes all event |