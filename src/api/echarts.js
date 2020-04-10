import http from '../http'

export const getLineData = () => http({
  url: '/echarts/line'
})

export const getStackData = () => http({
  url: '/echarts/stack'
})

export const getBarData = () => http({
  url: '/echarts/bar'
})

export const getMapData = () => http({
  url: '/echarts/map'
})
