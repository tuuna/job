import React, {Component} from 'react';
import Highlighter from "react-highlight-words";
import {
    Checkbox,
    Button,
    Col,
    Row,
    Modal,
    BackTop,
    Collapse,
    List,
    Table,
    Popover,
    Icon
} from 'antd';
import moment from "moment";
import './searchResult.css';


const CheckboxGroup = Checkbox.Group;
const Panel = Collapse.Panel;

const mapping = {
    address: "本机归属",
    own_number: "本机号码",
    own_imsi: "本机IMSI",
    op_imsi: "对端IMSI",
    from: "发送方号",
    to: "接收方号",
    op_address: "对端归属",
    op_number: "对端号码",
    messageTime: "发送时间",
    content: "短信内容",
    keyword: "关键字",
    m_s: "主从模式",
    message_type: "短信语种",
    message_length: "短信长度",
    base_lon: "基站经度",
    base_lat: "基站纬度",
    phone_type: "手机型号",
    g_number: "4G基站号",
    user_ip: "用户ip地址",
    g_3g_4g_base: "2/3/4G基站号",
    up_apn_ambr: "上行APN AMBR",
    down_apn_ambr: "下行APN AMBR",
    mme_channel: "MME控制隧道号",
    temp_recog: "临时客户识别码",
    route_sig: "2/3G路由区标识",
    term_sig: "3G终端服务区标识",
    sgw_sgsn_channel: "SGW/SGSN控制隧道号",
    pgw_ggsn_channel: "PGW/GGSN控制隧道号",
    temp_sgsn: "临时移动用户识别-SGSN",
};

const content = (
    <div>
        <p>双击查看短信详情</p>
    </div>
);

const sortContent = (
    <div>
        <p>默认为倒序</p>
        <p>点击更换排序方式</p>
    </div>
);

export default class searchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            simple: true,
            detailed: false,
            loading: false,
            visible: false,
            customState: false,
            desc: true,
            sortState: "desc",
            sortIcon: "arrow-down",
            custom: [],
            immediate_custom: [],
            immediate_ad_custom: [],
            detailed_desc_data: [],
            detailed_asc_data: [],
            sortList: [],
            customColumn: [],
            isClickSimple: true,
            isClickDetail: false,
            isClickSort: false,
            isClickCustom: false,
            currentPage: 1, //当前页码
            groupCount: 5, //页码分组，显示5个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
        }
    }

    componentDidMount() {
        this.setState({
            currentPage:1
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.currentPage !== this.state.currentPage) {
    //         this.setState({
    //             currentPage:1
    //         })
    //     }
    // }

    /*componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            let {getKey} = this.props
            console.log(getKey)
            if (getKey.numType === "phone" && getKey.num !== "") {
                this.setState({
                    op_numberHighlight: true
                })
            }
            if (getKey.numType === "imsi" && getKey.num !== "") {
                this.setState({
                    op_imsiHighlight: true
                })
            }
            if (getKey.keywords !== "") {
                this.setState({
                    keywordsHighlight: true,
                    own_numberHighlight: true,
                    op_numberHighlight: true,
                    addressHighlight: true,
                    op_addressHighlight: true,
                    own_imsiHighlight: true,
                    op_imsiHighlight: true,
                    fromHighlight: true,
                    toHighlight: true,
                })
            }
            Object.keys(getKey).forEach((index) => {
                if (getKey[index] !== "" &&
                    index !== "numType" &&
                    index !== "num" &&
                    index !== "listSort" &&
                    index !== "pageNum" &&
                    index !== "pageSize" &&
                    index !== "endTime" &&
                    index !== "visible" &&
                    index !== "confirmLoading") {
                    if (index === "startTime") {
                        this.setState({
                            messageTimeHighlight: true
                        })
                    } else {
                        let highlight = index + "Highlight";
                        console.log(highlight)
                        this.setState({
                            [highlight]: true
                        })
                    }
                }
            })
        }

    }*/


    createPage() {
        const { groupCount, startPage} = this.state;
        const {total, currentPage} = this.props
        let pageSize = this.props.getKey.pageSize
        let pages = []
        let pageNum = Math.ceil(total / pageSize)
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
                       key={0}>
            <Icon type="left"/></li>)

        if (pageNum <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= total; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                               className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > pageNum) {
                pageLength = total
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= pageNum - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            //后面省略号
            if (pageNum - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
           /* pages.push(<li className={currentPage === pageNum ? "activePage" : null} key={pageNum}
                           onClick={this.pageClick.bind(this, pageNum)}>{pageNum}</li>)*/
        }
        //下一页
        pages.push(<li className={currentPage === pageNum ? "nomore" : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={pageNum + 1}><Icon type="right"/></li>)
        return pages;

    }

    //页码点击
    pageClick(currentPage) {
        const {groupCount} = this.state
        const getCurrentPage = this.props.pageCallbackFn;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage: currentPage,
            isRefresh: false
        })
        //将当前页码返回父组件
        getCurrentPage(currentPage)
    }

    //上一页事件
    prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页事件
    nextPageHandeler() {
        let {currentPage} = this.state
        let {total} = this.props
        let pageSize = this.props.getKey.pageSize
        let pageNum = Math.ceil(total / pageSize)
        // const {total} = this.props.pageConfig;
        if (++currentPage > pageNum) {
            return false
        }
        this.pageClick(currentPage)
    }

    showDefault() {
        this.setState({
            simple: true,
            detailed: false,
            customState: false,
            isClickSimple: true,
            isClickDetail: false,
            isClickSort: false,
            isClickCustom: false
        });
    }

    showDetailed() {
        this.setState({
            simple: false,
            detailed: true,
            isClickSimple: false,
            isClickDetail: true,
            isClickSort: false,
            isClickCustom: false
        })
    }


    handleChange(value) {
        console.log(`selected ${value}`);
        let str = value.toString().split(',')
        this.setState({
            immediate_custom: str,
        });
    }

    handleAdChange(value) {
        console.log(`selected ${value}`);
        let str = value.toString().split(',')
        this.setState({
            immediate_ad_custom: str,
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
            isClickSimple: false,
            isClickDetail: true,
            isClickSort: false,
            isClickCustom: false
        });
    }
    handleOk = () => {
        let common = this.state.immediate_custom
        let advance = this.state.immediate_ad_custom
        let custom = common.concat(advance)
        let intermediate = []
        let content = {}
        custom.forEach((item) => {
            if (item !== "content") {
                if (item === "messageTime") {
                    intermediate.push({
                        title: mapping[item],
                        dataIndex: item,
                        key: item,
                        fontSize: 12,
                        render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
                    })
                } else {
                    if (item === "type") {
                        intermediate.push({
                            title: mapping[item],
                            dataIndex: item,
                            key: item,
                            fontSize: 12,
                        })
                    } else {
                        intermediate.push({
                            title: mapping[item],
                            dataIndex: item,
                            key: item,
                            fontSize: 12,
                            render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
                        })
                    }
                }
                    } else {
                        content = {
                            title: mapping[item],
                            dataIndex: item,
                            key: item,
                            fontSize: 12,
                            render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
                        }
                    }
                }
            );
        intermediate.push(content)
        this.setState(
            {
                loading: true,
                detailed: true,
                simple: false,
                customState: true,
            });
        setTimeout(() => {

            this.setState({
                loading: false,
                visible: false,
                detailed: false,
                simple: false,
                customState: true,
                custom: intermediate
            });
        }, 1000);
    }
    handleCancel = () => {
        this.setState({visible: false});
    }


    sortData() {
        if (this.state.desc) {
            this.setState({
                desc: false,
                isClickSimple: false,
                isClickDetail: false,
                isClickSort: true,
                isClickCustom: false,
                sortState: "asc",
                sortIcon: "arrow-up"
            }, () => {
                this.setState({
                    currentPage: 1
                })
                this.props.changeSort(this.state.sortState)
            })

        } else {
            this.setState({
                desc: true,
                isClickSimple: false,
                isClickDetail: false,
                isClickSort: true,
                isClickCustom: false,
                sortState: "desc",
                sortIcon: "arrow-down"
            }, () => {
                this.setState({
                    currentPage: 1
                })
                this.props.changeSort(this.state.sortState)
            })

        }

    }

    confirm(record) {
        Modal.info({
            title: "短信内容详情",
            content: record.content,
            okText: "确认",
            cancelText: "取消"
        });
    }

    showCurDetail(record) {
        return {
            onDoubleClick: () => this.confirm(record)
        };
    }


    render() {
        const pageList = this.createPage();
        const {data, loading, getKey} = this.props;
        const {custom, isClickSimple, isClickDetail, isClickSort, isClickCustom} = this.state;
        if (data && typeof(data) !== "undefined" && data !== 0 && data !== []) {
            for (let i = 0; i < data.length; i++) {
                this.props.data[i]["contentAbs"] = this.props.data[i].content.slice(0, 10)
                this.props.data[i]["messageTime"] = moment(this.props.data[i].startTime * 1000).format("YYYY-MM-DD HH:mm:ss")

            }
        }

        const columns = [
            {
                title: "本机号码",
                dataIndex: "own_number",
                key: "own_number",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />

            },
            {
                title: "本机归属",
                dataIndex: "address",
                key: "address",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "本机IMSI",
                dataIndex: "own_imsi",
                key: "own_imsi",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "对端号码",
                dataIndex: "op_number",
                key: "op_number",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "对端归属",
                dataIndex: "op_address",
                key: "op_address",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "对端IMSI",
                dataIndex: "op_imsi",
                key: "op_imsi",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "发送时间",
                dataIndex: "messageTime",
                key: "messageTime",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "发送方号",
                dataIndex: "from",
                key: "from",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            },
            {
                title: "接收方号",
                dataIndex: "to",
                key: "to",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html:text}} />
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                fontSize: 12
            },
            {
                title: "短信内容",
                dataIndex: "contentAbs",
                key: "content",
                fontSize: 12,
                render: text => <pre dangerouslySetInnerHTML={{__html: text}} />
            }

        ];

        /*let page = $(".page").CustomPage({
            pageSize: 4,
            updateSelf: true,
            count: total,
            // callback: selected => {this.props.onChange(selected)}
            // callback: page => console.log(page)
            callback: page => this.change(page)
        });*/


        return (
            <div>
                <div style={{padding: "8px"}}>

                    <div style={{
                        background: '#073262',
                        padding: '10px',
                        borderStyle: "solid",
                        borderColor: "#5bbeff",
                        borderWidth: "1px"
                    }}>

                        <div style={{float: 'left'}} align="left">
                            <Button style={{
                                borderColor: "#5bbeff",
                                background: '#08244A',
                                color: isClickSimple ? "#0091A4" : "#fff"
                            }} onClick={this.showDefault.bind(this)}>概要模式</Button>
                            &nbsp;&nbsp;
                            <Popover content={content}><Button style={{
                                borderColor: "#5bbeff",
                                background: '#08244A',
                                color: isClickDetail ? "#0091A4" : "#fff"
                            }} onClick={this.showDetailed.bind(this)}>详细模式</Button>
                            </Popover>
                            &nbsp;&nbsp;
                            <Popover content={sortContent}>
                                <Button style={{
                                    borderColor: "#5bbeff",
                                    background: '#08244A',
                                    color: isClickSort ? "#0091A4" : "#fff"
                                }} onClick={this.sortData.bind(this)}>排序<Icon type={this.state.sortIcon}/></Button>
                            </Popover>
                            &nbsp;&nbsp;
                            <Button style={{
                                borderColor: "#5bbeff",
                                background: '#08244A',
                                color: isClickCustom ? "#0091A4" : "#fff"
                            }} onClick={this.showModal.bind(this)}>配置项</Button>
                            <Modal
                                visible={this.state.visible}
                                title="选择您想查看的内容"
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>返回</Button>,
                                    <Button key="submit" type="primary" loading={this.state.loading}
                                            onClick={this.handleOk}>
                                        提交
                                    </Button>,
                                ]}
                                className="modal_item"
                            >
                                <div>
                                    <CheckboxGroup onChange={this.handleChange.bind(this)} className="common_check">
                                        <Row className="check_row">
                                            <Col span={8} className="check_span">


                                                <Checkbox value="own_number">本机号码</Checkbox>

                                                <Checkbox value="own_imsi">本机IMSI</Checkbox>
                                                <Checkbox value="from">发送方号</Checkbox>
                                                <Checkbox value="address">本机归属</Checkbox>
                                            </Col>
                                            <Col span={8} className="check_span">

                                                <Checkbox value="op_number">对端号码</Checkbox>
                                                <Checkbox value="op_imsi">对端IMSI</Checkbox>
                                                <Checkbox value="to">接收方号</Checkbox>
                                                <Checkbox value="op_address">对端归属</Checkbox>
                                            </Col>
                                            <Col span={8} className="check_span">


                                                <Checkbox value="messageTime">发送时间</Checkbox>
                                                {/*<Checkbox value="endTime">接收时间</Checkbox>*/}
                                                <Checkbox value="content">短信内容</Checkbox>
                                            </Col>
                                        </Row>
                                    </CheckboxGroup>

                                    <Collapse accordion size="small" style={{marginTop: "-7px"}}>
                                        <Panel header={'高级配置'} key="1" className="custom_item_panel">
                                            <CheckboxGroup onChange={this.handleAdChange.bind(this)}>
                                                <Row className="check_row">
                                                    <Col span={8} className="check_span">

                                                        <Checkbox value="m_s">主从模式</Checkbox>
                                                        <Checkbox value="message_type">短信语种</Checkbox>
                                                        <Checkbox value="message_length">短信长度</Checkbox>
                                                        <Checkbox value="base_lon">基站经度</Checkbox>
                                                        <Checkbox value="up_apn_ambr">上行APN AMBR</Checkbox>
                                                        <Checkbox value="down_apn_ambr">下行APN AMBR</Checkbox>
                                                        <Checkbox value="sgw_sgsn_channel">SGW/SGSN控制隧道号</Checkbox>

                                                    </Col>
                                                    <Col span={8} className="check_span">
                                                        <Checkbox value="base_lat">基站纬度</Checkbox>
                                                        <Checkbox value="phone_type">手机型号</Checkbox>
                                                        <Checkbox value="g_number">4G基站号</Checkbox>
                                                        <Checkbox value="user_ip">用户ip地址</Checkbox>
                                                        <Checkbox value="route_sig">2/3G路由区标识</Checkbox>
                                                        <Checkbox value="tem_sig">3G终端服务区标识</Checkbox>
                                                        <Checkbox value="pgw_ggsn_channel">PGW/GGSN控制隧道号</Checkbox>


                                                    </Col>
                                                    <Col span={8} className="check_span">
                                                        <Checkbox value="keyword">关键字</Checkbox>
                                                        <Checkbox value="g_3g_4g_base">2/3/4G基站号</Checkbox>
                                                        <Checkbox value="mme_channel">MME控制隧道号</Checkbox>

                                                        <Checkbox value="temp_recog">临时客户识别码</Checkbox>
                                                        <Checkbox value="temp_sgsn">临时移动用户识别-SGSN</Checkbox>


                                                    </Col>
                                                </Row>
                                            </CheckboxGroup>
                                        </Panel>
                                    </Collapse>
                                </div>
                            </Modal>
                        </div>
                        <br/>
                        <div className="queryFrame">
                            {
                                this.state.simple && !this.state.customState ?
                                    (
                                        <List
                                            split={false}

                                            pagination={false}
                                            loading={loading}
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Row className="rowStyle">
                                                        <Col span={5} className="col_margin">
                                                            <br/>
                                                            <pre dangerouslySetInnerHTML={{__html: "本机号码："+item.own_number}} />
                                                            <pre dangerouslySetInnerHTML={{__html: "本机归属："+item.address}} />
                                                            <pre dangerouslySetInnerHTML={{__html: "本机IMSI："+item.op_imsi}} />
                                                        </Col>
                                                        <Col span={5} className="col_margin">
                                                            <br/>
                                                            <pre dangerouslySetInnerHTML={{__html: "对端号码："+item.op_number}} />
                                                            <pre dangerouslySetInnerHTML={{__html: "对端归属："+item.op_address}} />
                                                            <pre dangerouslySetInnerHTML={{__html: "对端IMSI："+item.op_imsi}} />

                                                        </Col>
                                                        <Col span={5} className="col_margin">
                                                            <br/>
                                                            <pre>类型: {item.type}</pre>
                                                            <pre dangerouslySetInnerHTML={{__html: "发送方号："+item.from}} />
                                                            <pre dangerouslySetInnerHTML={{__html: "发送时间："+moment(item.startTime * 1000).format("YYYY-MM-DD HH:mm:ss")}} />
                                                        </Col>
                                                        <Col span={5} className="col_margin">
                                                            <br/>
                                                            <pre dangerouslySetInnerHTML={{__html: "短信内容："+item.content}} />
                                                        </Col>
                                                    </Row>
                                                </List.Item>
                                            )}

                                        />

                                    )
                                    : (


                                        <Table
                                            className="detail_table"
                                            dataSource={data}
                                            pagination={false}
                                            loading={loading}
                                            columns={this.state.customState ? custom : columns}
                                            onRow={this.showCurDetail.bind(this)}
                                        />
                                    )
                            }

                        </div>
                        <div>
                            {/*<div className="page"/>*/}
                            <ul className="page-container">
                                {pageList}
                            </ul>
                            <BackTop/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
