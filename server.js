const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const JIKAN_BASE = 'https://api.jikan.moe/v4';

// Translations
const translations = {
  en: {
    title: 'AniSearch — Find Your Next Anime',
    search: 'Search',
    top: 'Top',
    heroTitle: '🎌 Anime Search',
    heroDesc: 'Find anime by title, genre, or year',
    searchPlaceholder: 'Search anime title...',
    allGenres: 'All Genres',
    yearPlaceholder: 'Year (e.g. 2023)',
    found: 'Found',
    results: 'results',
    noResults: 'No results found. Try a different search.',
    popularGenres: 'Popular genres',
    episodes: 'ep',
    airing: 'Airing',
    finished: 'Finished',
    showMore: 'Show more',
    showLess: 'Show less',
    synopsis: 'Synopsis',
    details: 'Details',
    trailer: 'Trailer',
    characters: 'Characters',
    viewMal: 'View on MyAnimeList',
    back: 'Back',
    studio: 'Studio',
    source: 'Source',
    duration: 'Duration',
    rating: 'Rating',
    season: 'Season',
    aired: 'Aired',
    scoredBy: 'Scored by',
    users: 'users',
    popularity: 'Popularity',
    topAnime: 'Top Anime',
    cantLoad: "Couldn't load top anime.",
    langSwitch: 'KH'
  },
  kh: {
    title: 'AniSearch — រកមើល Anime បន្ទាប់របស់អ្នក',
    search: 'ស្វែងរក',
    top: 'កំពូល',
    heroTitle: '🎌 ម៉ាស៊ីនស្វែងរក Anime',
    heroDesc: 'ស្វែងរក anime តាមចំណងជើង ប្រភេទ ឬឆ្នាំ',
    searchPlaceholder: 'ស្វែងរកចំណងជើង anime...',
    allGenres: 'គ្រប់ប្រភេទ',
    yearPlaceholder: 'ឆ្នាំ (ឧ. 2023)',
    found: 'រកឃើញ',
    results: 'លទ្ធផល',
    noResults: 'មិនមានលទ្ធផលទេ។ សូមស្វែងរកម្តងទៀត។',
    popularGenres: 'ប្រភេទពេញនិយម',
    episodes: 'ភាគ',
    airing: 'កំពុងចាក់',
    finished: 'បញ្ចប់',
    showMore: 'មើលបន្ថែម',
    showLess: 'បង្ហាញតិច',
    synopsis: 'រឿងរ៉ាវ',
    details: 'ព័ត៌មានលម្អិត',
    trailer: 'ត្រេលើរ',
    characters: 'តួអង្គ',
    viewMal: 'មើលលើ MyAnimeList',
    back: 'ថយក្រោយ',
    studio: 'ស្ទូឌីយោ',
    source: 'ប្រភព',
    duration: 'រយៈពេល',
    rating: 'ការវាយតម្លៃ',
    season: 'រដូវកាល',
    aired: 'ចាក់បញ្ចាំង',
    scoredBy: 'ពិន្ទុដោយ',
    users: 'អ្នកប្រើ',
    popularity: 'ពេញនិយម',
    topAnime: 'កំពូល Anime',
    cantLoad: 'មិនអាចផ្ទុកកំពូល anime បានទេ។',
    langSwitch: 'EN'
  }
};

// Language middleware
app.use((req, res, next) => {
  const lang = req.query.lang || 'kh'; // Default to Khmer
  req.lang = translations[lang] || translations.kh;
  req.langCode = lang;
  next();
});

// Home / Search
app.get('/', async (req, res) => {
  const { q, genre, year, page } = req.query;
  let results = [];
  let genres = [];
  let pagination = null;
  let error = null;

  try {
    // Fetch genres list
    const genreRes = await axios.get(`${JIKAN_BASE}/genres/anime`);
    genres = genreRes.data.data;
  } catch (e) {
    genres = [];
  }

  if (q || genre || year) {
    try {
      const params = {
        limit: 20,
        page: page || 1,
        sfw: true,
      };
      if (q) params.q = q;
      if (genre) params.genres = genre;
      if (year) params.start_date = `${year}-01-01`, params.end_date = `${year}-12-31`;

      const searchRes = await axios.get(`${JIKAN_BASE}/anime`, { params });
      results = searchRes.data.data;
      pagination = searchRes.data.pagination;
    } catch (e) {
      error = 'Failed to fetch results. Please try again.';
    }
  }

  res.render('index', { results, genres, pagination, query: req.query, error, t: req.lang, langCode: req.langCode });
});

// Anime detail
app.get('/anime/:id', async (req, res) => {
  try {
    const [animeRes, charsRes] = await Promise.allSettled([
      axios.get(`${JIKAN_BASE}/anime/${req.params.id}/full`),
      axios.get(`${JIKAN_BASE}/anime/${req.params.id}/characters`),
    ]);
    const anime = animeRes.status === 'fulfilled' ? animeRes.value.data.data : null;
    const characters = charsRes.status === 'fulfilled' ? charsRes.value.data.data.slice(0, 8) : [];
    if (!anime) return res.redirect('/');
    const lang = req.query.lang || 'kh';
    res.render('detail', { anime, characters, t: translations[lang] || translations.kh, langCode: lang });
  } catch (e) {
    res.redirect('/');
  }
});

// Top anime (default landing if no search)
app.get('/top', async (req, res) => {
  try {
    const topRes = await axios.get(`${JIKAN_BASE}/top/anime`, { params: { limit: 20 } });
    const lang = req.query.lang || 'kh';
    res.render('top', { results: topRes.data.data, t: translations[lang] || translations.kh, langCode: lang });
  } catch (e) {
    const lang = req.query.lang || 'kh';
    res.render('top', { results: [], t: translations[lang] || translations.kh, langCode: lang });
  }
});

app.listen(PORT, () => {
  console.log(`🎌 Anime Search running on http://localhost:${PORT}`);
});
