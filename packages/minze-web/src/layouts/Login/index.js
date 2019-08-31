import React from 'react'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import styles from './style.module.scss'

@withRouter
class LoginLayout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <Layout>
        <Layout.Content>
          <div
            className={`${styles.layout} ${styles.light}`}
            style={{
              backgroundImage: `url('/resources/images/header.svg')`,
              backgroundSize: 'cover',
            }}
          >
            <div className={styles.header}>
              <div className={styles.logo}>
                <Link to="/">
                  <img src="/resources/images/logo-inverse.png" alt="Minze" />
                </Link>
              </div>
              <nav className={styles.navigation}>
                <ul className={styles.navigationItems}>
                  <li>
                    <Link to="/user/login">Login</Link>
                  </li>
                  <li>
                    <a href="javascript: void(0);">About</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
          <div>
            <div className={`${styles.footer} text-center`}>
              <ul className="list-unstyled list-inline mb-3">
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Terms of Use</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    )
  }
}

export default LoginLayout
