import React from 'react';
import PropTypes from'prop-types';

class MyParagraph extends React.Component{
    render(){    

        function buildParagraph (string, index){
            return(
                <p key={index}>{string}</p>
            );
        }

        const { paragraph } = this.props;

        const paragraphList = paragraph.map(buildParagraph)

        

        return(
            <div id={this.props.id}>
                <h2>{this.props.title}</h2>
                {paragraphList}
            </div>
        )
    }
}
export default MyParagraph;

MyParagraph.propTypes = {
    paragraph: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}