# AI-Powered Blog Generator 🧠✍️

This is a full-stack AI-powered blog generator using React (Vite) for the frontend and Express for the backend.

## Features
- User inputs a topic and tone.
- Generates a complete blog post using OpenAI's GPT model.
- Fully responsive and styled with Tailwind CSS.
- Loading spinners, error handling, and modern UI components.

---

## 🗂 Repository Structure

```
my-ai-blog-generator/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── BlogForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── README.md
└── .gitignore
```

## ⚙️ Backend Setup (Express)

1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```

> Backend runs on `http://localhost:5000`

---

## 🎨 Frontend Setup (React + Tailwind)

1. Go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend app:
   ```bash
   npm run dev
   ```

> Frontend runs on `http://localhost:5173`

---

## 🧪 API Route

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| POST   | `/generate-blog` | Generates blog based on input    |

Request body example:
```json
{
  "topic": "Future of AI",
  "tone": "professional"
}

Response example:
```json
{
  "blog": "The future of AI is promising..."
}

---

## 🛠 Tech Stack
- React + Vite
- Tailwind CSS
- Express.js
- OpenAI GPT API

## 🌟 Future Improvements
- Add authentication (e.g., Google login).
- Save generated blogs to a database.
- Improve UI/UX with more animations.
- Share/export blog to PDF.

---

## 📄 License
MIT

---

## 🚀 Deploy Suggestions
- **Frontend:** Vercel, Netlify
- **Backend:** Render, Railway, Heroku

Happy coding! 🎉
