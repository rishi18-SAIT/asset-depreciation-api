# Asset Depreciation API

## Tech Stack

- Node.js
- Express.js

## Installation

```bash
npm install
```

## Run the project

```bash
npm run dev
```

## API Endpoint

POST `/api/calculate_asset_depreciation`

### Request

```json
{
  "costOfAsset": 100000,
  "salvageValue": 20000,
  "duration": 5
}
```

### Response

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
    }
  ]
}
```
