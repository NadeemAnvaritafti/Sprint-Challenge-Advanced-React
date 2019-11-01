import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h5>{this.props.country}</h5>
                <p>Searches: {this.props.searches}</p>
            </div>
        )
    }
}

export default Card;