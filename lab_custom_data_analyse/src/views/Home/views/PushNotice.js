import React, {Component} from "react";
import { Card ,Row, Col , Table } from 'antd';
import "./style.css";

class PushNotice extends Component {

  render() {
    // 机卡关系表头
    const columns = [{
                    title: '手机号码',
                    dataIndex: 'phoneNumber',
                  }, {
                    title: 'IMSI',
                    dataIndex: 'imsi',
                  }, {
                    title: '号卡状态',
                    dataIndex: 'cardStatus',
                  },{
                    title: '机型',
                    dataIndex: 'model',
                  }
                ];
    return (
      // 公告推送部分
      <div className="pushNotice" >
        <Row >
          {/* 最新推荐人 */}
          <Col span={8}>
            <Card  title="最新推荐人" bordered={false}>
              <div className="referee">
                <p>
                  <span>推荐人号码: 13900000000</span>
                  <span>IMSI号码: 460021596548756</span>
                  <span>号码归属地: 四川成都</span>
                </p>
                <p>
                  <span>是否为重要目标: 是</span>
                  <span>最近位置: 四川绵阳</span>
                  <span>关联目标: 13906265856 13654875264</span>
                </p>
              </div>
            </Card>
          </Col>
          {/* 机卡变更关系 */}
          <Col span={8}>
            <Card className="machineCard" title="机卡变更关系" bordered={false}>
              <Table columns={columns}/>
            </Card>
          </Col>
          {/* 公告信息 */}
          <Col span={8}>
            <Card className="notice" title="公告信息" bordered={false}>
              <div>
                <span className="noticeName">位置更新</span><span className="noticeContent">目标13980003611于2018-5-25 16:00:23 位置更新到北京</span>
              </div>
              <div>
                <span className="noticeName">换机/换卡</span><span className="noticeContent">目标13980003611于2018-5-25 16:00:23 位置更新到北京</span>
              </div>
              <div>
                <span className="noticeName">中间人</span><span className="noticeContent">目标13980003611于2018-5-25 16:00:23 位置更新到北京</span>
              </div>
              <div>
                <span className="noticeName">通联预警</span><span className="noticeContent">目标13980003611于2018-5-25 16:00:23 位置更新到北京</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PushNotice;
