import React from 'react';

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