# 🎌 Anime Search Engine

<div align="center">

**A beautiful, mobile-first anime search engine with bilingual support (English & Khmer)**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://but-handle-stream-evaluate.trycloudflare.com)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-green?style=for-the-badge&logo=express)](https://expressjs.com)
[![Jikan API](https://img.shields.io/badge/Jikan-API-orange?style=for-the-badge)](https://jikan.moe)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

![Mobile Preview](https://i.imgur.com/placeholder1.png)
*Beautiful dark theme with mobile-app feel*

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [API](#-api)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### 🔍 Search & Discovery
- **Full-text search** — Search anime by title
- **Genre filtering** — Filter by 1+ genres (Action, Comedy, Drama, etc.)
- **Year filtering** — Find anime by release year
- **Pagination** — Browse through search results

### 📱 User Experience
- **Mobile-first design** — Looks like a native app on phones
- **Dark anime theme** — Purple/space aesthetic
- **Bilingual support** — Switch between English 🇬🇧 and Khmer 🇰 instantly
- **Responsive layout** — Works on all screen sizes

### 📊 Anime Details
- **Rich information** — Title, rating, episodes, status, type
- **Cover images** — High-quality poster art
- **Synopsis** — Full story description with expand/collapse
- **Trailer embed** — Watch trailers directly
- **Characters** — Main cast with images
- **Stats** — Score, rank, popularity, studio, season

### 🏆 Additional Pages
- **Top Anime** — Browse top-rated anime list
- **Detail Page** — Comprehensive anime information

---

## 📸 Screenshots

### Home Page (Khmer)
![Home Page Khmer](https://i.imgur.com/placeholder2.png)

### Search Results
![Search Results](https://i.imgur.com/placeholder3.png)

### Anime Detail Page
![Detail Page](https://i.imgur.com/placeholder4.png)

### Language Switcher
![Language Switch](https://i.imgur.com/placeholder5.png)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **EJS** | Template engine |
| **Bootstrap 5** | UI framework |
| **Axios** | HTTP client |
| **Jikan API** | Anime data source |
| **Cloudflare Tunnel** | Hosting & tunneling |

---

## 🌐 Live Demo

> **⚠️ Note:** The demo uses a Cloudflare Quick Tunnel which is temporary. For production, deploy to a permanent host.

**[🚀 Open Live Demo](https://but-handle-stream-evaluate.trycloudflare.com)**

---

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/blaxkmiradev/anime-search-engine.git
cd anime-search-engine
```

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
# Development
node server.js

# Or with nodemon (if installed)
nodemon server.js
```

### Access the App
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🚀 Usage

### Basic Search
1. Enter an anime title in the search box
2. Click **ស្វែងរក** (Search) or press Enter
3. Browse results and click any anime for details

### Filter by Genre
1. Select a genre from the dropdown
2. Optionally add a year
3. Click search to see filtered results

### Switch Language
- Click **EN** or **KH** button in the navbar
- Language persists across pages

### Browse Top Anime
- Click **កំពូល** (Top) in the navbar
- View top-rated anime list

---

## 📡 API

This project uses the **Jikan API v4** (unofficial MyAnimeList API).

- **Base URL:** `https://api.jikan.moe/v4`
- **Documentation:** https://docs.api.jikan.moe
- **Rate Limits:** 3 requests/second, 60 requests/minute

### Endpoints Used
| Endpoint | Purpose |
|----------|---------|
| `GET /anime` | Search anime |
| `GET /anime/{id}/full` | Get anime details |
| `GET /anime/{id}/characters` | Get characters |
| `GET /top/anime` | Get top anime |
| `GET /genres/anime` | Get genre list |

---

## 📁 Project Structure

```
anime-search-engine/
├── server.js              # Express server
├── views/
│   ├── index.ejs         # Home/search page
│   ├── detail.ejs        # Anime detail page
│   ├── top.ejs           # Top anime page
│   └── layout.ejs        # Base layout (unused)
├── public/
│   └── css/
│       └── style.css     # Custom styles
├── package.json          # Dependencies
└── README.md             # This file
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on mobile devices
- Ensure bilingual support works

---

## 📄 License

This project is licensed under the **MIT License**.

```
Copyright (c) 2026 Rikixz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍ Author

**Rikixz**

- GitHub: [@blaxkmiradev](https://github.com/blaxkmiradev)
- Telegram: [@yunaonthetp](https://t.me/yunaonthetp)

---

## 🙏 Acknowledgments

- [Jikan API](https://jikan.moe) — Free MyAnimeList API
- [MyAnimeList](https://myanimelist.net) — Anime database
- [Bootstrap](https://getbootstrap.com) — UI framework
- [Bootstrap Icons](https://icons.getbootstrap.com) — Icon library

---

<div align="center">

**Made with ❤️ by Rikixz**

⭐ Star this repo if you find it helpful!

</div>
