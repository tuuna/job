import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class dataAnalysisBarChart extends Component {

    render() {
        const {homeData,belongData,xAxisData}=this.props;
        let option={
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ["主叫归属地","被叫归属地"],
                align: 'right',
                right: 10,
                textStyle:{
                    color: '#fff'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                "top":"3%",
                bottom: '3%',
                height:"auto",
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:'14px'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['red']
                    }
                },
                // x轴的颜色和宽度
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: xAxisData,
            }],
            yAxis: [
                {
                    type: 'value',
                    style: {
                        color:"#fff",
                    },
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
                }
            ],
            color: ["#49A9EE", "#F3857B"],
            series: [
                {
                    type: 'bar',
                    data: homeData
                },
                {
                    type: 'bar',
                    data: belongData
                }
            ]
        };
        return(
            <ReactEcharts option={option} style={{ width: '100%'}} className={'react_for_echarts'}/>
        );
    }
}

export default dataAnalysisBarChart;
