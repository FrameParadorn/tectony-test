import React from 'react';
import Link from 'next/link';

function mobile({menus}) {
  const menuList = [];

  for (const groups in menus) {
    menus[groups].map((menu) => menuList.push(menu));
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light d-block d-lg-none">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/logo.png" alt="logo" className="logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuList.map((menu) => (
              <li className="nav-item" key={menu.title}>
                <Link href={menu.href}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link href="/">
                <a>Cart <span className="badge bg-primary">0</span></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a>Wishlist</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a>User</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .logo {
            width: 100px;
          }

          .nav-item li {
            list-style-type: none;
          }

          .nav-item a {
            display: block;
            width: 100%;
            height: 30px;
            padding: 0 20px;
          }
        `}
      </style>
    </nav>
  );
}

export default mobile;
