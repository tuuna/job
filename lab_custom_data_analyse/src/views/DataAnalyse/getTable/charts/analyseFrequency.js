import React from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

class BarChart extends React.PureComponent {
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
        let myChart = echarts.init(this.refs.activityDetailBar);

        const { title, data } = this.props;
        if (typeof(data) !== "undefined" && data.length !== 0) {
            let x_serial = [],y_serial = [];

            data.forEach( (item) => {
                x_serial.push(item.NUM)
                y_serial.push(item.DESTIPCOUNTRY)
            })
            let option = this.setForceOption(title, x_serial, y_serial);
            myChart.setOption(option, true);
        }
    }

    setForceOption(title, x_serial, y_serial) {
        return {
            title: {
                text: title,
                textStyle: {
                    fontSize: 16,
                    color: "#5bbeff",
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
                // align: "right",
                right: 10,
                data: ["出现次数"],
                textStyle: {
                    color: "#FFFFFF"
                }
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "value",
                data: x_serial,
                axisLabel: {
                    color: "#FFF"
                },
                axisLine: {
                    lineStyle: {
                        type: "solid",
                        color: "#FFF"
                    }
                }
            },
            yAxis: {
                type: "category",
                data: y_serial,
                axisLabel: {
                    color: "#FFF"
                }
            },
            series: [
                {
                    name: "出现次数",
                    data: x_serial,
                    type: "bar"
                }
            ]
        };
    }

    render() {
        return (
            <div ref="activityDetailBar" style={{ width: "100%", height: "100%" }} />
        );
    }
}

export default BarChart;
