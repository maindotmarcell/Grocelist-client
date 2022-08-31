import { AiOutlineMenu } from 'react-icons/ai';
import classes from './Navbar.module.css';
import { MdPermIdentity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../Constants/Navdata';

const Navbar = (props) => {
  console.log(props);
  const showSidebar = () => {
    props?.data.setsideToggle(!props.data.sideToggle);
  };
  return (
    <div>
      <div className={classes.navMenu}>
        <AiOutlineMenu className={classes.menu_bars} onClick={showSidebar} />
        <h1>Grocelist</h1>
        <div className={classes.nav_end}>
          <MdPermIdentity className={classes.ProfileIcon} />
          <h3>Profile</h3>
        </div>
      </div>
      <nav
        className={
          props?.data.sideToggle ? classes.nav_menu_active : classes.nav_menu
        }
      >
        <ul className={classes.nav_menu_items}>
          <ul style={{ display: 'flex' }}>
            <li style={{ marginRight: '4px', listStyleType: 'none' }}>
              Signup
            </li>
            <li style={{ marginRight: '4px', listStyleType: 'none' }}>
              Profile
            </li>
          </ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={classes.nav_text}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
