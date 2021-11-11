import React from 'react';
import './Card4.css';

class Card4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    
    render() {
        return (
            <div className="Home_Card4_card4">
                <img src={this.props.img} alt="" style={{ width : "100%" }} />
                <div className="Home_Card4_container">
                    <h2>{this.props.name}</h2>
                    <p className="Home_Card4_title">{this.props.title}</p>
                    <p>{this.state.isToggleOn ? this.props.children : this.props.children.substring(0, 50) + '...'}</p>
                    <p>
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'LESS' : 'MORE'}
                        </button>
                    </p>
                    <p>{this.props.email}</p>
                    <p><button className="Home_Card4_button">Contact</button></p>
                </div>
            </div>
        );
    }
}
  
export default Card4;