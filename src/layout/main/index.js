import React, { Component } from 'react'
import menuConfig from '@/utils/menuConfig'
import './index.scss'
import { Route } from 'react-router'
class Main extends Component {
  render() {
    return <div className="main">{this.renderRoute(menuConfig)}</div>
  }
  renderRoute = data =>
    data.map(menu => {
      if (menu.children) return this.renderRoute(menu.children)
      return <Route exact key={menu.value} path={menu.path} component={menu.component}></Route>
    })
}
export default Main
