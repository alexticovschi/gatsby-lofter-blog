import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from "./Firebase"

import "./header.scss"

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext);
  console.log('firebase:',firebase, 'user:',user);

  const handleLogout = () => {
    firebase.logout().then(() => navigate('/login'));
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
        }}
      >
        <h1 style={{ margin: 0, flexGrow: 1 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div className="logout">
          {user && user.email && 
            <div>
              Hello, {user.email}
              <div className="logout__wrapper">
                <span className="logout__link" onClick={handleLogout}>
                  Logout
                </span>
              </div>
            </div>
          }
          {
          (!user || !user.email) && 
            <div className="login">
              <Link className="login__link" to="/login">Login</Link>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
