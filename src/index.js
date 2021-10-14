import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
        const status = 'Next player: X';
  
        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        );
    }
}
  
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
        this.countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
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
            <div className="bgimg">
                <div className="topleft">
                    <p>Logo</p>
                </div>
                <div className="middle">
                    <h1>COMING SOON</h1>
                    <hr/>
                    <p style={{ fontSize:30 }}>
                        {this.state.days}d {this.state.hours}h {this.state.minutes}m {this.state.seconds}s
                    </p>
                </div>
                <div className="bottomleft">
                    <p>Some text</p>
                </div>
            </div>
        );
    }
}
  
// ========================================
  
ReactDOM.render(
    <App />,
    document.getElementById('root'));