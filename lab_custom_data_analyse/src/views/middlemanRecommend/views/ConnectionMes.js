import React, { Component } from 'react';
import {Row, Col,Tag} from 'antd';
import "./style.css"
class ConnectionMes extends Component {

 renderTag=(data)=>{
    let dataColor=["#f40","#50","#2db7f5","#108ee9","#87d068"];
    let dataRender=[];
    if (data===undefined) {
    return "";
    }else{
        for (let i = data.length - 1; i >= 0; i--) {
            dataRender.push(<Tag key={data[i]} color={dataColor[i]}>{data[i]}</Tag>);
        }
        return dataRender;
    }

 }


	render(){
        const {target}=this.props;
		return(
			<div>
			<Row>
				<Col >
                <p><span>通联渠道:</span>{target.contactWay} </p>
                <p><span>总通联次数:</span> {target.totalCommuniTimes} 次/月</p>
                <p><span>亲密度:</span>{target.intimacyLevel}</p>
                <p><span>最近通联时间:</span> {target.lastestCommuniDate}</p>
                <p><span>漫游位置重合数:</span>{target.postionCoincideNum}个 </p>
                <p><span>短信时序事件数:</span> {target.mesActionNum} 个</p>
                <p><span>通话时序事件数:</span>{target.communitActionNum}个 </p>
                <p><span>敏感关键字数:</span>{target.sensitiveWordNum} 个</p>
				</Col>	
				</Row>	
			</div>
			);
	}
}

export default ConnectionMes;