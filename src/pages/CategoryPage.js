import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchLiveNews } from '../services/newsApi';
import './CategoryPage.css';

const shoppingAds = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1510557880182-3eec0a7e7b5b?auto=format&fit=crop&w=150&q=80',
        title: 'Big Sale on Electronics!',
        link: 'https://example.com/electronics-sale'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=150&q=80',
        title: 'Fashion Discounts Up to 50%',
        link: 'https://example.com/fashion-discounts'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=150&q=80',
        title: 'Home Appliances Clearance',
        link: 'https://example.com/home-appliances'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=150&q=80',
        title: 'Sports Gear Mega Sale',
        link: 'https://example.com/sports-gear-sale'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1512499617640-c2f99912a2a6?auto=format&fit=crop&w=150&q=80',
        title: 'Books and Stationery Offers',
        link: 'https://example.com/books-stationery'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80',
        title: 'Kitchen Essentials Discount',
        link: 'https://example.com/kitchen-essentials'
    }
];

function CategoryPage() {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadNews() {
            if (category === 'shopping') {
                // No news fetch for shopping category, show ads instead
                setLoading(false);
                setArticles([]);
                return;
            }
            try {
                const newsArticles = await fetchLiveNews('', category || '');
                setArticles(newsArticles);
            } catch (err) {
                setError('Failed to fetch news.');
            } finally {
                setLoading(false);
            }
        }
        loadNews();
    }, [category]);

    if (loading) {
        return <div className="category-page"><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="category-page"><p>{error}</p></div>;
    }

    const categoryHeadings = {
        politics: "Breaking Political Insights",
        sports: "Thrilling Sports Highlights",
        business: "Latest Business Buzz",
        shopping: "Exclusive Shopping Deals",
        health: "Health & Wellness Updates"
    };

    const displayCategory = category ? (categoryHeadings[category.toLowerCase()] || (category.charAt(0).toUpperCase() + category.slice(1))) : 'News';

    if (category === 'shopping') {
        return (
            <div className="category-page shopping">
                <h1>Shopping Advertisements</h1>
                <ul>
                    {shoppingAds.map(ad => (
                        <li key={ad.id} className="article-item">
                            <a href={ad.link} target="_blank" rel="noopener noreferrer">
                                <img src={ad.imageUrl} alt={ad.title} className="article-image" />
                                <div className="article-content">
                                    <h3>{ad.title}</h3>
                                </div>
                            </a>
                        </li>   
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="category-page">
            <h1>{displayCategory} News</h1>
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

export default CategoryPage;
