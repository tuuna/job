import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import pieLog from "../../../../common/assets/uestc/pieChart.png";

export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderEchart.bind(this);
    this.setForceOption.bind(this);
  }

  componentDidMount() {
    this.renderEchart();
  }

  componentDidUpdate() {
    this.renderEchart();
  }

  renderEchart() {
    const { data } = this.props;
    let myChart = echarts.init(this.refs.warningPie);
    let option = this.setForceOption(data);
    myChart.setOption(option, true);
  }

  setForceOption(data) {
    let legendData = [];
    for (let i = 0; i < data.length; i++) {
      legendData.push(data[i].name);
    }
    return {
      /*title: {
        top: "4%",
        text: "预警类型"
      },*/
      title: {
        text: "{aaa|}预警类型",
        align: "left",
        textStyle: {
          fontSize: 14,
          color: "#2F95DC",
          height: 16,
          rich: {
            aaa: {
              backgroundColor: { image: pieLog },
              height: 14
            }
          }
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>总数:{c} 占比:{d}%"
      },
      legend: {
        bottom: 20,
        left: "center",
        data: legendData,
        textStyle: {
          color: "#FFFFFF"
        }
      },
      /*calculable: true,*/
      // TODO 添加颜色
      /*color:["red","green"],*/
      series: [
        {
          name: "预警类型",
          type: "pie",
          radius: "55%",
          center: ["50%", "45%"],
          label: {
            normal: {
              formatter: "{d}%"
            }
          },
          data: data
        }
      ]
    };
  }

  render() {
    return <div ref="warningPie" style={{ width: "100%", height: "100%" }} />;
  }
}
