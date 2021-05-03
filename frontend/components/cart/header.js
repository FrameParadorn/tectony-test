import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FaRegHeart, FaTimes} from 'react-icons/fa';
import {RiUserFill} from 'react-icons/ri';

import { connect } from 'react-redux'
import { toggleCart } from '../../redux/actions/cart.actions'

function Header({ dispatch, cartOpen }) {

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="icon x-icon" onClick={ () => {
            dispatch(toggleCart())
          }}>
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


const mapStateToProps = state => ({
  cartOpen: state.cart.cartOpen
})




export default connect(mapStateToProps)(Header);
