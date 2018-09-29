import React, {Component} from "react";
import {
    Layout,
    Menu,
    Table
} from 'antd';

const columns = [
    {
        title: "列名",
        dataIndex: "COLUMNNAME",
        key: "COLUMNNAME",
        fontSize: 12
    },
    {
        title: "消息",
        dataIndex: "COMMENTS",
        key: "COMMENTS",
        fontSize: 12
    }
];
// const columns3 = [{
//     title: '表名',
//     dataIndex: 'name',
//     key: 'name',
//     width: '60%',
//     render: text => <span style={{cursor: 'pointer'}} onClick={(e) => {console.log(e, '点击')}}>{text}</span>,
// }, {
//     title: '消息',
//     dataIndex: 'age',
//     key: 'age',
//     width: '40%',
// }]
// const data3 = [{
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
// }]


export default class TableColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const {data, loading} = this.props;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                let name = [];
                selectedRows.map((item,index) => {
                    console.log(item.COLUMNNAME)
                    name[index] = item.COLUMNNAME
                })
                this.props.getChartData(name)
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (

            <Table
                size="small"
                rowSelection={rowSelection}
                scroll={{x: 300,y: 200}}
                dataSource={data}
                loading={loading}
                columns={columns}
                pagination={false}
                className="ColumnList"
            />

        );
    }
}