import './article.css';
import React from 'react';

const Articles = () => {
    // Updated article data focusing on data engineering and analytics
    const articles = [
        {
            title: "The Growing Importance of Data Literacy in a Digital World",
            description: "An in-depth look at why data literacy is becoming essential across industries, and how data engineers play a key role in empowering informed decision-making.",
            link: "https://medium.com/@hillaryonyango19/the-growing-importance-of-data-literacy-in-a-digital-world-11b339b767da",
            date: "May 2025"
        },
        {
            title: "Working with PostgreSQL Through DBeaver – A Tutorial",
            description: "Learn how to interact with relational databases using PostgreSQL and DBeaver—a practical guide for data engineers and analysts.",
            link: "https://dev.to/amolo_hillary/working-with-postgresql-through-dbeaver-a-tutorial-54li",
            date: "April 2025"
        }
    ];

    return (
        <div id="articles">
            <h1 className="articlesPageTitle">My Articles</h1>
            <span className="articlesDesc">
                Dive into my latest publications where I explore data engineering tools,
                database management, and the evolving role of data in digital transformation.
            </span>
            <div className="articlesList">
                {articles.map((article, index) => (
                    <div key={index} className="articleCard">
                        <h3 className="articleTitle">{article.title}</h3>
                        <p className="articleDescription">{article.description}</p>
                        <div className="articleMeta">
                            <span className="articleDate">{article.date}</span>
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="articleLink"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
