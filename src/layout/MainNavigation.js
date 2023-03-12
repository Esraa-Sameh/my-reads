import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Reads</div>
      <ul>
        <li>
          <Link to="/">Book Shelves</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
