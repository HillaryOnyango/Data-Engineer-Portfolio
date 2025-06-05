import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I design and optimize data pipelines for seamless data flow and analytics. With strong skills in SQL, Python, and tools like Airflow, Spark, and Kafka, I automate workflows and support scalable solutions on AWS and GCP. I also use Power BI, Tableau, and Jupyter for impactful data visualization that informs decisions.
            </span><div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="ETLTools" className="skillBarImg" />
        <div className="skillBarText">
            <h2>ETL & Data Pipelines</h2>
            <p>Experienced in building scalable pipelines using Apache Airflow, Talend, and dbt for clean, reliable data flows.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt="DataWarehousing" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Data Warehousing</h2>
            <p>Skilled in designing and querying warehouses using BigQuery, Snowflake, and Amazon Redshift to power analytics.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={AppDesign} alt="AnalyticsTools" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Analytics & BI Tools</h2>
            <p>Proficient in Power BI, Tableau, and Looker to transform data into compelling visual dashboards and insights.</p>
        </div>
    </div>
</div>

        </section>
    );
}

export default Skills;