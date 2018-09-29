import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from "../redux/action"

import BarTopTypeChart from "../../../common/component/echarts/BarTopTypeChart"
import TableDescribe from "../../../common/component/table/basictable"
import {Card,Spin} from 'antd'
import "./style.css";

class SMSAnalyzeView extends Component {

 componentWillMount(){
 	this.props.searchSMSLanguage();
 	this.props.searchAppSMSReceiveFrequency();
 	this.props.searchAppContainsTarget();
 }

 handleStandardTableChange = (pagination, filtersArg, sorter) => {
    	let mes={current:pagination.current};
    	this.props.searchAppContainsTarget(mes);

	 }

 handleSMSFrequencyTableChange = (pagination, filtersArg, sorter) => {
    	let mes={current:pagination.current};
    	this.props.searchAppSMSReceiveFrequency(mes);

	 }

	render(){
		const {smsLanguageListData,appReceiveSMSFrequencyListData,appContaionsTargetListData}=this.props;
		const appTargetClumns=[
			{"title":"目标号码","dataIndex":"targetNum"},
			{title:"APP名称","dataIndex":"appName"},
			{title:"最近记录时间","dataIndex":"recentUseTime"},
			{title:"频次","dataIndex":"times",render:(text)=>(text+"次/月")},
		];
		const appReceiveSMSClumns=[
			{title:"APP名称","dataIndex":"appName"},
			{title:"频次","dataIndex":"times",render:(text)=>(text+"次/月")},
		];
		//APP 命中号码分页
		const pagination={pageSize:10,total:appContaionsTargetListData.data.data===undefined?0:appContaionsTargetListData.data.total,
                        current:appContaionsTargetListData.data===undefined?1:appContaionsTargetListData.data.current};
        //公众短信接收频次分页
        const appReceiveSMSPagination={pageSize:10,total:appReceiveSMSFrequencyListData.data.data===undefined?0:appReceiveSMSFrequencyListData.data.total,
                        current:appReceiveSMSFrequencyListData.data===undefined?1:appReceiveSMSFrequencyListData.data.current};
    	const rowKey="id";

		return(
				<div className="smsAnalyse">
          {/* 文种排行 */}
						<div className="smsLanguageTop">
    						<Card>
    						   <Spin spinning={smsLanguageListData.loading}>
    					       	<BarTopTypeChart title="短信文种排行" legendData={smsLanguageListData.data.legendData}  xAxisData={smsLanguageListData.data.xAxisData}
                       			  yAxisData={smsLanguageListData.data.yAxisData} series={(smsLanguageListData.data.series===undefined?{name:'',data:[]}:smsLanguageListData.data.series)} />
                   </Spin>
                </Card>
            </div>
            {/* app短信接收次数 */}
						<div className="appReceive">
    						<Card title="公众短信接收次数">
    						      <TableDescribe columns={appReceiveSMSClumns} data={appReceiveSMSFrequencyListData.data.data} size="middle" bordered={true}
                                    pagination={appReceiveSMSPagination} loading={appReceiveSMSFrequencyListData.loading} rowKey={rowKey}  onChange={this.handleSMSFrequencyTableChange}/>
    						</Card>
            </div>
            {/* app命中号码 */}
						<div className="appTarget">
    						<Card title="APP命中号码详细信息">
                      <TableDescribe columns={appTargetClumns} data={appContaionsTargetListData.data.data} size="middle" bordered={true}
                                    pagination={pagination} loading={appContaionsTargetListData.loading} rowKey={rowKey}  onChange={this.handleStandardTableChange}/>
    						</Card>
            </div>
				</div>
			);
	}

}


function mapStateToProps(state) {
  return {
  	smsLanguageListData:state.SmsAnalyze.smsLanguageListData,
  	appReceiveSMSFrequencyListData:state.SmsAnalyze.appReceiveSMSFrequencyListData,
  	appContaionsTargetListData:state.SmsAnalyze.appContaionsTargetListData,
  }
}
const SmsAnalyze = connect(mapStateToProps, dispath => bindActionCreators(ActionCreators, dispath))(SMSAnalyzeView);

export default SmsAnalyze;
