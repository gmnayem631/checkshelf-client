# CheckShelf

A full-stack chess bookstore with an AI-powered recommendation engine. Users can browse chess books and courses, manage a cart, and get personalized book recommendations based on their rating, skill level, and topic of interest, powered by Google Gemini API.

Live: [CheckShelf](https://checkshelf.netlify.app)

[Frontend](https://github.com/gmnayem631/checkshelf-client) | [Backend](https://github.com/gmnayem631/checkshelf-server)

---

## Features

**Bookstore**

- Browse a curated catalog of chess books with filtering by level and topic
- View detailed book pages with chess position previews
- Add books to a persistent cart with quantity controls

**AI Recommendation Engine**

- Users input their Chess.com rapid rating, skill level, and topic of interest
- Google Gemini 2.5 Flash analyzes a filtered MongoDB inventory and returns the 2 most suitable books
- Handles quota limits, malformed AI responses, and invalid IDs gracefully

**Courses and Instructors**

- Browse chess courses and instructor profiles
- View detailed course and instructor pages

**Authentication**

- Email/password and Google through Firebase Authentication
- Private routes redirect unauthenticated users to login
- Cart actions require authentication

---

## Tech Stack

**Frontend**

- React
- React Router
- TailwindCSS
- DaisyUI
- chessboard.js
- React Recharts
- Firebase Authentication

**Backend**

- Express.js
- MongoDB
- Google Gemini 2.5 Flash

---

## AI Recommendation Flow

1. User submits their rating, skill level, and topic from the Grandmaster Assistant page
2. Backend queries MongoDB for books matching the level and topic tag. Only `_id`, `title`, `level`, and `tags` are sent to Gemini
3. Gemini returns a JSON array of 2 book IDs
4. Backend validates and parses the response, queries MongoDB for the full book objects, and returns them to the frontend
5. React renders the recommended books as cards

The inventory sent to Gemini is pre-filtered and projection-limited to minimize token usage and stay within free tier limits.

---

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB Atlas
- Google Gemini API key
- Firebase project

### Backend Setup

```bash
git clone https://github.com/gmnayem631/checkshelf-server
cd checkshelf-server
npm install
```

Create a `.env` file:

```
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

```bash
nodemon index.js
```

### Frontend Setup

```bash
git clone https://github.com/gmnayem631/checkshelf-client
cd checkshelf-client
npm install
```

```bash
npm run dev
```

---

## Project Structure

### Frontend

```
checkshelf-client/
src/
pages/
components/
context/
routes/
firebase/
```

### Backend

```
checkshelf-server/
index.js
vercel.json
```

---

## API Endpoints

| Method | Endpoint            | Description                         |
| ------ | ------------------- | ----------------------------------- |
| GET    | `/books`            | Get all books                       |
| GET    | `/books/:id`        | Get a single book                   |
| POST   | `/books`            | Add a new book                      |
| GET    | `/courses`          | Get all courses                     |
| GET    | `/courses/:id`      | Get a single course                 |
| GET    | `/instructors`      | Get all instructors                 |
| GET    | `/instructors/:id`  | Get a single instructor             |
| POST   | `/aiRecommendation` | Get AI-powered book recommendations |

---

## Author

Gulam Mustafa Nayem
