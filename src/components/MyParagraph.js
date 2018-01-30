import React from 'react';

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