import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FaRegHeart, FaTimes} from 'react-icons/fa';
import {RiUserFill} from 'react-icons/ri';

function Header({}) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="icon x-icon">
            <FaTimes />
          </div>
        </div>
        <div className="col-6 text-end">
          <span className="icon">
            <HiOutlineShoppingBag />
          </span>
          <span className="icon">
            <FaRegHeart />
          </span>
          <span className="icon">
            <RiUserFill />
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .icon {
            font-size: 2rem;
            margin-left: 5px;
          }
        `}
      </style>
    </>
  );
}

export default Header;
