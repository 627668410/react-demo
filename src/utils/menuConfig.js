import LoadableComponent from './loadable'
const Home = () => import(/* webpackChunkname: 'Home' */ '@/pages/home')
const Bar = () => import(/* webpackChunkname: 'Bar' */ '@/pages/bar')
const Line = () => import(/* webpackChunkname: 'Line' */ '@/pages/line')
const menuList = [
  {
    name: '首页',
    value: 'home',
    path: '/home',
    component: LoadableComponent(Home)
  },
  {
    name: '图表',
    value: 'echart',
    path: '/echart',
    children: [
      {
        name: '柱状图',
        value: 'bar',
        path: '/echart/bar',
        component: LoadableComponent(Bar)
      },
      {
        name: '折线图',
        value: 'line',
        path: '/echart/line',
        component: LoadableComponent(Line)
      }
    ]
  }
]
export default menuList
