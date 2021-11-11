import './Team.css';

import Card4 from './Card4';
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
                        <Card4 img={team1} name='Kayode Taiwo' title='CEO & Founder' email='kt.taylor007@gmail.com'>
                            Doing Data Analysis, Machine Learning, and Deep Learning with R, Python, Numpy, Scipy,
                            Sci kit-Learn, PyTorch, and Tensorflow on Jupiter Notebooks.
                        </Card4>
                    </div>
                    <div className="Home_Team_column">
                        <div className="Home_Team_card">
                            <Card4 img={team2} name='Coming Soon' title='Software Programmer' email='you@softhouse-llc.com'>
                                Design, develop and debug computer software applications. Proficient at Javascript, React, 
                                Angular for Frontend development.
                            </Card4>
                        </div>
                    </div>
                    <div className="Home_Team_column">
                        <div class="Home_Team_card">
                            <Card4 img={team3} name='Coming Soon' title='Graphics Designer' email='you@softhouse-llc.com'>
                                Design, develop and debug website user interfaces. Proficient at CSS, HTML, Photoshop for website
                                user interface design.
                            </Card4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Team;