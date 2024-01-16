# Task auto-pool-task Backend Description

## Technology used

- Node.js , Express.js, Mongoose, MongoDB

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
