import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = component =>
  Loadable({
    loader: component, // 指向detail/index.js详情页
    loading() {
      return <div>正在加载</div>
    }
  })

export default LoadableComponent
