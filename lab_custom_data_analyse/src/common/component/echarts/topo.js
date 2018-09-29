import React, { Component } from 'react';

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/graph') //图表类型
require('echarts/lib/component/title') //标题插件
require('echarts/lib/component/legend') //标题插件
class ForceReact extends React.PureComponent {

  constructor(props) {
    super(props)
    this.setForceOption = this.setForceOption.bind(this)
    this.initForce = this.initForce.bind(this)
  }

  initForce() {
    const { data, links } = this.props //外部传入的data数据
    let myChart = echarts.init(this.refs.forceReact) //初始化echarts
    //我们要定义一个setForceOption函数将data传入option里面
    let options = this.setForceOption(data, links)
    //设置options
    myChart.setOption(options)
  }

  componentDidMount() {
    this.initForce()
  }

  componentDidUpdate() {
    this.initForce()
  }

  render() {
    return(
      <div className="force-react">
                <div ref="forceReact" style={{width: "100%", height: "200px"}}></div>
            </div>
    )
  }

  //一个基本的echarts图表配置函数
  setForceOption(data, links) {
    return {
      title: {
        text: '用户通联拓扑',
      },
      tooltip: {},
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut',
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 18
          },
        }
      },
      legend: {
        x: "center",
        data: [">90%", "90%-60%", "60%-30%", '<30%', ]
      },
      series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 60,
        focusNodeAdjacency: true,
        roam: true,
        categories: [{
            name: '>90%'
          }, {
            name: '90%-60%'
          }, {
            name: '60%-30%'
          },
          {
            name: '<30%'
          }, {
            name: 'target'
          }
        ],
        color: ['#CD3700', '#CD6090', '#CDB5CD', '#CDC673', ],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 18,
              // color:"#fff"
            },
          }
        },
        force: {
          repulsion: 1500,
          edgeLength: 120
        },
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 18
            },
            formatter: "{c}"
          }
        },
        lineStyle: {
          normal: {
            opacity: 0.7,
            width: 1,
            curveness: 0.1
          }
        },
        data: data,
        links: links
      }]
    };
  }
}

export default ForceReact
