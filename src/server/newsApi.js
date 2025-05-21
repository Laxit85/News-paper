const API_KEY = '7c8f30f9207e4aecab8b3b7a3c770c1d';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export async function fetchLiveNews(country = 'us', category = '') {
    try {
        const url = new URL(BASE_URL);
        url.searchParams.append('apiKey', API_KEY);
        if (country) {
            url.searchParams.append('country', country);
        }
        if (category) {
            url.searchParams.append('category', category);
        }
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`Error fetching news: ${response.statusText}`);
        }
        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('fetchLiveNews error:', error);
        throw error;
    }
}
