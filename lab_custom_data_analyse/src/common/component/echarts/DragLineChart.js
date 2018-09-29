import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class DragLineChart extends Component {

	render() {
		const {DragLineChartData}=this.props;
        const series=(DragLineChartData===undefined?[]:DragLineChartData.series);
        let renderSeries=[];
        if (series!==undefined) {
            renderSeries=series.map(
                function(item){
                    return {
                      ...item,
                      "type":"line",
                      symbol: 'circle',
                      symbolSize: [8, 8],
                      markPoint: {
                         data: [{
                           type: 'max',
                           name: '最大值'
                        }, {
                           type: 'min',
                           name: '最小值'
                        }]
                    }
                  };
              }
                );
        };
let option = {
    title: {
        text: (DragLineChartData===undefined?"":DragLineChartData.title)
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
      show: true,
        icon: 'circle',
        top:"10%",
        right: "20%",
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        data:(DragLineChartData===undefined?[]:DragLineChartData.legend)
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        data: (DragLineChartData===undefined?[]:DragLineChartData.xAxisData)
    },
    yAxis: {
        type: 'value',
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        }
    },
    dataZoom: [{
    show: true,
    height: 30,
    xAxisIndex: [
        0
    ],
    bottom: "13%",
    start: 50,
    end: 100,
    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    handleSize: '80%',
    handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
    },
       textStyle:{
        color:"#fff"},
       borderColor:"#eee"


}, {
    type: "inside",
    show: true,
    height: 15,
    start: 1,
    end: 35
}],
    series: renderSeries

    };
		return(
			<ReactEcharts option={option} style={{ width: '90%'}} className={'react_for_echarts'}/>
			);
	}
}

export default DragLineChart;
