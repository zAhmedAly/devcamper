import React from 'react';
import { Link } from 'react-router-dom';

const AccountManage = () => {
  return (
    <section className='py-5 mt-5'>
      <div className='row'>
        <div className='col-md-10 m-auto'>
          <div className='card bg-white'>
            <div className='card-body'>
              <h1 className='mb-4'>Manage Account</h1>
              <form>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        type='text'
                        name='title'
                        className='form-control'
                        placeholder='Name'
                        defaultValue='John Doe'
                      />
                    </div>
                  </div>

                  <div className='col-md-6 mb-4'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        defaultValue='jdoe@gmail.com'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <input
                        type='submit'
                        value='Save'
                        className='btn btn-success btn-block'
                      />
                    </div>
                    <div className='col-md-6'>
                      <Link
                        to='/update-password'
                        className='btn btn-secondary btn-block'
                      >
                        Update Password
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountManage;
