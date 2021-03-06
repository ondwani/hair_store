import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-10 col-md-offset-1'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className='text-center'>Price</th>
                  <th className='text-center'>Total</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='col-sm-8 col-md-6'>
                    <div className='media'>
                      <Link className='thumbnail pull-left' to='#'>
                        {' '}
                        <img
                          className='media-object'
                          src='https://cdn.mscocohair.com/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/s/t/straight_bob_wig_1.jpg'
                          alt='hair type'
                          style={{ width: '72px', height: '72px' }}
                        />{' '}
                      </Link>
                      <div className='media-body'>
                        <h4 className='media-heading'>
                          <Link to='#'>STRAIGHT</Link>
                        </h4>
                        <h5 className='media-heading'>
                          <Link to='#'>Black 10inch 10A 13*4 Density:180</Link>
                        </h5>
                        <span>Status: </span>
                        <span className='text-success'>
                          <strong>In Stock</strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className='col-sm-1 col-md-1' style={{ textAlign: 'center' }}>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      value='2'
                    />
                  </td>
                  <td className='col-sm-1 col-md-1 text-center'>
                    <strong>$120.87</strong>
                  </td>
                  <td className='col-sm-1 col-md-1 text-center'>
                    <strong>$241.74</strong>
                  </td>
                  <td className='col-sm-1 col-md-1'>
                    <button type='button' className='btn btn-danger'>
                      <span className='glyphicon glyphicon-remove'></span> Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='col-md-6'>
                    <div className='media'>
                      <Link className='thumbnail pull-left' to='#'>
                        {' '}
                        <img
                          className='media-object'
                          src='https://cdn.shopify.com/s/files/1/1595/0131/products/brazilian-body-wave-hair-buyer-show.jpg?v=1505463381'
                          alt='hair type'
                          style={{ width: '72px', height: '72px' }}
                        />{' '}
                      </Link>
                      
                      <div className='media-body'>
                        <h4 className='media-heading'>
                          <Link to='#'>Body wave</Link>
                        </h4>
                        <h5 className='media-heading'>
                          <Link to='#'>Black 10inch 10A 13*4 Density:180</Link>
                        </h5>
                        <span>Status: </span>
                        <span className='text-success'>
                          <strong>In Stock</strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className='col-md-1' style={{ textAlign: 'center' }}>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      value='2'
                    />
                  </td>
                  <td className='col-md-1 text-center'>
                    <strong>$98.99</strong>
                  </td>
                  <td className='col-md-1 text-center'>
                    <strong>$197.98</strong>
                  </td>
                  <td className='col-md-1'>
                    <button type='button' className='btn btn-danger'>
                      <span className='glyphicon glyphicon-remove'></span> Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td className='text-right'>
                    <h5>
                      <strong>$219.86</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Estimated shipping</h5>
                  </td>
                  <td className='text-right'>
                    <h5>
                      <strong>$6.94</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h3>Total</h3>
                  </td>
                  <td className='text-right'>
                    <h3>
                      <strong>$226.8</strong>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <button type='button' className='btn btn-default'>
                      <span className='glyphicon glyphicon-shopping-cart'></span>{' '}
                      Continue Shopping
                    </button>
                  </td>
                  <td>
                    <button type='button' className='btn btn-success'>
                      Checkout <span className='glyphicon glyphicon-play'></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
