import React, { Component } from 'react';
import TargetMes from './TargetMes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from "../redux/action";

class TargetApp extends Component {

  componentWillMount(){
    this.props.jobListTarget();
  }

  render() {
    const {jobList,selectTarget,choiceTarget,sigBarTarget,locationlistTarget,cityFlowlistTarget,phoneChangeHistoryTarget
                ,interConnecterTarget ,foreignConnecterTarget,userContacterTradTarget}=this.props;
    console.info(this.props)
    return (
      <div className="userPage">
      <TargetMes  jobList={jobList} selectTarget={selectTarget}  onChoiceTargetClick={choiceTarget} onBarChart={sigBarTarget}
                  locationlistTarget={locationlistTarget}  cityFlowlistTarget={cityFlowlistTarget}  phoneChangeHistoryTarget={phoneChangeHistoryTarget}
                      interConnecterTarget={interConnecterTarget} foreignConnecterTarget={foreignConnecterTarget}  userContacterTradTarget={userContacterTradTarget} />
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      user:state.targetMes.user,
      jobList:state.targetMes.jobList,
      selectTarget:state.targetMes.selectTarget,
    }
}


// const choiceTargetAction={type:'choice_target'}

// function mapDispatchToProps(dispath) {
//   return{
//      actions: bindActionCreators(ActionCreators,dispath)
//   }
//
//     // onChoiceTargetClick:(selectTargetId)=>dispath({...choiceTargetAction,...selectTargetId}),
//
// }

const TargetAppDemo=connect(mapStateToProps,dispatch => bindActionCreators(ActionCreators, dispatch))(TargetApp);

export default TargetAppDemo;
