import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Table} from 'antd'
import SignallingDetail from './SignallingDetail'

import "./signlingCheck.css";

const columns = [
  {
    title: 'IMSI',
    dataIndex: 'imsi',
    key: 'imsi'
  }, {
    title: 'IMEI',
    dataIndex: 'imei',
    key: 'imei'
  }, {
    title: '发送时间',
    dataIndex: 'sendtime',
    key: 'sendtime'
  }, {
    title: '本机号码',
    dataIndex: 'phonenumber',
    key: 'phonenumber'
  }, {
    title: '对端号码',
    dataIndex: 'towardnumber',
    key: 'towardnumber'
  }, {
    title: 'SMS',
    dataIndex: 'sms',
    key: 'sms'
  }, {
    title: '主从模式',
    dataIndex: 'mode',
    key: 'mode'
  }, {
    title: '4G基站号',
    dataIndex: 'basestation',
    key: 'basestation'
  }
];

// const columns = [
//   {
//     title: '手机号',
//     dataIndex: 'number',
//     key: 'number'
//   }, {
//     title: 'IMSI',
//     dataIndex: 'imsi',
//     key: 'imsi'
//   }, {
//     title: '时间',
//     dataIndex: 'time',
//     key: 'time'
//   }, {
//     title: '异常种类',
//     dataIndex: 'type',
//     key: 'type'
//   }, {
//     title: '详细内容',
//     dataIndex: 'aa',
//     key: 'aa'
//   }, {
//     title: '来源',
//     dataIndex: 'source',
//     key: 'source'
//   }
// ];

class CheckTable extends React.PureComponent {
  onOk() {
    this.props.closeDetail()
  }

  onRecord(record) {
    let param = {
      imsi: record.imsi,
      imei: record.imei
    }
    return {
      onDoubleClick: () => {
        this.props.loadDetail(param)
      }
    }
  }

  render() {
    const {
      total, result, detail_result, loading,
      //error,
      modalVisible
    } = this.props
    let pagination = {
      showQuickJumper: true,
      total: total,
      pageSize: 10,
      showTotal: (total) => {
        return `共${total}条`
      },
      itemRender: (current, type, originalElement) => {
        if (type === 'prev') {
          return <a>上一页</a>;
        } else if (type === 'next') {
          return <a>下一页</a>;
        }
        return originalElement;
      }
    }
    return (<div>
      <Table dataSource={result} loding={loading} size="middle" columns={columns} pagination={pagination} rowKey={(r, i) => (i)} onRow={this.onRecord.bind(this)}/>
      <Modal title="信令详情" visible={modalVisible} onOk={this.onOk.bind(this)} onCancel={this.onOk.bind(this)}>
        <SignallingDetail data={detail_result}/>
      </Modal>
    </div>);
  }
}

CheckTable.propTypes = {
  total: PropTypes.number.isRequired,
  result: PropTypes.array.isRequired,
  detail_result: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

export default CheckTable;
