import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

function indexOf(arr, item) {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
}

export default class BarChart extends React.PureComponent {
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
    let myChart = echarts.init(this.refs.barchart);
    let option = this.setForceOption(
      choice,
      title,
      data.weekAddress,
      data.monthAddress,
      data.count
    );
    myChart.setOption(option, true);
  }

  setForceOption(choice, title, weekAddress, monthAddress, count) {
    let myAddress = [];
    let myCount = {
      in: [],
      out: []
    };

    if (weekAddress.length !== 0) {
      if (choice.address.length === 0) {
        // 默认显示TOP10
        if (choice.time === "week") {
          myAddress = weekAddress.slice(0, 10);
          myCount.in = count.week.in.slice(0, 10);
          myCount.out = count.week.out.slice(0, 10);
        } else {
          myAddress = monthAddress.slice(0, 10);
          myCount.in = count.month.in.slice(0, 10);
          myCount.out = count.month.out.slice(0, 10);
        }
      } else {
        // 显示选择的地区
        if (choice.time === "week") {
          for (let i = 0; i < choice.address.length; i++) {
            let j = indexOf(weekAddress, choice.address[i]);
            myAddress.push(weekAddress[j]);
            myCount.in.push(count.week.in[j]);
            myCount.out.push(count.week.out[j]);
          }
        } else {
          for (let i = 0; i < choice.address.length; i++) {
            let j = indexOf(monthAddress, choice.address[i]);
            myAddress.push(monthAddress[j]);
            myCount.in.push(count.month.in[j]);
            myCount.out.push(count.month.out[j]);
          }
        }
      }
    }
    else {
      myAddress = weekAddress;
      myCount.in = count.week.in;
      myCount.out = count.week.out;
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
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        data: ["漫入", "漫出"],
        align: "right",
        right: 10,
        textStyle: {
          color: "#FFFFFF"
        }
      },
      grid: {
        top: "10%",
        left: "3%",
        right: "6%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#FFFFFF"
          }
        }
      },
      yAxis: {
        type: "category",
        data: myAddress,
        axisLabel: {
          textStyle: {
            color: "#FFFFFF"
          }
        },
        axisLine: {
          lineStyle: {
            type: "solid",
            color: "#08244a",
            width: "2"
          }
        }
      },
      color: ["#49A9EE", "#F3857B"],
      series: [
        {
          name: "漫入",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },

          data: myCount.in
        },
        {
          name: "漫出",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: myCount.out
        }
      ]
    };
  }

  render() {
    return <div ref="barchart" style={{ width: "100%", height: "100%" }} />;
  }
}
