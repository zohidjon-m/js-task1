# 🏗️ Multi-Tenant Configurable Admin Panel (Express.js)

This is a simple backend API for managing tenants and their configuration settings in a multi-tenant SaaS system. Built using **Node.js** and **Express**, it supports retrieving tenant info and config by ID.

---

## 🚀 Setup Instructions

### 1. Install Dependencies

Make sure [Node.js](https://nodejs.org) is installed, then run:

```bash
npm install
```

---

## ▶️ Run the Server

Start the API:

```bash
node index.js
```

Server will start at:  
```
http://localhost:3000
```

---

## 🧪 Run Tests

This project uses **Jest** and **Supertest** for testing.  
To run all test cases:

```bash
npm test
```

---

## 🛠️ API Endpoints

### 🔹 `GET /api/tenants/:id`

Retrieve full details of a tenant by its ID.

**Example Request:**
```http
GET /api/tenants/9a4f7d8e-1234-4baf-9f8b-tenantA
```

**Example Response:**
```json
{
  "id": "9a4f7d8e-1234-4baf-9f8b-tenantA",
  "name": "Tenant A",
  "domain": "tenant-a.example.com",
  "config": {
    "enableRealtimeChat": true,
    "theme": "dark"
  }
}
```

---

### 🔹 `GET /api/config/:tenantId`

Returns just the configuration object for a tenant.

**Example Request:**
```http
GET /api/config/9a4f7d8e-1234-4baf-9f8b-tenantA
```

**Example Response:**
```json
{
  "enableRealtimeChat": true,
  "theme": "dark"
}
```

---

## 🧩 Notes

- Tenant data is stored **in-memory** for simplicity.
- UUIDs are randomly generated at server start. You can print them by adding `console.log(tenants)` in `routes/tenants.js`.

---

## 📁 Project Structure

```
multi-tenant-api/
├── index.js               # Main server
├── routes/
│   └── tenants.js         # Tenant routes + mock data
├── tests/
│   └── tenants.test.js    # Test cases
├── package.json           # Dependencies & scripts
└── README.md              # You're reading it
```
