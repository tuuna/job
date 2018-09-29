// import React, {Component} from 'react';
// import {Form,Input, Button, Select, Dropdown,Menu, Card, Row, Col, Modal,Icon} from 'antd';
// import {Tabs} from "antd/lib/index";
//
// const TabPane = Tabs.TabPane;
// export default class TableQuery extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           tableName:" "
//         }
//     }
//
//     callback(key) {
//         console.log(key);
//     }
//     searchCommon() {
//         if (this.props.onChangeCondition) {
//             this.props.onChangeCondition(this.state);
//         }
//     }
//
//
//     render() {
//         return (
//
//                 <Col>
//                     <Tabs onChange={(e) => this.callback.bind(this)(e)} type="card">
//                         <TabPane tab="分析1" key="1" onClick={this.searchCommon.bind(this)}/>
//                         <TabPane tab="分析2" key="2" />
//                     </Tabs>
//                 </Col>
//
//         );
//     }
// }