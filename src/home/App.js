import React from 'react';
import Container from 'react-bootstrap/Container';
import TopNav from './TopNav';
import WebApp from './WebApp';
import WebApp2 from './WebApp2';
import WebApp3 from './WebApp3';
import MobApp from './MobApp';
import Team from './Team';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        // Set the date we're counting down to
        this.countDownDate = new Date("July 31, 2022 15:37:25").getTime();
    }
    
    tick() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = this.countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState(state => ({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }));
        // If the count down is over, write some text 
        // if (distance < 0) {
        //     clearInterval(countdownfunction);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
        // }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <TopNav />
                <div className="Home_App_bg">
                    <div className="Home_App_middle">
                        <h1>SOFTWARE DEVELOPMENT, DATA SCIENCES, AND MACHINE LEARNING</h1>
                        <h3 className="Home_App_h3">coming soon in</h3>
                        <p style={{ fontSize:30 }}>
                            {this.state.days}d {this.state.hours}h {this.state.minutes}m {this.state.seconds}s
                        </p>
                    </div>
                </div>
                <WebApp3 />
                <MobApp />
                <Team />
                {/*<WebApp />
                <WebApp2 />*/}
                <Container style={{ padding : '20px' }}>
                    <p className="float-end"><a href="#">Back to top</a></p>
                    <p>&copy; 2017–2021 Softhouse, LLC. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </Container>
            </>
        );
    }
}

export default App;