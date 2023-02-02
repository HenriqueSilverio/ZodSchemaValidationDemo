# Zod Schema Validation Demo

Demo showing request schema validation with [Zod](https://zod.dev).

## Try It Yourself

In the `main` branch there's a starting point, so you can clone it and follow along the tutorial steps.

## Outcome

If you prefer to just take a peek on the final outcome, jump to the `outcome` branch.

⚠️ The code for the endpoints shown in the steps below are in the `outcome` branch!

## Running With Docker

### Build

```bash
docker build -t zod .
```

### Run

To start our server at `http://localhost:3080`, run:

```bash
docker run --rm -it -p 3080:3080 --name zod zod
```

### Access

You can inspect the container files with:

```bash
docker exec -it zod /bin/sh
```

Our REST API exposes the following endpoints:

| VERB | URI                                                     |
|------|---------------------------------------------------------|
| POST | `/transactions`                                         |
| GET  | `/transactions?startAt={YYYY-MM-DD}&endAt={YYYY-MM-DD}` |
| GET  | `/transactions/:transactionID`                          |

Example requests data:

```javascript
// POST /transactions JSON body
{
  "accountID": "bbedb680-9b82-4de9-b9d9-ec8ddd9efc1f",
  "description": "Groceries",
  "amount": 245.00,
  "dueDate": "2023-02-02T15:22:20.595Z"
}
```

```javascript
// GET /transactions/bbedb680-9b82-4de9-b9d9-ec8ddd9efc1f
```

```javascript
// GET /transactions?startAt=2023-02-01&endAt=2023-02-28
```

Happy coding! 👨‍💻
