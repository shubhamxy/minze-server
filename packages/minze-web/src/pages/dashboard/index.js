import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'

class Dashboard extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/u/dashboard">
        <Helmet title="Dashboard" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Dashboard</strong>
        </div>
      </Authorize>
    )
  }
}

export default Dashboard
