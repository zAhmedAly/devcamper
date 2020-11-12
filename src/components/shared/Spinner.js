import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import loader from './loader.gif';

const Spinner = () => {
  return (
    <Fragment>
      {/* <img
        src={spinner}
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
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
