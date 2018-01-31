import React from 'react';
import PropTypes from 'prop-types';

class MyFooter extends React.Component{
    render(){
        return(
            <div>
                <footer>
                    <h2>Footer</h2>
                    <a href="#top">Back to Top</a>
                </footer>
            </div>
        )
    }
}
export default MyFooter;

MyFooter.propTypes = {
    href: PropTypes.string
}