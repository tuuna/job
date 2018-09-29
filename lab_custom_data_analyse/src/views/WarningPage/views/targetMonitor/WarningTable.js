import { Table, Modal } from "antd";
import React from "react";
import moment from "moment";
import "../../TargetMonitor.css"

const columns = [
  {
    title: "目标手机号",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    fontSize: 12
  },
  {
    title: "告警内容",
    dataIndex: "alertContent",
    key: "alertContent",
    fontSize: 12
  },
  {
    title: "告警时间",
    dataIndex: "alertDate",
    key: "alertDate",
    fontSize: 12
  }
];

export default class WarningTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showCurRowMessage.bind(this);
    this.confirm.bind(this);
  }

  confirm(record) {
    Modal.info({
      className:"target-modal",
      title: "预警详情",
      content: record.alertInfo === undefined ? "" : record.alertInfo,
      okText: "确认",
      cancelText: "取消"
    });
  }

  showCurRowMessage(record) {
    return {
      onDoubleClick: () => this.confirm(record)
    };
  }

  render() {
    const { total, data, loading } = this.props.data;
    for (let i = 0; i < data.length; i++) {
      data[i].alertDate = moment(data[i].alertDate).format(
        "YYYY-MM-DD HH:mm:ss"
      );
    }
    let pagination = {
      showQuickJumper: true,
      pageSize: 9,
      defaultCurrent: 1,
      total: total,
      onChange: page => {
        this.props.onChange(page);
      },
      showTotal: total => {
        return `共${total}条`;
      },
      itemRender: (current, type, originalElement) => {
        if (type === "prev") {
          return <a>上一页</a>;
        } else if (type === "next") {
          return <a>下一页</a>;
        }
        return originalElement;
      }
    };

    return (
      <div style={{ width: "100%" }}>
        {/*<Form layout="inline">
          <FormItem className="Alert">告警数量共计 </FormItem>
          <FormItem className="Alert-number">{total}</FormItem>
          <FormItem className="Alert">条 </FormItem>
        </Form>
        <Form>
          <FormItem>*/}
        <Table
          dataSource={data}
          loading={loading}
          columns={columns}
          rowKey={(r, i) => i}
          onRow={this.showCurRowMessage.bind(this)}
          pagination={pagination}
          size="middle"
        />
        {/*</FormItem>
        </Form>*/}
      </div>
    );
  }
}
