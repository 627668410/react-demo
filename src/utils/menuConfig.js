import LoadableComponent from './loadable'
const Home = () => import(/* webpackChunkname: 'Home' */ '@/pages/home')
const Table = () => import(/* webpackChunkname: 'Table' */ '@/pages/table')
const Bar = () => import(/* webpackChunkname: 'Bar' */ '@/pages/bar')
const Line = () => import(/* webpackChunkname: 'Line' */ '@/pages/line')
const Button = () => import(/* webpackChunkname: 'Button' */ '@/pages/btn')
const Alert = () => import(/* webpackChunkname: 'Alert' */ '@/pages/alert')
const menuList = [
  {
    name: '首页',
    value: 'home',
    path: '/home',
    component: LoadableComponent(Home)
  },
  {
    name: '表格',
    value: 'table',
    path: '/table',
    component: LoadableComponent(Table)
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
  },
  {
    name: '组件',
    value: 'component',
    path: '/component',
    children: [
      {
        name: '按钮',
        value: 'button',
        path: '/component/button',
        component: LoadableComponent(Button)
      },
      {
        name: '警告提示',
        value: 'alert',
        path: '/component/alert',
        component: LoadableComponent(Alert)
      }
    ]
  }
]
export default menuList
