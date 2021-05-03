import React from 'react';
import Link from 'next/link';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FaRegHeart} from 'react-icons/fa';
import {RiUserFill} from 'react-icons/ri';

import { connect } from 'react-redux'
import { toggleCart } from '../../redux/actions/cart.actions'



function Desktop({dispatch, menus}) {

  const showCart = () => {
    dispatch(toggleCart())  
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-block">
      <div className="container">
        <div className="col-4">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="col-6">
          <ul className="navbar-nav justify-content-end">
            {menus.main.map((menu) => (
              <li className="nav-item bold" key={menu.title}>
                <Link href={ menu.href }>
                  <a className="d-inline">{menu.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="navbar-nav justify-content-end">
            {menus.sub.map((menu, index) => {
              let separate = !!index ? <div className="nav-item separate">|</div> : null;

              return (
                <li className="nav-item item-sub" key={index}>
                   {separate}
                   <Link href={ menu.href }>
                    <a>{menu.title}</a>
                  </Link>
                </li>
              );

              return list;
            })}
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-center nav-icon">
          <div className="icon">
            <HiOutlineShoppingBag onClick={showCart}/>
          </div>
          <div className="icon">
            <FaRegHeart />
          </div>
          <div className="icon">
            <RiUserFill />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem 0;
          }

          .logo {
            width: 100px;
          }

          .nav-item {
            position: relative;
            margin: auto 10px;
          }

          .nav-item.bold a {
            margin: auto 20px;
            font-weight: bold;
          }

          .nav-item.item-sub {
            font-size: 0.8rem;
            font-weight: 100;
            color: gray;
          }

          .separate {
            position: absolute;
            top: -2px;
            left: -20px;
            display: inline;
            color: #c3c3c3;
            font-size: 0.9rem;
          }

          .nav-icon {
            font-size: 2.5rem;
          }

          .nav-icon .icon {
            margin: auto 5px;
          }
        `}
      </style>
    </nav>
  );
}

export default connect()(Desktop);
