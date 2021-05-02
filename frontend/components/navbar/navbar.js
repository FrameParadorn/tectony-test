import Desktop from './desktop.js';
import Mobile from './mobile.js';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FaRegHeart} from 'react-icons/fa';
import {RiUserFill} from 'react-icons/ri';

function navbar({}) {
  const menus = {
    main: [
      {
        title: 'THE SHOP',
        href: '/',
      },
      {
        title: 'Fresh-Air Info',
        href: '/',
      },
    ],
    sub: [
      {
        title: 'Pre-Order',
        href: '/',
      },
      {
        title: 'Help Center',
        href: '/',
      },
    ],
  };

  return (
    <>
      <Desktop menus={menus} />
      <Mobile menus={menus} />
    </>
  );
}

export default navbar;
