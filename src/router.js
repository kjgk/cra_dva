import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, routerRedux, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/app'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/es/locale-provider/zh_CN'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/',
      models: () => [import('./models/home')],
      component: () => import('./routes/home/'),
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>
        <App>
          <Switch>
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route key={key}
                       exact
                       path={path}
                       component={dynamic({
                         app,
                         ...dynamics,
                       })}
                />
              ))
            }
            <Route component={error}/>
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
