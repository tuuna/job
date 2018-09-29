import React, {Component} from "react"
import { NavLink } from "react-router-dom";
import { Row, Col } from 'antd';
import './Header.css';
import headerLogo from './home.png';

class Header extends Component {
	// state={
	//   index:0,
	// };
	render() {
		return (
				<div className="allHeader">
					<Row>
						<Col span={1}>
							<img style={{
									height: 50,
									width: 70,
								}} src={headerLogo} alt="headerLogo"/>
						</Col>
						<Col span={23}>
							<ul className="nav-top" id="nav-top">
								<NavLink to="/"><li onClick={this.homeClick} className="select">首页</li></NavLink>
								<NavLink to="/targetCount/userMessage"><li onClick={this.targetClick}>目标统计分析</li></NavLink>
								<NavLink to="/currencyCount/countAnalysis"><li onClick={this.currencyClick}>通用统计分析</li></NavLink>
								<NavLink to="/MonitoringWarning/targetMonitoring"><li onClick={this.monitoringClick}>监控预警</li></NavLink>
								<NavLink to="/messageSearch"><li onClick={this.messageClick}>短信检索</li></NavLink>
                                <NavLink to="/dataAnalyse/dataAnalyse"><li onClick={this.dataClick}>自定义数据分析</li></NavLink>
							</ul>
						</Col>
					</Row>
				</div>
		)
	}
    //头部激活状态样式
    homeClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
		    lis[0].className="select";
		    lis[1].className='';
        lis[2].className='';
        lis[3].className='';
        lis[4].className='';
        // lis[5].className='';
    };
    targetClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
        lis[0].className="";
        lis[1].className="select";
        lis[2].className="";
        lis[3].className="";
        lis[4].className="";
        // lis[5].className="";
	};
    currencyClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
        lis[0].className="";
        lis[1].className="";
        lis[2].className="select";
        lis[3].className="";
        lis[4].className="";
        // lis[5].className="";
	};
    monitoringClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
        lis[0].className="";
        lis[1].className="";
        lis[2].className="";
        lis[3].className="select";
        lis[4].className="";
        // lis[5].className="";
    };
    messageClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
        lis[0].className="";
        lis[1].className="";
        lis[2].className="";
        lis[3].className="";
        lis[4].className="select";
        // lis[5].className="";
    };

    dataClick=()=>{
        let ul = document.getElementById("nav-top");
        let lis = ul.getElementsByTagName("li");
        lis[0].className="";
        lis[1].className="";
        lis[2].className="";
        lis[3].className="";
        lis[4].className="";
        lis[5].className="select";
    };

}
// window.location.reload();

export default Header
