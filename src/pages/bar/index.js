import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { getBarData } from '@/api/echarts'
import { initBarChart, dealBarData } from '@/mixins/bar-chart'
class Bar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option: {}
    }
  }
  render() {
    const { option } = this.state
    return <ReactEcharts option={option} lazyUpdate={true} style={{ height: 500 }} />
  }
  componentDidMount() {
    this._getBarData()
  }
  async _getBarData() {
    const [err, res] = await getBarData()
    if (err) return
    const [xAxis, data, showData] = dealBarData(res, 'name', 'price')
    const option = initBarChart({ xAxis, data, showData })
    this.setState(() => ({
      option
    }))
  }
}
export default Bar
