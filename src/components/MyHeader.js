import React from 'react';
import PropTypes from  'prop-types';

class MyHeader extends React.Component{
    render(){



        return(
            <div>
                <h1 className="App-title">{this.props.text}</h1>
            </div>
        
        )
    }
}

export default MyHeader;

MyHeader.propTypes = {
    text: PropTypes.string.isRequired
}