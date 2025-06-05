import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
                I build robust data pipelines, automate workflows, and design scalable solutions that turn raw data into actionable insights—empowering teams to make smarter, faster decisions.
            </span>

            <div className="worksImgs">
                <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                    <div className="projectCard">
                        <img src={Portfolio1} alt="Data Pipeline Project" className="worksImg" />
                        <p className="projectTitle">ETL Pipeline with Airflow</p>
                    </div>
                </a>

                <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                    <div className="projectCard">
                        <img src={Portfolio2} alt="Real-Time Streaming" className="worksImg" />
                        <p className="projectTitle">Kafka Real-Time Stream</p>
                    </div>
                </a>

                <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                    <div className="projectCard">
                        <img src={Portfolio3} alt="Data Warehouse" className="worksImg" />
                        <p className="projectTitle">Data Warehouse with Snowflake</p>
                    </div>
                </a>

                <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                    <div className="projectCard">
                        <img src={Portfolio4} alt="Analytics Dashboard" className="worksImg" />
                        <p className="projectTitle">Analytics Dashboard (Tableau)</p>
                    </div>
                </a>

                {showMore && (
                    <>
                        <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                            <div className="projectCard">
                                <img src={Portfolio5} alt="Data Lake" className="worksImg" />
                                <p className="projectTitle">Data Lake Architecture</p>
                            </div>
                        </a>

                        <a href="https://github.com/HillaryOnyango/BuyHouse" target="_blank" rel="noopener noreferrer">
                            <div className="projectCard">
                                <img src={Portfolio6} alt="Cloud ETL" className="worksImg" />
                                <p className="projectTitle">Cloud ETL with GCP</p>
                            </div>
                        </a>
                    </>
                )}
            </div>

            <button className="workBtn" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'See More'}
            </button>
        </section>
    );
};

export default Works;
