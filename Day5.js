// ========= PropTypes =========

// npm install prop-types --save

// the old way:

// import React from 'react';
//
// function Detail ({caption, style}) {
//   return <p style={style}>{caption}</p>
// }
//
// Detail.propTypes = {
//   caption: React.PropTypes.string.isRequired,
//   style: React.PropTypes.objectOf(
//     React.PropTypes.string
//   ),
// }
//
// export default Detail;

// the new way:

// import React from 'react';
// import PropTypes from 'prop-types';
//
// function Detail ({caption, style}) {
//   return <p style={style}>{caption}</p>
// }
//
// Detail.propTypes = {
//   caption: PropTypes.string.isRequired,
//   style: PropTypes.objectOf(
//     PropTypes.string
//   ),
// }
//
// export default Detail;

// or so:

// import React from 'react';
// import {string, objectOf} from 'prop-types';
//
// function Detail ({caption, style}) {
//   return <p style={style}>{caption}</p>
// }
//
// Detail.propTypes = {
//   caption: string.isRequired,
//   style: objectOf(
//     string
//   ),
// }
//
// export default Detail;
