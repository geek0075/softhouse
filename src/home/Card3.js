import React from 'react';
import './Card3.css';

class Card3 extends React.Component {

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
            <div className="Home_Card3_card3">
                <h2 className="Home_Card3_title">{this.props.title}</h2>
                <p>
                    <img
                        alt=""
                        src={this.props.img}
                        width="100%" />
                </p>
                <p className="Home_Card3_body">{this.state.isToggleOn ? this.props.children : this.props.children.substring(0, 150) + '...'}</p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </button>
            </div>
        );
    }
}
  
export default Card3;