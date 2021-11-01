import './Team.css';

import team1 from './img/kay01.jpg';
import team2 from './img/him.jpeg';
import team3 from './img/her.jpeg';

function Team() {
    return (
        <>
            <div className="Home_Team_container">
                <div style={{ textAlign : "center" }}>
                    <h1 className="Home_Team_title">Meet Our Team</h1>
                </div>
                <div className="Home_Team_row">
                    <div className="Home_Team_column">
                        <div className="Home_Team_card">
                            <img src={team1} alt="Kay" style={{ width : "100%" }} />
                            <div className="Home_Team_inner_container">
                                <h2>Kayode Taiwo</h2>
                                <p className="Home_Team_subtitle">CEO & Founder</p>
                                <p>Doing Data Analysis, Machine Learning, and Deep Learning with R, Python, Numpy, Scipy, Sci kit-Learn, PyTorch, and Tensorflow on Jupiter Notebooks,</p>
                                <p>kt.taylor007@gmail.com</p>
                                <p><button className="Home_Team_button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="Home_Team_column">
                        <div className="Home_Team_card">
                            <img src={team2} alt="Mike" style={{ width : "100%" }} />
                            <div className="Home_Team_inner_container">
                                <h2>Coming Soon</h2>
                                <p className="Home_Team_subtitle">Software Programmer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>you@softhouse-llc.com</p>
                                <p><button className="Home_Team_button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="Home_Team_column">
                        <div class="Home_Team_card">
                            <img src={team3} alt="John" style={{ width : "100%" }} />
                            <div className="Home_Team_inner_container">
                                <h2>Coming Soon</h2>
                                <p className="Home_Team_subtitle">Designer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>you@softhouse-llc.com</p>
                                <p><button className="Home_Team_button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Team;