import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import moment from "moment";

function indexOf(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === item) {
      return i;
    }
  }
}

class LineChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderChart.bind(this);
    this.setForceOption.bind(this);
  }
  componentDidMount() {
    this.renderChart();
  }
  componentDidUpdate() {
    this.renderChart();
  }
  renderChart() {
    const { choice, title, data } = this.props;
    let myChart = echarts.init(this.refs.linechart);
    let option = this.setForceOption(
      choice,
      title,
      data.weekAddress,
      data.monthAddress,
      data.legend,
      data.change
    );
    myChart.setOption(option, true);
  }

  setForceOption(choice, title, weekAddress, monthAddress, legend, change) {
    let myAddress = [];
    let myLegend = [];
    let myChange = [];
    let mySeries = [];

    if (weekAddress.length !== 0) {
      if (choice.address.length === 0) {
        // 默认显示TOP10
        if (choice.time === "week") {
          myAddress = weekAddress.slice(0, 10);
          myLegend = legend.slice(-7);
          for (let i = 0; i < myAddress.length; i++) {
            let j = indexOf(change, myAddress[i]);
            let tmp = {
              name: myAddress[i],
              data: change[j].data.slice(-7)
            };
            myChange.push(tmp);
          }
        } else {
          myAddress = monthAddress.slice(0, 10);
          myLegend = legend;
          for (let i = 0; i < myAddress.length; i++) {
            let j = indexOf(change, myAddress[i]);
            let tmp = {
              name: myAddress[i],
              data: change[j].data
            };
            myChange.push(tmp);
          }
        }
      } else {
        // 显示选择的地区
        myAddress = choice.address;
        if (choice.time === "week") {
          myLegend = legend.slice(-7);
          for (let i = 0; i < myAddress.length; i++) {
            let j = indexOf(change, myAddress[i]);
            let tmp = {
              name: myAddress[i],
              data: change[j].data.slice(-7)
            };
            myChange.push(tmp);
          }
        } else {
          myLegend = legend;
          for (let i = 0; i < myAddress.length; i++) {
            let j = indexOf(change, myAddress[i]);
            let tmp = {
              name: myAddress[i],
              data: change[j].data
            };
            myChange.push(tmp);
          }
        }
      }
    } else {
      myAddress = weekAddress;
      myChange = change;
      myLegend = legend;
    }
    for (let i = 0; i < myLegend.length; i++) {
      myLegend[i] = moment(myLegend[i]).format("YYYY-MM-DD");
    }

    for (let i = 0; i < myChange.length; i++) {
      let tmp = {
        symbol: "none",
        name: myChange[i].name,
        type: "line",
        data: myChange[i].data,
        change: myChange[i].change
      };
      mySeries.push(tmp);
    }
    return {
      title: {
        text: title,
        align: "left",
        textStyle: {
          fontSize: 14,
          color: "#2F95DC",
          height: 16
        }
      },
      tooltip: {
        trigger: "axis",
        textStyle: {
          align: "left"
        },
        formatter: a => {
          let tip = a[0].axisValue + "<br/>";
          for (let i = 0; i < a.length; i++) {
            tip += a[i].marker + a[i].seriesName + ": " + a[i].value + "%<br/>";
          }
          return tip;
        }
      },
      legend: {
        orient: "vertical",
        x: "right",
        data: myAddress,
        icon:
          "pin" /*['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow']*/,
        textStyle: {
          color: "#FFFFFF"
        }
      },
      grid: {
        top: "10%",
        left: "3%",
        /*right: "11%",*/
        right: "70",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: myLegend,
        axisLabel: {
          color: "#FFF"
        }
        /*axisLine: {
          lineStyle: {
            type: "solid",
            color: "#08244a",
            width: "2"
          }
        }*/
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#FFF",
          formatter: "{value} %"
        },
        axisLine: {
          lineStyle: {
            type: "solid",
            color: "#08244a",
            width: "2"
          }
        }
        /*show: true*/
      },
      /*TODO 添加折线颜色*/
      /*color:"red",*/
      series: mySeries
    };
  }

  render() {
    return <div ref="linechart" style={{ width: "100%", height: "100%" }} />;
  }
}
export default LineChart;
