import React, {Component} from 'react';
import {Row, Col, Menu, Table, Input, Select, Card} from 'antd'

class dataAnalyse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "data"
        };
    }

    // componentDidMount() {
    // }

    // error() {
    //     if (this.props.error) message.error("This is a message of error");
    // }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }
    render() {
        const columns1 = [{
            title: '表名',
            dataIndex: 'name',
            key: 'name',
            render: text => <span style={{cursor: 'pointer'}} onClick={(e) => {console.log(e, '点击')}}>{text}</span>,
          }, {
            title: '消息',
            dataIndex: 'age',
            key: 'age',
          }]
        const data1 = [{
            key: '1',
            name: 'John Brown',
            age: 32,
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
          }]
        return (
            <div>
                ggggg
            </div>
        )
    }
}
export default dataAnalyse;
