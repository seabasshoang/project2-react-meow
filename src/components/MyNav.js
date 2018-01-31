import React from 'react';

class MyNav extends React.Component{
    render(){



        return(
                <div className="nav">
                    <ul>
                        <li className="link1"><a href="#link1">Link 1</a></li>
                        <li className="link2"><a href="#link2">Link 2</a></li>
                        <li className="link3"><a href="#link3">Link 3</a></li>
                    </ul>
                </div>
        )
    }
}

export default MyNav;
