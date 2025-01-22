


// function Footer(){
//     return (
//         <>
//             <h1>Footer</h1>
//         </>
//     );
// }

// export default Footer;


import PropTypes from 'prop-types';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>{this.props.name2}</div>
    );
  }
}

// Use Footer.propTypes, not Footer.prototype
Footer.propTypes = {
  name2: PropTypes.string,
};

