import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class BarTopTypeChart extends Component {

	render() {
		const {title,legendData,xAxisData,yAxisData,series}=this.props;
		let option={
	 title: {
        text: title
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: legendData,
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        position:"top",
        name: xAxisData,
        splitLine: {show: false},
    }],
    yAxis: [{
       type: 'category',
        data: yAxisData,
        boundaryGap: [0, 0.1]
    }],
    series: [
        {
            name: series.name,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#27727B',
                           '#FE8463',
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: series.data
        }
        ]
};
		 const react_for_echarts={
		     height:"500px",
         width:"100%",

         }
		return(
			<ReactEcharts option={option} style={{ react_for_echarts}} className={'react_for_echarts'}/>
			);
	}
}

export default BarTopTypeChart;
