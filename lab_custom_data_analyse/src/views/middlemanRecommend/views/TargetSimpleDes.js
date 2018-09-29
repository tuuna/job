import React, { Component } from 'react';
import {Row, Col,Avatar,Tag} from 'antd';
import "./style.css";

class TargetSimpleDes extends Component {

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

 // renderMes=(data)=>{
 //
 // }


	render(){
		const {middlePerson}=this.props;
		return(
			<div className="userAvatar">
			<Row>
				<Col span={8}>
					<Avatar style={{ backgroundColor: '#87d068' }} size='large' icon="user" />
					<p><span>{middlePerson.name}</span></p>
					<p><span>状态: {middlePerson.status}</span></p>
					 <div className="tag-mes">
                		{this.renderTag(middlePerson.desc)}
        	 		</div>	
				</Col>
				<Col span={16}>
				<p><span>号码:</span>{middlePerson.phoneNum}</p>
        		<p><span>IMSI:</span>{middlePerson.imsi}</p>
        		<p><span>号码归属地:</span>{middlePerson.phoneLocation}</p>
        		<p><span>现在位置:</span>{middlePerson.nowPosition}</p>
                <p style={{color: 'red'}} ><span>是否是中间人:</span>{middlePerson.middlePerson}</p>
        		<p style={{color: 'red'}} ><span>是否重要目标:</span>{middlePerson.target}</p>
				</Col>	
				</Row>	
			</div>
			);
	}
}

export default TargetSimpleDes;