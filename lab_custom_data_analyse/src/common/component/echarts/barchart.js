import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component {

	render() {
		const {title,legendData,xAxisData,yAxisData,series}=this.props;
		let option={
	 title: {
        text: title,
				textStyle: {
            color: '#fff',
						fontWeight:500,
						fontSize:14
        }
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
    yAxis: [{
        type: 'value',
        name: yAxisData,
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
	        axisLabel:{
	            formatter:'{value}'
	        }
    }],
    series: series
};
		return(
			<ReactEcharts option={option} style={{ width: '100%'}} className={'react_for_echarts'}/>
			);
	}
}

export default BarChart;
