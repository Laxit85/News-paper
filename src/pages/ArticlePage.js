import React from 'react';
import { useLocation } from 'react-router-dom';
import Article from '../components/Article';
import './ArticlePage.css';

function ArticlePage() {
    const location = useLocation();
    const article = location.state?.article;

    if (!article) {
        return (
            <div className="article-page">
                <h2>Discover the Pulse of Today's News</h2>
                <p>
                    The Newspaper Web Application is a modern, dynamic platform designed to deliver news articles and facilitate user interaction. It serves as a digital space where users can access timely information on current events, particularly focusing on political discourse and significant societal issues. The application is built using React, a popular JavaScript library, which allows for a responsive and interactive user experience.
                </p>
                <h3>Key Features</h3>
                <ol>
                    <li><strong>News Articles</strong>: The application provides users with access to a variety of news articles. Each article is presented in a clear and organized format, allowing users to easily read and understand the content. The articles cover important topics, such as political statements and their implications, ensuring that users stay informed about relevant issues.</li>
                    <li><strong>User Engagement</strong>: A dedicated contact page allows users to reach out with their thoughts, questions, or feedback. This feature encourages interaction and fosters a sense of community among readers. Users can fill out a simple form to submit their inquiries, making it easy for them to engage with the content and the platform.</li>
                    <li><strong>Responsive Design</strong>: The application is designed to be fully responsive, ensuring that it looks and functions well on various devices, including desktops, tablets, and smartphones. This accessibility is crucial for reaching a wider audience and providing a seamless user experience.</li>
                    <li><strong>Easy Navigation</strong>: The application features a straightforward navigation system, allowing users to move between the homepage, article pages, and the contact page effortlessly. This intuitive design enhances usability and encourages users to explore the content.</li>
                    <li><strong>Modern Aesthetics</strong>: The visual design of the application is inspired by established news websites, focusing on readability and a clean layout. The use of consistent styling across all components ensures a professional appearance that enhances the overall user experience.</li>
                </ol>
                <h3>Purpose</h3>
                <p>
                    The primary purpose of the Newspaper Web Application is to inform and engage users by providing them with access to relevant news articles and a platform for interaction. It aims to create an informed community where users can discuss and reflect on current events, particularly those that impact society at large.
                </p>
                <p>
                    By combining informative content with user-friendly features, the application seeks to empower users to stay updated on important issues and express their opinions. Whether users are looking for the latest news or want to share their thoughts, the Newspaper Web Application serves as a valuable resource in the digital landscape.
                </p>
            </div>
        );
    }

    return (
        <div className="article-page">
            <Article article={article} />
        </div>
    );
}

export default ArticlePage;
