import React from 'react';
import { Link } from 'react-router-dom';

const ReviewAdd = () => {
  return (
    <section className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 m-auto'>
          <div className='card bg-white py-2 px-4'>
            <div className='card-body'>
              <Link
                to='/bootcamp-details'
                className='btn btn-link text-secondary my-3'
              >
                <i className='fas fa-chevron-left'></i> Bootcamp Info
              </Link>
              <h1 className='mb-2'>DevWorks Bootcamp</h1>
              <h3 className='text-primary mb-4'>Write a Review</h3>
              <p>
                You must have attended and graduated this bootcamp to review
              </p>
              <form action='reviews.html'>
                <div className='form-group'>
                  <label for='rating'>
                    Rating: <span className='text-primary'>8</span>
                  </label>
                  <input
                    type='range'
                    className='custom-range'
                    min='1'
                    max='10'
                    step='1'
                    value='8'
                    id='rating'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='title'
                    className='form-control'
                    placeholder='Review title'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    name='review'
                    rows='10'
                    className='form-control'
                    placeholder='Your review'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Submit Review'
                    className='btn btn-dark btn-block'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewAdd;
