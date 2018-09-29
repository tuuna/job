import React, {Component} from "react";
import {
    Layout,
    Menu,
    Table
} from 'antd';
import "./tableResult.css"

const columns = [
    {
        title: "表名",
        dataIndex: "TABLENAME",
        key: "TABLENAME",
        fontSize: 12
    },
    {
        title: "消息",
        dataIndex: "COMMENTS",
        key: "COMMENTS",
        fontSize: 12
    }
];

export default class TableResult extends Component {
    click(record,rowkey){
        console.log(record.TABLENAME)//记录----只要TABLENAME!!
        console.log(rowkey)
        //处理record
        let param = {
            tableName: record.TABLENAME
        }
        this.props.getRecord(param);
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const {data, loading} = this.props;
        // const data1 = [{
        //     key: '1',
        //     name: 'John Brown',
        //     id: 32,
        // }, {
        //     key: '2',
        //     name: 'Jim Green',
        //     id: 42,
        // },{
        //     key: '3',
        //     name: 'John Brown',
        //     id: 32,
        // }, {
        //     key: '4',
        //     name: 'Jim Green',
        //     id: 42,
        // }, {
        //     key: '',
        //     name: '',
        //     id: '',
        // }]
        // console.log(data1);
        return (

            <Table
                dataSource={data}
                loading={loading}
                columns={columns}
                size="middle"
                pagination={false}
                className="TableList"
                onRow={(record,rowkey)=>{
                    return{
                        onClick : this.click.bind(this,record,rowkey)    //点击行,record指的本行的数据内容，rowkey指的是本行的索引                
                    }
                }}
            />

        );
    }
}