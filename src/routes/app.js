/* global window */
/* global document */
import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {withRouter} from 'dva/router'
import './app.less'


let lastHref

const App = ({
               children, dispatch, app, loading, location,
             }) => {
  const {} = app
  const {href} = window.location

  if (lastHref !== href) {
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({app, loading}) => ({app, loading}))(App))
