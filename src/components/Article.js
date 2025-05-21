import React from 'react';
import './Article.css';

function Article({ article }) {
    if (!article) {
        return <p>No article data available.</p>;
    }

    const {
        title,
        urlToImage,
        author,
        publishedAt,
        content,
        description,
        source,
        url
    } = article;

    return (
        <div className="article-full">
            <h1>{title}</h1>
            <p className="about-website">
                This website provides the latest news articles from various trusted sources to keep you informed and up-to-date on current events.
            </p>
            {urlToImage && <img src={urlToImage} alt={title} className="article-full-image" />}
            <div className="article-meta">
                {author && <span>By {author}</span>}
                {publishedAt && <span> | {new Date(publishedAt).toLocaleString()}</span>}
                {source?.name && <span> | Source: {source.name}</span>}
            </div>
            <p className="article-description">{description}</p>
            <p className="article-content">{content || description || 'Content not available.'}</p>
            <p>
                Read original article <a href={url} target="_blank" rel="noopener noreferrer">here</a>.
            </p>
        </div>
    );
}

export default Article;
