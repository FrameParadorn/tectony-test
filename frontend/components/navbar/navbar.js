import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa'
import { RiUserFill } from 'react-icons/ri'

function navbar({}) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="col-4">
            <img src="/logo.png" alt="logo" className="logo" />
          </div>
          <div className="col-6">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item bold">
                <Link href="/">
                  <a className="d-inline">THE SHOP</a>
                </Link>
              </li>
              <li className="nav-item bold">
                <Link href="/">
                  <a className="d-inline">Fresh-Air Info </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item item-sub">
                <Link href="/">
                  <a>Pre-Order</a>
                </Link>
              </li>
              <div className="nav-item separate">|</div>
              <li className="nav-item item-sub">
                <Link href="/">
                  <a>Help Center</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 d-flex justify-content-center nav-icon">
            <div className="icon">
            <HiOutlineShoppingBag />
            </div>
            <div className="icon">
            <FaRegHeart />
            </div>
            <div className="icon">
            <RiUserFill />
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .container {
            padding: 2rem 0;
          }

          .logo {
            width: 100px;
          }

          .nav-item.bold a {
            margin: auto 20px;
            font-weight: bold;
          }

          .nav-item.item-sub{
            font-size: 0.8rem; 
            font-weight: 100;
            color: gray;
          }

          .separate {
            color: #c3c3c3;
            font-size: 0.9rem; 
            position: relative;
            top: -2px;
            margin: auto 10px;
          }

          .nav-icon {
            font-size: 2.5rem;
          }

          .nav-icon .icon {
            margin: auto 5px;
          }

        `}
      </style>
    </div>
  );
}

export default navbar;
