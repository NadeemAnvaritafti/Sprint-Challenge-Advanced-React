import React from 'react';
import Card from './Card';

class List extends React.Component {
    render() {
        return (
            <div className='list'>
                {this.props.data.map(item => {
                    return <Card name={item.name} country={item.country} searches={item.searches} id={item.id}/>
                })}
            </div>
        )
    }
}

export default List;