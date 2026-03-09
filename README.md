Here is your content cleaned up and properly formatted as a complete, ready-to-use **`README.md`** file (with corrected markdown syntax, consistent spacing, fixed code blocks, and proper escaping where needed).

You can copy-paste this directly into your repository:

```markdown
# 🚀 CODE-MODE

![GitHub repo size](https://img.shields.io/github/repo-size/Saikat-Bara479i/CODE-MODE)
![GitHub stars](https://img.shields.io/github/stars/Saikat-Bara479i/CODE-MODE)
![GitHub forks](https://img.shields.io/github/forks/Saikat-Bara479i/CODE-MODE)
![GitHub issues](https://img.shields.io/github/issues/Saikat-Bara479i/CODE-MODE)
![License](https://img.shields.io/github/license/Saikat-Bara479i/CODE-MODE)

A **Full-Stack Online Coding Platform** where users can write, run, and test code directly in the browser.

The platform integrates a **React frontend, Node.js backend, PostgreSQL database, and Judge0 execution engine** to simulate a mini **online judge system** similar to LeetCode or HackerRank.

---

## ✨ Features

- 🧑‍💻 Online Code Editor
- ⚡ Real-time Code Execution
- 🐳 Docker-based Judge0 Integration
- 📦 PostgreSQL Database with Prisma ORM
- 🔐 Backend API for Code Submissions
- 🌐 Modern React Frontend (Vite)

---

## 🏗 System Architecture

```
User
│
▼
Frontend (React + Vite)
│
▼
Backend API (Node.js + Express)
│
├── PostgreSQL Database (Prisma ORM)
│
▼
Judge0 Execution Engine (Docker)
```

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- PostgreSQL

### Code Execution
- Judge0
- Docker

---

## 📂 Project Structure

```
CODE-MODE
│
├── frontend/          # React frontend
│
├── backend/           # Express backend API
│
├── prisma/            # Prisma schema & migrations
│
├── docker/            # Judge0 Docker configuration
│
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Saikat-Bara479i/CODE-MODE.git
cd CODE-MODE
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
DATABASE_URL="your_postgres_connection_string"
JUDGE0_URL=http://localhost:2358
PORT=5000
```

Run backend:

```bash
npm start
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:  
**http://localhost:5173**

---

### 🐳 Running Judge0

Install Docker, then:

```bash
git clone https://github.com/judge0/judge0.git
cd judge0
docker compose up -d
```

Judge0 API will be available at:  
**http://localhost:2358**

---

### 🗄 Database Setup

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 📸 Screenshots

*(Add screenshots of your UI here)*

Examples:

```text
screenshots/editor.png
screenshots/output.png
screenshots/submission.png
```

---

## 📈 Future Improvements

- User Authentication (JWT / OAuth)
- Problem Library & Categories
- Online Coding Contests
- Leaderboard System
- Code Submission History
- AI-based Code Suggestions / Autocomplete

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Saikat Barai**  
GitHub: [https://github.com/Saikat-Bara479i](https://github.com/Saikat-Bara479i)

---

## Flow🚤
User ------>ADMIN--->CREATE PROBLEM------>(TEST CASES, CODESNIPPET, REFERNCE SOLUTION)------>CHECK VIA JUDGE0(StdOut==expectedOutput)->SAVE IN DB
User---->USER---->GET PROBLEM---->EXECUTE CODE---->LOOP THROUGH EACH TEST CASES---->IF FAILS STOP🫷---->ELSE SAVE IN DB---->STORE INDIVIDUAL TEST CASES---->FETCH SUBNMISSION


