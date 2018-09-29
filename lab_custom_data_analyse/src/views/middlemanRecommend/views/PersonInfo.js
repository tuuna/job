import React, { Component } from 'react';
import {Row, Col,Avatar,Tag} from 'antd';
import "./style.css";

class PersonInfo extends Component {

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
        const {targetA}=this.props;
		return(
			<div className="targetUser">
			<Row>
				<Col span={8}>
					<Avatar style={{ backgroundColor: '#87d068' }} size='large' icon="user" />
                    <p><span>{targetA.name}</span></p>
					<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{targetA.intimacyLevel}</Avatar>
					<p><span>状态: {targetA.status}</span></p>
					 <div className="tag-mes">
                		{this.renderTag(targetA.desc)}
        	 		</div>
				</Col>
				<Col span={16}>
				<p><span>推荐人号码:</span>{targetA.phoneNum} </p>
        		<p><span>IMSI 号码:</span> {targetA.imsi}</p>
        		<p><span>用户归属地:</span> {targetA.phoneLocation}</p>
        		<p><span>现在位置:</span>{targetA.nowPosition} </p>
        		<p style={{color: 'red'}} ><span>是否重要目标:</span> {targetA.target}</p>
        		<p><span>通联渠道:</span>{targetA.contactWay} </p>
        		<p><span>总通联次数:</span> {targetA.totalCommuniTimes} 次/月</p>
        		<p><span>最近通联时间:</span> {targetA.lastestCommuniDate}</p>
        		<p><span>漫游位置重合数:</span>{targetA.postionCoincideNum}个 </p>
        		<p><span>短信时序事件数:</span> {targetA.mesActionNum} 个</p>
        		<p><span>通话时序事件数:</span>{targetA.communitActionNum}个 </p>
        		<p><span>敏感关键字数:</span>{targetA.sensitiveWordNum} 个</p>
				</Col>
				</Row>
			</div>
			);
	}
}

export default PersonInfo;
