# 🎌 Anime Search Engine

**A beautiful, mobile-first anime search engine with bilingual support (English & Khmer / ភាសាខ្មែរ)**

Made by **[Rikixz](https://github.com/blaxkmiradev)**

---

## ✨ Features

- 🔍 **Search** anime by title, genre, and year
- ⭐ **Shows** rating, episodes, cover image, status, and type
- 🌐 **Bilingual** — Switch between English and Khmer (ខ្មែរ) instantly
- 📱 **Mobile-first** — Feels like a native app on phone
- 🌙 **Dark anime theme** — Purple/space aesthetic
- 🏆 **Top Anime page** — Browse top-rated anime
- 📄 **Detail page** — Synopsis, trailer, characters, stats

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **EJS** | Template engine |
| **Bootstrap 5** | UI framework |
| **Axios** | HTTP client |
| **Jikan API v4** | Anime data (MyAnimeList) |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/blaxkmiradev/Anime-Search-engine.git
cd Anime-Search-engine

# Install dependencies
npm install

# Start the server
node server.js
```

Open your browser: `http://localhost:3000`

---

## 🚀 Hosting with Cloudflare Tunnel

```bash
# Install cloudflared
# https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/

# Start tunnel
cloudflared tunnel --url http://localhost:3000
```

---

## 📡 API

Uses **[Jikan API v4](https://docs.api.jikan.moe)** — free MyAnimeList unofficial API.

| Endpoint | Purpose |
|----------|---------|
| `GET /anime` | Search anime |
| `GET /anime/{id}/full` | Anime details |
| `GET /anime/{id}/characters` | Characters |
| `GET /top/anime` | Top anime list |
| `GET /genres/anime` | Genre list |

---

## 📁 Project Structure

```
anime-search-engine/
├── server.js              # Express server + translations
├── views/
│   ├── index.ejs         # Home / search page
│   ├── detail.ejs        # Anime detail page
│   ├── top.ejs           # Top anime page
│   └── layout.ejs        # Layout template
├── public/
│   └── css/
│       └── style.css     # Dark theme styles
├── package.json
└── README.md
```

---

## 🌐 Language Support

Click the **EN** or **KH** button in the navbar to switch language.  
ចុចប៊ូតុង **EN** ឬ **KH** ដើម្បីប្ដូរភាសា។

---

## 📄 License

MIT License — see [LICENSE](LICENSE)

---

## 👨‍ Author

**Rikixz**
- GitHub: [@blaxkmiradev](https://github.com/blaxkmiradev)
