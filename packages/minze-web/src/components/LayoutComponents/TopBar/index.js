import React from 'react'
// import { Button } from 'antd'
// import { FormattedMessage } from 'react-intl'
// import HomeMenu from './HomeMenu'
// import ProjectManagement from './ProjectManagement'
// import IssuesHistory from './IssuesHistory'
import LiveSearch from './LiveSearch'
// import BitcoinPrice from './BitcoinPrice'
import ProfileMenu from './ProfileMenu'
// import LanguageSelector from './LanguageSelector'
import styles from './style.module.scss'
// import Breadcrumb from '../Breadcrumbs'

class TopBar extends React.Component {
  render() {
    return (
      <div className={[styles.topbar]}>
        {/* <div className="mr-4">
          <IssuesHistory />
        </div> */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* <Breadcrumb /> */}
          {/* <ProjectManagement /> */}
        </div>
        <div className="mr-auto">
          <LiveSearch />
        </div>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 d-none d-sm-inline"
        >
          <Button type="danger">
            <FormattedMessage id="topBar.buyNow" />
          </Button>
        </a> */}
        {/* <div className="mr-4">
          <BitcoinPrice />
        </div> */}
        {/* <div className="mr-4">
          <LanguageSelector />
        </div> */}
        {/* <div className="mr-8">
          <HomeMenu />
        </div> */}
        <ProfileMenu />
      </div>
    )
  }
}

export default TopBar
