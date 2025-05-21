import React, { useEffect, useState } from 'react';
import { fetchLiveNews } from '../services/newsApi';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadNews() {
            try {
                const newsArticles = await fetchLiveNews();
                setArticles(newsArticles);
            } catch (err) {
                setError('Failed to fetch news.');
            } finally {
                setLoading(false);
            }
        }
        loadNews();
    }, []);

    if (loading) {
        return <div className="home"><p>Loading news...</p></div>;
    }

    if (error) {
        return <div className="home"><p>{error}</p></div>;
    }

    return (
        <div className="home">
            <h1>Breaking Stories Just For You</h1>
            {articles.length === 0 ? (
                <p>No news articles available.</p>
            ) : (
                <ul>
                    {articles.map((article, index) => (
                        <li key={index} className="article-item">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="article-image" />
                            )}
                            <div className="article-content">
                                <Link
                                    to="/article"
                                    state={{ article }}
                                    className="article-link"
                                >
                                    {article.title}
                                </Link>
                                <p>{article.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
