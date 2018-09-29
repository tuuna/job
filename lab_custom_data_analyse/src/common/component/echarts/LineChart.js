import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component {

	render() {
		const {lineChartData}=this.props;
        const series=(lineChartData===undefined?[]:lineChartData.series);
        let renderSeries=[];
        if (series!==undefined) {
            renderSeries=series.map(
                function(item){
                    return {...item,"type":"line",
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
        text: (lineChartData===undefined?"":lineChartData.title)
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:(lineChartData===undefined?[]:lineChartData.legend)
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: (lineChartData===undefined?[]:lineChartData.xAxisData)
    },
    yAxis: {
        type: 'value'
    },
    series: renderSeries

    };
		return(
			<ReactEcharts option={option} style={{ width: '90%'}} className={'react_for_echarts'}/>
			);
	}
}

export default LineChart;
