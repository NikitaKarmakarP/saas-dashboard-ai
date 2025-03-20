# saas-dashboard-ai 🧠✍️

A modern SaaS dashboard built with React and Tailwind CSS. Includes a responsive layout, dark mode toggle, stats cards, and a sales overview chart.

## Features
- 🌙 Light/Dark mode toggle
- 📊 Dashboard statistics cards
- 📈 Sales overview line chart (Recharts)
- 📁 Modular and reusable React components
- 💨 Tailwind CSS for utility-first styling
- ⚡ Smooth hover and transition effects

---

## 🗂 Repository Structure

```
my-ai-blog-generator/
/saas-dashboard-ai
|-- /backend
|   |-- /controllers
|   |   |-- blogController.js
|   |-- /models
|   |   |-- Blog.js
|   |-- /routes
|   |   |-- blogRoutes.js
|   |-- server.js
|   |-- .env
|-- /frontend
|   |-- /src
|   |   |-- /components
|   |   |   |-- Dashboard.js
|   |   |   |-- Navbar.js
|   |   |   |-- Sidebar.js
|   |   |   |-- BlogGenerator.js
|   |   |   |-- BlogHistory.js
|   |   |-- /pages
|   |   |   |-- Home.js
|   |   |   |-- Login.js
|   |   |   |-- Register.js
|   |   |-- /hooks
|   |   |   |-- useAuth.js
|   |   |-- /utils
|   |   |   |-- api.js
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- index.css
|   |-- .env
|   |-- tailwind.config.js
|   |-- postcss.config.js
|-- package.json (mono-repo)
|-- README.md
|-- .gitignore           
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

---

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

---

Made with ❤️ by Nikita Karmakar


Happy coding! 🎉
