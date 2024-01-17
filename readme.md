# Task auto-pool-task Backend Description

- you can add 4 refferel under a user. if you try to add more then 4 user then API will give you an error message. Let's Explore --

# Deploy Link -- https://3-m489l71yy-th-raju.vercel.app/

- https://3-m489l71yy-th-raju.vercel.app/api/v1/user (GET)
- https://3-m489l71yy-th-raju.vercel.app/api/v1/user/root (POST)
- https://3-m489l71yy-th-raju.vercel.app/api/v1/user/register (Post)

## Technology used

- Node.js , Express.js, Mongoose, MongoDB

# Prerequisite

- install node_modules (npm i)

- create .env file in ./ and set Database url like --

  ```
  db_url= "Database link here"
  ```

# API's

- http://localhost:5000/api/v1/user (GET)
- http://localhost:5000/api/v1/user/root (POST)
- http://localhost:5000/api/v1/user/register (Post)

# API Description

## Create Root user first

- http://localhost:5000/api/v1/user/root (POST)

```
  {
  "userName": "Root",
  "referrerId": []
  }
```

## Then add others user at least 4

- http://localhost:5000/api/v1/user/register (Post)

```

  {
  "userName": "User A",
  "referrerId": "Root user's \_id/ Parents user id"
  }

```
