import styles from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.style.transform = mobileNavToggle
      ? 'translateX(100%)'
      : 'translateX(0%)';

    setMobileNavToggle(!mobileNavToggle);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles['announcement']}>
          Super Deal! Free shipping on orders over $50
        </span>
      </div>
      <div className={styles.bottom}>
        <div className={styles['bottom-left']}>
          <select className="language-selector">
            <option value="EN" className="lang-select-val">
              EN
            </option>
            <option value="ESP" className="lang-select-val">
              ESP
            </option>
            <option value="FR" className="lang-select-val">
              FR
            </option>
          </select>
          <div className={styles['navbar-search-container']}>
            <label htmlFor={styles['navbar-search']}>
              <SearchIcon />
            </label>
            <input
              type="search"
              id={styles['navbar-search']}
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles['bottom-center']}>
          <Link to="/">
            <h2 className={styles['logo']}>SHOP</h2>
          </Link>
        </div>
        <div className={styles['bottom-right']} ref={navRef}>
          <Link to="/register" className={styles['nav-link']}>
            REGISTER
          </Link>
          <Link to="/login" className={styles['nav-link']}>
            SIGN IN
          </Link>
          <Link to="/cart" className={styles['cart']}>
            <ShoppingCartIcon />
            <span className={styles['badge']}>4</span>
          </Link>
        </div>
        <button
          className={styles['mobile-nav-toggle-btn']}
          onClick={handleClick}
        >
          {mobileNavToggle ? (
            <ClearIcon className={styles['clear-icon']} fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>
    </div>
  );
}
