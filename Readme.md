# URL Shortener

A full-stack URL shortener built with **MongoDB**, **Express**, **React**, and **Node.js**.

---

## 📦 Project Structure

```
url-shortener/
│── backend/      # Node.js + Express + MongoDB API
│── frontend/     # React + Vite + TailwindCSS 
│── Readme.md
```

---

## 🚀 Features

- **Shorten URLs**: Enter a long URL and get a short, unique link.
- **Copy & Delete**: Copy shortened URLs to clipboard or delete them.
- **Click Tracking**: See how many times each short URL was used.
- **Responsive UI**: Modern, mobile-friendly design.
- **API**: RESTful endpoints for CRUD operations.

---

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Vite, TailwindCSS, SASS, Axios
- **Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, NanoID
- **Dev Tools**: ESLint, Nodemon, dotenv

---

## ⚙️ Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI:
echo "MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>" > .env
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Endpoints

See [`backend/readme.md`](./backend/readme.md) for full API documentation.

---

## 🖼️ Customization

- **Background Image**: Place your image in `frontend/src/assets/bg.webp` and update Tailwind config if needed.
- **Environment Variables**:  
  - Backend: `.env` for MongoDB URI  
  - Frontend: `VITE_SERVER_URL` for API base URL

---

## 📚 Learn More

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)

---

## 🧑‍💻 Author
- [Shanidhya01](https:github.com/Shanidhya01)