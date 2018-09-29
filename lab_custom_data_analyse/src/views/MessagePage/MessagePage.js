import {Layout, message} from 'antd';
import React, {Component} from 'react';
import SearchResult from './views/searchResult.js';
import QueryMessage from './views/queryMessage';
import * as ActionCreators from "./reducer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const {Content} = Layout;


class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numType: 'phone',
            keywords: '',
            startTime: '',
            endTime: '',
            num: '',
            own_number:'',
            op_number: '',
            address: '',
            op_address: '',
            own_imsi: '',
            op_imsi: '',
            from: '',
            to: '',
            listSort: "desc",
            pageNum:"0",
            pageSize:"4",
            currentPage: 1
        };
    }

    componentDidMount() {
        let param = {
            numType: 'phone',
            keywords: '',
            startTime: '',
            endTime: '',
            num: '',
            own_number:'',
            op_number: '',
            address: '',
            op_address: '',
            own_imsi: '',
            op_imsi: '',
            from: '',
            to: '',
            listSort: "desc",
            pageNum:"0",
            pageSize:"4"
        };
        this.props.loadFilterData(param);
        this.error();
    }

    error() {
        if (this.props.error) message.error("This is a message of error");
    }

    changeMessage(msg) {
        this.setState({
            currentPage: 1
        })
        this.setState(msg, () => {
            let param = {
                numType: this.state.numType,
                keywords: this.state.keywords,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                num: this.state.num,
                own_number: this.state.own_number,
                op_number: this.state.op_number,
                address: this.state.address,
                op_address: this.state.op_address,
                own_imsi: this.state.own_imsi,
                op_imsi: this.state.op_imsi,
                from: this.state.from,
                to: this.state.to,
                listSort: this.state.listSort,
                pageNum:"0",
                pageSize:this.state.pageSize
            };
            this.props.loadFilterData(param);
        });
    }


    changeSort(sort) {
        this.setState({ listSort: sort }, () => {
            let param = {
                numType: this.state.numType,
                keywords: this.state.keywords,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                num: this.state.num,
                own_number: this.state.own_number,
                op_number: this.state.op_number,
                address: this.state.address,
                op_address: this.state.op_address,
                own_imsi: this.state.own_imsi,
                op_imsi: this.state.op_imsi,
                from: this.state.from,
                to: this.state.to,
                listSort: this.state.listSort,
                pageNum: "0",
                pageSize:this.state.pageSize
            };
            this.props.loadFilterData(param);
        });
    }


    getCurrentPage(currentPage) {
        console.log(currentPage)
        this.setState({ pageNum: currentPage-1, currentPage:currentPage }, () => {
            let param = {
                numType: this.state.numType,
                keywords: this.state.keywords,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                num: this.state.num,
                own_number: this.state.own_number,
                op_number: this.state.op_number,
                address: this.state.address,
                op_address: this.state.op_address,
                own_imsi: this.state.own_imsi,
                op_imsi: this.state.op_imsi,
                from: this.state.from,
                to: this.state.to,
                listSort: "desc",
                pageNum:this.state.pageNum,
                pageSize:this.state.pageSize
            };
            this.props.loadFilterData(param);
            console.log("分页成功")
        });
    }


    render() {
        return (


            <Content style={{backgroundColor:'#08244A'}}>
                    <QueryMessage
                        onChangeMsg={msg => {
                            this.changeMessage(msg)
                        }}
                    />
                <SearchResult {...this.props.list } getKey={this.state} pageCallbackFn={this.getCurrentPage.bind(this)}
                              changeSort={sort => this.changeSort(sort)} currentPage={this.state.currentPage}
                />
                <div>
                </div>
            </Content>
        )
    }
}

export default connect(
    state => ({
        //表格参数
        list: {
            data: state.MessagePage.list.data,
            total: state.MessagePage.list.total,
            loading: state.MessagePage.list.loading,
            error: state.MessagePage.list.error,
        }
    }),
    dispatch => bindActionCreators(ActionCreators, dispatch)
)(MessagePage);