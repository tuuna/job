import React, {Component} from 'react';
import {
    Layout,
    Menu,
    Icon,
} from 'antd';
import './style.css';
import TargetDescribe from './TargetDescribe';
import taskListLogo from "../../../common/assets/taskListLogo.png"

const {SubMenu} = Menu;
const { Content, Sider} = Layout;
class TargetMes extends Component {
    state = {
        collapsed: false
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    onClick = ({item, key, keyPath}) => {
        console.log(key, keyPath);
        let mes = {
            "id": key,
            "param": {
                "id": key
            }
        };
        this.props.onChoiceTargetClick(mes); //获取基本信息
        this.props.onBarChart(mes); // 获取条形图
        this.props.locationlistTarget(mes); //获取最近位置
        this.props.cityFlowlistTarget(mes); //获取动态漫游地
        this.props.phoneChangeHistoryTarget(mes); //获取机卡信息

        this.props.interConnecterTarget(mes); //联系人top
        this.props.foreignConnecterTarget(mes);

        this.props.userContacterTradTarget(mes);

    }

    renderMemuTree = (data) => {
        console.info(data)
        return data.map((item) => {
            if (item.targetList) {
                return (<SubMenu key={item.id} title={<span> < Icon type = "pie-chart" />< span > {
                    item.jobName
                }
          </span>
      </span>}>
                    {this.renderMemuTree(item.targetList)}</SubMenu>);
            }
            return <Menu.Item key={item}>{item}</Menu.Item>
        })
    }

    render() {
        const {jobList, selectTarget} = this.props;

        return (<div className="targetMain">
          <Layout className="targetLayout">
            <Sider className="targetList" collapsible="collapsible" >
              <div className="userPageList">
                  <span>
                    <img src={taskListLogo} alt='taskListLogo' />
                  </span>
                  <span>任务列表</span>
              </div>
              <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" inlineCollapsed={this.state.collapsed} onClick={this.onClick.bind(this)}>
                  {this.renderMemuTree(jobList)}
              </Menu>
            </Sider>
            <Content className="content_main">
                {
                    selectTarget.name === undefined
                        ? <div className="noChoice">请选择左边任务目标,查看具体信息</div>
                        : (<TargetDescribe selectTarget={selectTarget} locationlistTarget={this.props.locationlistTarget}/>)
                }
            </Content>
          </Layout>
        </div>)
    }
}

export default TargetMes;
