import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom';
const HeaderMenu = () => {
    return (
        <Fragment>
            <nav>
        <ul>
          <li>
            <Link to="">Premium</Link>
          </li>
          <li>
            <Link to="">Support</Link>
          </li>
          <li>
            <Link to="">Download</Link>
                    </li>
                    <li className="bar"><Link to="#"></Link></li>

          <li>
            <Link to="/signup">Sigup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </nav>
      </Fragment>
    );
}

export default HeaderMenu
