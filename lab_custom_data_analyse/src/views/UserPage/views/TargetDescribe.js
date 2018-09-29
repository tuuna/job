import React, { Component } from 'react';
import { Row , Tabs,} from 'antd';
import BarChart  from "../../../common/component/echarts/barchart";
import TableDescribe from "../../../common/component/table/basictable";
import userInfoLogo from "../../../common/assets/userInfo.png";
import menLogo from "../../../common/assets/men.png";
import countLogo from "../../../common/assets/count.png";

const {TabPane}=Tabs;

class TargetDescribe extends Component {

    handleStandardTableChange = (pagination, filtersArg, sorter) => {
        let mes={current:pagination.current};
        this.props.locationlistTarget(mes);
        console.log(pagination);
    }


    renderTag=(data)=>{
        let dataColor=["#008CEC","#00a2af","#00a950","#f76a00","#f33f2b","#f82b7e"];
        let dataRender=[];
        if (data===undefined) {
            return "";
        }else{
            for (let i = data.length - 1; i >= 0; i--) {
                dataRender.push(<span style={{backgroundColor:dataColor[i]}} key={data[i]}>{data[i]}</span>);
            }
            return dataRender;
        }

    }

    renderMes=(mes) =>{
        return (mes===undefined?"":mes);
    }

    render() {
        const phoneColumns=[
            {title:'号码', dataIndex:'phoneNum'},
            {title:'IMSI',dataIndex:'imsi'},
            {title:'卡号状态', dataIndex:'status'},
            {title:'机型',dataIndex:'phoneType'},
        ];
        const contacterColumns=[
            {title:'联系人号码', dataIndex:'phoneNum'},
            {title:'联系人归属地',dataIndex:'locaton'},
            {title:'通联频次', dataIndex:'frequency',render:(text)=>(text+"次/月")},
            {title:'亲密度',dataIndex:'intmacyLevel'},
        ];

        const userContacterTradColumns=[
            {title:"联系人号码", dataIndex:'phoneNum'},
            {title:"收发方", dataIndex:'part'},
            {title:"通联方式", dataIndex:'connectionWay'},
            {title:"源信令点", dataIndex:'originLocation'},
            {title:"目标信令点", dataIndex:'targetLocation'},
            {title:"线路号", dataIndex:'trance'},
            {title:"最近通联时间", dataIndex:'recentConnectionDate'},
            {title:"平均通联时长(分/秒)", dataIndex:'averageCoastTime'},
            {title:"最长时长(分/秒)", dataIndex:'longestCoastTime'},
            {title:"通联次数", dataIndex:'connectionCount'},

        ]

        const {selectTarget}=this.props;
        const userInfo=(selectTarget.userInfo===undefined?{}:selectTarget.userInfo);
        const barChart=(selectTarget.barChar===undefined?{}:selectTarget.barChar);
        const lastLocationData=(selectTarget.locationData===undefined?[]:selectTarget.locationData.data);
        // const pagination={pageSize:5,total:selectTarget.locationData===undefined?0:selectTarget.locationData.total,
        //     current:selectTarget.locationData===undefined?1:selectTarget.locationData.current};
        const rowKey="id";
        const loading=false;

        // const cityListData=(selectTarget.cityListData===undefined?[]:selectTarget.cityListData);

        const phoneData=(selectTarget.phoneData===undefined?[]:selectTarget.phoneData.data);
        const phonePagination={pageSize:5,total:selectTarget.phoneData===undefined?0:selectTarget.phoneData.total};
        const phoneRowKey="id";
        const phoneLoading=false;

        const interConnecterData=(selectTarget.interConnecterData===undefined?[]:selectTarget.interConnecterData);
        const foreignConnecterData=(selectTarget.foreignConnecterData===undefined?[]:selectTarget.foreignConnecterData);
        const userContacterTradData=(selectTarget.userContacterTradData===undefined?[]:selectTarget.userContacterTradData);
        let recentPosition=[];
        let i=0;
        for(let city of lastLocationData){
          i++;
          recentPosition.push(
            <span key={i}>{city.position}</span>
          )
        }
        return(
            <div style={{height:'100%'}}>
                <Row className="clearFloat">
                  <div className="userAllInfo">
                        <div className="targetInfoTitle">
                          <span>
                            <img src={userInfoLogo} alt="log"/>
                          </span>
                          <span>用户维度信息</span>
                        </div>
                        {/* 图片标签属性 */}
                        <div className="targetLabel">
                              <div className="menLogo">
                                <img src={menLogo} />
                              </div>
                              <div className="tagMes">
                                  {this.renderTag(selectTarget.tap)}
                              </div>
                        </div>
                        {/* 基本信息 */}
                        <div className="targetBaseInfo">
                          <p><span className="colorWhite">最近状态:</span> <span className="color339DE7"> {this.renderMes(userInfo.status)}</span></p>
                          <p><span className="colorWhite">近期位置:</span> <span className="color339DE7">
                            {recentPosition}
                          </span></p>
                          <p><span className="colorWhite">漫游地信息:</span> <span className="color339DE7">{this.renderMes(userInfo.lastLocation)}</span></p>
                          <p><span className="colorWhite">最近联系人:</span> <span className="color339DE7">{this.renderMes(userInfo.recentContacter)}</span></p>
                          <p><span className="colorWhite">涉外联系人:</span> <span className="color339DE7">{this.renderMes(userInfo.forginContacter)}</span></p>
                          {/* 暂时不需要的字段 */}
                          {/* <p><span className="colorWhite">目标号码:</span> <span className="color339DE7">{this.renderMes(userInfo.phoneNum)}</span></p> */}
                          {/* <p><span className="colorWhite">IMSI 号码:</span> <span className="color339DE7">{this.renderMes(userInfo.IMSI)}</span></p>
                          <p><span className="colorWhite">用户归属地:</span> <span className="color339DE7">{this.renderMes(userInfo.city)}</span></p> */}
                          <p><span className="colorWhite">主要短信文种:</span> <span className="color339DE7">{this.renderMes(userInfo.language)}</span></p>
                          <p><span className="colorWhite">最近联系重要目标:</span> <span style={{color: 'red'}}>{this.renderMes(userInfo.rencentMainTarget)}</span></p>
                          <p><span className="colorWhite">是否中间人:</span><span style={{color: 'red'}}>{this.renderMes(userInfo.mainConnecter)}</span></p>
                          <p><span className="colorWhite">是否重要目标:</span><span style={{color: 'red'}}>{this.renderMes(userInfo.mainTarget)}</span></p>
                        </div>
                    </div>
                    <div className="userDynamicInfor">
                        <div className="countLogoTitle">
                          <span>
                            <img src={countLogo} alt="countLogo"/>
                          </span>
                          <span>用户通联统计信息</span>
                        </div>
                        <div>
                          <BarChart  legendData={barChart.legendData}  xAxisData={barChart.xAxisData}
                                                                  yAxisData={barChart.yAxisData} series={barChart.series}/>
                        </div>
                    </div>
                    <div className="cardInformation">
                      <div className="cardInfoTitle">
                        <span>
                          <img src={userInfoLogo} alt="log"/>
                        </span>
                        <span>机卡关系信息</span>
                      </div>
                      <TableDescribe columns={phoneColumns} data={phoneData} size="middle"
                                    pagination={phonePagination} loading={phoneLoading}
                                    rowKey={phoneRowKey}  onChange={this.handleStandardTableChange} />
                    </div>
                </Row>
                {/*下方表格数据*/}
                <Row className="userBelowContent clearFloat">
                    <div className="regularContact">
                        <Tabs defaultActiveKey="1" size='small'>
                            <TabPane tab="国内常联系通信人" key="1">
                              <TableDescribe columns={contacterColumns} data={interConnecterData} size="middle"
                                                                          loading={loading} rowKey={rowKey} pagination={false}/>
                            </TabPane>
                            <TabPane tab="国际常联系通信人" key="2">
                              <TableDescribe columns={contacterColumns} data={foreignConnecterData} size="middle"
                                                                          loading={phoneLoading} rowKey={rowKey} pagination={false} />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="userTrajectory">
                        <Tabs defaultActiveKey="1" size='small'>
                            <TabPane tab="用户通联轨迹线路" key="1">
                                <TableDescribe columns={userContacterTradColumns} data={userContacterTradData} size="middle"
                                               loading={phoneLoading} rowKey={rowKey} pagination={false} />
                            </TabPane>
                        </Tabs>
                    </div>
                </Row>
            </div>
        );
    }
}

export default TargetDescribe;
