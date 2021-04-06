# Expense Tracker

To run this application locally run `npm i && npm run dev` in the root directory.

The app is available on port 3000, and the API runs on port 4000.

Running `npm run dev` runs both, to run them independently use `npm run client` and/or `npm run server`

## API

To view payments:
`GET /api/v1/payments`

To add payment:
`POST /api/v1/payments`
with body containing description, amount, and person, e.g.
```
{
    "description": "books",
    "amount": 55,
    "person": "Jamie"
}
```

To delete payment:
`DELETE /api/v1/payment/:id`

To view history:
`GET /api/v1/history`

## TO DO:

Many things...

- [ ] TESTS
- [ ] Add Storybook for components?
- [ ] Cache-ing
- [ ] Add payments form
- [ ] Select history by month
- [ ] Select payments by month 
- [ ] Nicer UI because ew
- [ ] Logging
- [ ] Remove some code duplication, e.g. in MainContext
- [ ] Edit payments
- [ ] Automatically show total for month and add to /history db
- [ ] ... TBC
