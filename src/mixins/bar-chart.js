import 'echarts/lib/chart/bar'
const initBarChart = ({ title, name, xAxis, data, showData }) => {
  const option = {
    title: {
      text: title,
      textAlign: 'center',
      x: '50%'
    },
    grid: {
      left: '15%'
    },
    xAxis: {
      type: 'category',
      data: xAxis,
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      name: name,
      splitLine: {
        lineStyle: {
          color: '#ccc',
          type: 'dotted'
        }
      },
      axisLine: {
        lineStyle: {
          width: 0
        }
      },
      type: 'value'
    },
    series: [
      {
        data: data,
        type: 'bar',
        itemStyle: {
          color: '#768DE2'
        }
      }
    ]
  }
  return option
}
const dealBarData = (
  resource,
  xAxisName = 'name',
  value = 'value',
  showName = 'name',
  showValue = 'ratio'
) => {
  const xAxis = []
  const data = []
  const showData = {}
  resource.forEach(item => {
    xAxis.push(item[xAxisName])
    data.push(item[value])
    showData[item[showName]] = item[showValue]
  })
  return [xAxis, data, showData]
}

export { initBarChart, dealBarData }
