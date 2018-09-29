import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class PieChart extends Component {
	render(){
    const {pieChartData}=this.props;
	  const option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:["短信","主机","换卡","主被叫","开关机","周期性位置更新","强制性位置更新","切换","换手机","其他"]
    // },
    series: [
        {
            name:'',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b} {c}',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:pieChartData.innerPieData
        },
        {
            name:'',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: ' {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:pieChartData.circlePieData
       	 }
    	]
	};
		return(
			<ReactEcharts option={option} style={{ width: '90%',height:"500px"}} className={'react_for_echarts'}/>
			)
	}

}

export default PieChart;
