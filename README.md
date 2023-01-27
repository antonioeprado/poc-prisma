# About this project

Hi! This is a POC about PRISMA ORM. I might've gone a bit overboard for just a POC but I intend on making it a full project when I have the time.
It is intended as a shopping list, which can be personal or family owned. Each user can only own **ONE** family, but can join as many as they wish.
Without further ado, these are the project features:
- **Sign-up/Login** with password hash/validation using [**bcrypt**](https://www.npmjs.com/package/bcrypt).
- **Token generation/validation** using [**jwt**](https://www.npmjs.com/package/jsonwebtoken).
- **Product register**.
- **Family creation**.
- **Request to join a family**.
- **The owner of a family** can accept or deny a request. If a request has been denied, the petitioner needs to send another one, if they wish to try again, as the request is deleted by the server.
As said before, I intend on developing this project. It is missing some features, like user removal of a family, better error handling, automated testing, etc...

## How to install

1. Clone this repository.
2. Install the dependecies via `npm install`.
3. Run `npx prisma init`.
4. Configure the `.env` files, as specified by [.env.example](.env.example).
5. Run the migrations with `npm run dev:migration:generate`.

## How to run

- Just run `npm run dev`.
