# MERN URL Shortener Frontend

This is the **React + Vite + TailwindCSS** frontend for the MERN URL Shortener project.

---

## 📦 Folder Structure

```
frontend/
│── public/
│   ├── css/App.css
│   ├── sass/App.scss
│   ├── img/           # Place your background images here
│   └── vite.svg
│── src/
│   ├── assets/        # Static assets (e.g. bg.webp)
│   ├── components/    # React components
│   ├── helpers/       # Helper files (constants)
│   ├── interface/     # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── tsconfig.json
│── tsconfig.app.json
│── tsconfig.node.json
│── vite.config.ts
```

---

## 🚀 Features

- **Shorten URLs**: Paste a long URL and get a short link.
- **Copy & Delete**: Copy shortened URLs to clipboard or delete them.
- **Click Tracking**: See how many times each short URL was used.
- **Responsive UI**: Modern, mobile-friendly design.
- **Background Image**: Easily customizable via Tailwind and CSS.

---

## 🛠️ Technologies Used

- **React** (TypeScript)
- **Vite**
- **TailwindCSS**
- **SASS**
- **Axios**
- **React Icons**

---

## ⚙️ Setup & Usage

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Custom Styles

- Edit `public/sass/App.scss` and run `npm run styles` to compile to `public/css/App.css`.
- Tailwind config is in `tailwind.config.js`.
- To use a custom background image, place it in `public/img/` or `src/assets/` and update the Tailwind config or CSS.

---

## 🔗 Backend Connection

- The frontend expects the backend API at `http://localhost:3000/api`.
- You can change this in [`src/helpers/Constants.ts`](src/helpers/Constants.ts).

---

## 🖼️ Customization

- **Background Image**:  
  - Default is set via Tailwind (`bg-banner` uses `src/assets/bg.webp`).
  - To change, replace `bg.webp` or update the Tailwind config.

---

## 🧑‍💻 Author

- [Shanidhya01](https://github.com/Shanidhya01)

---

## 📚 Related

See the main [`Readme.md`](../Readme.md) for full-stack setup and backend