import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/map";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/map/js/world";
import "echarts/map/js/china";
import * as Name from "./mapName";

export default class MapChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderWorldMap.bind(this);
    this.setForceOption.bind(this);
    this.getMaxValue.bind(this);
  }

  componentDidMount() {
    this.renderWorldMap();
  }

  componentDidUpdate() {
    this.renderWorldMap();
  }

  renderWorldMap() {
    const { title, type, data } = this.props;
    let myChart = echarts.init(this.refs.mapchart);
    let option = this.setForceOption(title, type, data.data);
    myChart.setOption(option, true);
  }

  getMaxValue(data) {
    let maxvalue = 0;
    for (let i = 0; i < data.length; i++) {
      maxvalue = maxvalue > data[i].value ? maxvalue : data[i].value;
    }
    return maxvalue + 10;
  }

  setForceOption(title, type, data) {
    return {
      /*title: {
        text: "{aaa|} " + title,
        align: "left",
        textStyle: {
          color: "#2F95DC",
          rich: {
            aaa: {
              backgroundColor: { image: type === "china" ? landmark : earth },
              height: "16"
            }
          }
        }
      },*/
      tooltip: {
        trigger: "item",
        // formatter: "{b}<br/>人数：{c}人"
        formatter: a => {
          if (type === "world") {
            return Name.mapName[a.name] + "<br/>人数：" + a.value;
          } else {
            return a.name + "<br/>人数：" + a.value;
          }
        }
      },
      backgroundColor: "#073262",
      /*grid: {
        top: "3%",
        left: "3%",
        right: '3%',
        bottom: "3%",
        containLabel: true
      },*/
      dataRange: {
        orient: "vertical",
        min: 0,
        max: this.getMaxValue(data),
        text: ["高", "低"],
        textStyle: {
          color: "#2F95DC"
        },
        splitNumber: 0,
        color: ["#FF4500", "#FFFF00", "#2F95DC"]
      },
      series: [
        {
          name: title,
          type: "map",
          mapType: type,
          selectedMode: "single",
          itemStyle: {
            emphasis: { label: { show: false } }
          },
          nameMap: {
            //"United States":"美国",
            //"China":"中国"
          },
          mapLocation: {
            x: "center",
            y: "center"
          },
          data: data
        }
      ]
    };
  }

  render() {
    return <div ref="mapchart" style={{ width: "100%", height: "100%" }} />;
  }
}
