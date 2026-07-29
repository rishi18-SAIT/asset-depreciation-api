# Asset Depreciation API

A RESTful API built with **Node.js** and **Express.js** to calculate yearly asset depreciation using the **Straight-Line Depreciation** method.

---

## Features

- Calculate yearly asset depreciation
- Input validation
- Returns yearly depreciation schedule
- REST API built using Express.js
- JSON request and response

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman (API Testing)

---

## Project Structure

```
asset-depreciation-api
│
├── controllers
│   └── depreciationController.js
│
├── routes
│   └── depreciationRoutes.js
│
├── server.js
├── package.json
├── README.md
└── screenshots
    └── postman-success.png
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/rishi18-SAIT/asset-depreciation-api.git
```

Go to the project directory

```bash
cd asset-depreciation-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

The server will start on

```
http://localhost:3000
```

---

## API Endpoint

### Calculate Asset Depreciation

**Method**

```
POST
```

**Endpoint**

```
/api/calculate_asset_depreciation
```

---

## Request Body

```json
{
    "costOfAsset": 100000,
    "salvageValue": 20000,
    "duration": 5
}
```

---

## Sample Response

```json
{
    "costOfAsset": 100000,
    "salvageValue": 20000,
    "duration": 5,
    "depreciationSchedule": [
        {
            "year": 1,
            "depreciationAmount": 16000,
            "endBookValue": 84000
        },
        {
            "year": 2,
            "depreciationAmount": 16000,
            "endBookValue": 68000
        },
        {
            "year": 3,
            "depreciationAmount": 16000,
            "endBookValue": 52000
        },
        {
            "year": 4,
            "depreciationAmount": 16000,
            "endBookValue": 36000
        },
        {
            "year": 5,
            "depreciationAmount": 16000,
            "endBookValue": 20000
        }
    ]
}
```

---

## Depreciation Formula

The API uses the **Straight-Line Depreciation** method.

```
Yearly Depreciation = (Cost of Asset - Salvage Value) / Duration
```

Example:

```
Cost of Asset = 100000

Salvage Value = 20000

Duration = 5 Years

Yearly Depreciation = (100000 - 20000) / 5

= 16000
```

---

## Validation

The API validates the following:

- Cost of asset is required
- Salvage value is required
- Duration is required
- Cost of asset must be greater than zero
- Salvage value cannot be negative
- Salvage value cannot exceed the asset cost
- Duration must be greater than zero

---

## Testing

The API was tested successfully using **Postman**.

---

## Postman Test Result

Add the screenshot below after creating a folder named **screenshots**.

```
screenshots/postman-success.png
```

Then use:

```markdown
![API Test](screenshots/postman-success.png)
```

---

## Author

**Rishikesh Ranjan**

GitHub: https://github.com/rishi18-SAIT
