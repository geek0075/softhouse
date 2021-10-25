import './WebApp3.css';

import frontend from './img/frontend-h200.jpg';
import backend from './img/backend-h200.jpg';
import database from './img/database-h200.jpg';

function WebApp3() {
    return (
        <>
            <div className="my-container3">
                <div style={{ textAlign : "center" }}>
                    <h1 className="title">Web Application Development</h1>
                </div>
                <div className="my-row3">
                    <div className="my-column3">
                        <div className="my-card3">
                            <h2>Frontend</h2>
                            <p>
                                <img
                                    alt=""
                                    src={frontend}
                                    width="100%" />
                            </p>
                            <p>We create interactive and responsive user interfaces (UI) that runs entirely on the 
                            frontend with pure Javascript and the React and Angular web application frameworks. 
                            React and Angular frameworks enable us to leverage Single Page Applications (SPAs) 
                            technology to develop web sites that run entirely on the client side and are therefore 
                            more user friendly and efficient  than traditional web applications built with page post 
                            back technology.</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>AngularJS</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-column3">
                        <div className="my-card3">
                            <h2>Backend</h2>
                            <p>
                                <img
                                    alt=""
                                    src={backend}
                                    width="100%" />
                            </p>
                            <p>Our backends are typically RESTful API’s that run in the server environment and 
                            persist data to a database management system in the cloud such as MongoDB Atlas. We 
                            build robust API backends for our web frontends (and mobile apps) using backend web 
                            application development frameworks based on Javascript, Python, C# and Java. Such 
                            frameworks include but are not limited to Node.js for Javascript, Flask for Python, 
                            Django for Python, ASP.NET for C#, and Spring Boot for Java.</p>
                            <ul>
                                <li>Node.js for Javascript</li>
                                <li>Flask for Python</li>
                                <li>Django for Python</li>
                                <li>ASP.NET for C#</li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-column3">
                        <div className="my-card3">
                            <h2>Database</h2>
                            <p>
                                <img
                                    alt=""
                                    src={database}
                                    width="100%" />
                            </p>
                            <p>Databases can be on premise or cloud hosted and include MongoDB, MySQL, Postgres. We can develop against
                            various types of databases including but not limited to No-SQL databases, relational databases, etc. We can 
                            help with database schema design, development and implementation. Typically the schema reflects the business 
                            problem being solved and hence requires domain knowledge or experts - although this is not necessarily the case.
                            </p>
                            <ul>
                                <li>Mongo DB</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Maria DB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default WebApp3;