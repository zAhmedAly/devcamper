import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import loader from './loader.gif';

const Spinner = () => {
  return (
    <Fragment>
      {/* <img
        src={spinner}
<<<<<<< HEAD
        style={{ width: "400px", margin: "auto", display: "block" }}
        alt="Loading..."
      /> */}
      <div className="loader-container">
        <div className="loader">
          <img className="loader-img" src={spinner} alt="Loading ..." />
=======
        style={{
          width: '400px',
          margin: 'auto',
          display: 'block',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        alt='Loading...'
      /> */}
      <div className='loader-container'>
        <div className='loader'>
          <img className='loader-img' src={loader} />
>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
