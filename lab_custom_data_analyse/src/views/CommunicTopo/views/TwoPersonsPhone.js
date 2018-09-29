import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../reducer';

import "./style.css";
import chart from "../../../common/assets/chart.png";
import receive from "../../../common/assets/called.png";
import send from "../../../common/assets/calling.png";


class TwoPersonsPhone extends React.PureComponent {
    render() {
        {
            let commu_result1 = '';
            let chartContent = null;
            var  phoneContent= this.props.commu_result.map((item,index)=>{
               if(index===0){
                   commu_result1=item.calling;
               }
                //判断主被叫
               if(item.calling===commu_result1){
                   //通话方式显示
                   if(item.ways==="通话"){
                       chartContent = <div className="leftContentChart" key={index}>
                           <div className="personsPicture">
                               <img src={send} alt="send"/>
                           </div>
                           <div className="chart">
                               <img src={chart} alt="chart"/>
                           </div>
                       </div>
                   }
                   //短信方式显示
                   if(item.ways==="短信"){
                       chartContent = <div className="leftContentMessage" key={index}>
                           <div className="personsPicture">
                               <img src={send} alt="send"/>
                           </div>
                           <div className="message">
                               {item.content}
                           </div>
                       </div>
                   }
               }else {
                   //通话方式显示
                   if(item.ways==="通话"){
                       chartContent = <div className="rightContentChart" key={index}>
                           <div className="receiveChart">
                               <img src={chart} alt="chart"/>
                           </div>
                           <div className="personsReceive">
                               <img src={receive} alt="receive"/>
                           </div>
                       </div>
                   }
                   //短信方式显示
                   if(item.ways==="短信"){
                       chartContent = <div className="rightContentMessage" key={index}>
                           <div className="message">
                               {item.content}
                           </div>
                           <div className="personsReceive">
                               <img src={receive} alt="receive"/>
                           </div>
                       </div>
                   }
               }
                return(
                        <div key={index}>
                            {chartContent}
                        </div>
                )
            })
        }

        return(
            <div className="twoPersonsPhone">
                <div className="outPhone">
                    <div className="titleMiddle"></div>
                    <div className="titleCircle"></div>
                    {/*手机聊天内容*/}
                    <div className="phoneContent">
                        <div className="contentTitle">
                            <span className="calling">
                                {/*{commu_result[0].calling}*/}
                                13000000000
                                </span>
                            <span className="called">
                                {/*{commu_result[0].called}*/}
                                12000000000
                                </span>
                        </div>
                        <div className="chartContent">
                            {phoneContent}
                        </div>
                    </div>
                    <div className="phoneFooter"></div>
                </div>

            </div>
        )
    }
}
export default connect(state => ({
    //通信数据
    commu_result: state.CommunicTopo.communication.result,
}), dispatch => bindActionCreators(ActionCreators, dispatch))(TwoPersonsPhone)
