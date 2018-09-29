import React, { Component } from 'react';
import TargetMes from './TargetMes';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from "../../../redux/reducers/targetAction";

class UserPage extends Component {

    componentWillMount() {
        this.props.jobListTarget();
    }

    render() {
        const {
            value,
            user,
            jobList,
            selectTarget,
            choiceTarget,
            sigBarTarget,
            locationlistTarget,
            cityFlowlistTarget,
            phoneChangeHistoryTarget,
            interConnecterTarget,
            foreignConnecterTarget,
            userContacterTradTarget
        } = this.props;
        return(
            <div className="App">
              <TargetMes  jobList={jobList} selectTarget={selectTarget}  onChoiceTargetClick={choiceTarget} onBarChart={sigBarTarget}
                          locationlistTarget={locationlistTarget}  cityFlowlistTarget={cityFlowlistTarget}  phoneChangeHistoryTarget={phoneChangeHistoryTarget}
                          interConnecterTarget={interConnecterTarget} foreignConnecterTarget={foreignConnecterTarget}  userContacterTradTarget={userContacterTradTarget} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.targetMes.user,
        jobList: state.targetMes.jobList,
        selectTarget: state.targetMes.selectTarget,
    }
}

function mapDispatchToProps(dispath) {
    return {
        actions: bindActionCreators(ActionCreators, dispath)
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(ActionCreators, dispatch))(UserPage);
