import React from 'react';

const Stars = (props) => {
    const { number } = props;
        let stars = [];
    for (let i = 1; i <= number; i++) {
        stars.push(<i className="fa fa-star" key={i}></i>);
    }
    if (String(number).split('.').length !== 1)
        stars.push(<i className="fa fa-star-half-o" key={number}></i>);
    return (
        <React.Fragment>
            {stars}
        </React.Fragment>
    );
}
 
export default Stars;