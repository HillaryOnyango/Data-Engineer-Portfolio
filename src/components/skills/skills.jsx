import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

// Tool logos
import PythonLogo from '../../assets/tools/python.png';
import SQLLogo from '../../assets/tools/sql.png';
import AirflowLogo from '../../assets/tools/airflow.png';
import SparkLogo from '../../assets/tools/spark.png';
import KafkaLogo from '../../assets/tools/kafka.png';
import AWSLogo from '../../assets/tools/aws.png';
import GCPLogo from '../../assets/tools/gcp.png';
import PowerBILogo from '../../assets/tools/powerbi.png';
import TableauLogo from '../../assets/tools/tableau.png';
import JupyterLogo from '../../assets/tools/jupyter.png';

const Skills = () => {
    const toolLogos = [
        { src: PythonLogo, alt: 'Python' },
        { src: SQLLogo, alt: 'SQL' },
        { src: AirflowLogo, alt: 'Apache Airflow' },
        { src: SparkLogo, alt: 'Apache Spark' },
        { src: KafkaLogo, alt: 'Apache Kafka' },
        { src: AWSLogo, alt: 'Amazon Web Services' },
        { src: GCPLogo, alt: 'Google Cloud Platform' },
        { src: PowerBILogo, alt: 'Power BI' },
        { src: TableauLogo, alt: 'Tableau' },
        { src: JupyterLogo, alt: 'Jupyter' }
    ];

    return (
        <section id='skills'>
            <span className="skillTitle">About Me </span>
            <span className="skillDesc">
                I design and optimize data pipelines for seamless data flow and analytics. With strong skills in SQL, Python, and tools like Airflow, Spark, and Kafka, I automate workflows and support scalable solutions on AWS and GCP. I also use Power BI, Tableau, and Jupyter for impactful data visualization that informs decisions.
            </span>

            <div className="skillBars">
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

            {/* Tools Section */}
            <div className="toolsSection">
                <h2 className="toolsTitle">Tools I Use</h2>
                <div className="toolsGrid">
                    {toolLogos.map((tool, index) => (
                        <div className="toolItem" key={index}>
                            <img src={tool.src} alt={tool.alt} className="toolLogo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
