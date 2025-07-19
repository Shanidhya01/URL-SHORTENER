# URL Shortener API

A RESTful API for shortening URLs, built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## 📦 Folder Structure

```
backend/
│── src/
│   ├── config/         # Database & CORS configuration
│   ├── controllers/    # Route controller logic
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── utils/          # Utility functions
│   └── server.ts       # Entry point
│── .env                # Environment variables
│── package.json
│── tsconfig.json
│── nodemon.json
│── readme.md
```

---

## 🚀 Features

- **Shorten URLs**: Create short, unique links for any valid URL.
- **Redirect**: Visiting a short URL redirects to the original.
- **Click Tracking**: Counts how many times each short URL is used.
- **Delete URLs**: Remove shortened URLs by ID.
- **CORS**: Configurable origins for frontend integration.

---

## 🛠️ Technologies Used

- **Node.js** & **Express**
- **TypeScript**
- **MongoDB** & **Mongoose**
- **NanoID** (for short URL generation)
- **dotenv** (for environment variables)
- **CORS**

---

## ⚙️ Setup & Usage

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create a `.env` file in the `backend` folder:

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
PORT=5000
```

### 3. Run the server (development)

```bash
npm run dev
```

Or build and run (production):

```bash
npm run build
npm start
```

---

## 📡 API Endpoints

### **Base URL:** `/api/`

#### **GET /shortUrl**
Returns all shortened URLs.

#### **GET /shortUrl/:id**
Redirects to the original URL and increments click count.

#### **POST /shortUrl**
Creates a new shortened URL.
- **Body:** `{ "fullUrl": "https://example.com" }`

#### **DELETE /shortUrl/:id**
Deletes a shortened URL by its MongoDB ObjectId.

---

## 🧩 Example Model

```ts
{
  _id: ObjectId,
  fullUrl: "https://example.com",
  shortUrl: "abc123defg",
  clicks: 0,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🧑‍💻 Author

- [Shanidhya01](https://github.com/Shanidhya01)

---

## 📚 Related

See the main [`Readme.md`](../Readme.md) for full-stack setup and frontend