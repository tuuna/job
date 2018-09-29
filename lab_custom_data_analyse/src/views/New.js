import {hot} from 'react-hot-loader'
import Header from '../common/component/header/Header'
import {view as Home}  from './Home/index';
import UserPage from './UserPage/views'
import {view as CommunicTopo} from './CommunicTopo/index'
import {view as MapSignalling} from './MapSignalling/index'

import MessagePage from "./MessagePage/index";

import DataAnalyse from "./DataAnalyse/dataAnalysis";

import { Middlemen} from './middlemanRecommend'
// import MiddlemanAnalyze from './MiddlemanAnalyze/views/MiddlemanAnalyze'
import TargetMonitor from './WarningPage/TargetMonitor'
import AreaAnalyse from './WarningPage/AreaAnalyse'
import { SignalingTopology as SignTopology }from './SignalingTopology'
import {SmsAnalyze} from "./smsAnalyze"
import {view as CountAnalysis} from './CountAnalysis/index'

import React from "react";
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import createBrowserHistory from '../../node_modules/history/createBrowserHistory';

import "./new.css"

//-------------------------------------路由部分---------------.----------------------
//目标统计子路由
const targetCounts = () => <h3>wait to dev</h3>;
const targetCount = ({routes}) => (
      <div className="clearFix">
        {/* 二级导航 */}
        <ul className="navSecond">
            <li>
                <NavLink to="/targetCount/userMessage" activeClassName="selected" >用户信息</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/userTopology" activeClassName="selected" >用户通联拓扑分析</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/middlemanRecommend" activeClassName="selected" >中间人推荐</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/middlemanAnalysis" activeClassName="selected" >中间人分析</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/signTopology" activeClassName="selected" >信令点拓扑分析</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/messageAnalysis" activeClassName="selected" >短信规律分析</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/targetLine" activeClassName="selected" >目标线路走向分析</NavLink>
            </li>
            <li>
                <NavLink to="/targetCount/targetRoam" activeClassName="selected" >目标漫游分析</NavLink>
            </li>
        </ul>
        {/* 所有页面正文内容 */}
        <div className="content">
           {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
        </div>
    </div>);

//通用统计子路由
// const currencyCounts = () => <h3>通用统计,wait to dev</h3>;
const currencyCount = ({routes}) => (<div className="clear-fix">
    <ul className="navSecond">
        <li>
            <NavLink to="/currencyCount/countAnalysis" activeClassName="selected">统计分析</NavLink>
        </li>
        <li>
            <NavLink to="/currencyCount/signCount" activeClassName="selected">Map信令统计</NavLink>
        </li>
    </ul>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
</div>);

//监控预警
const MonitoringWarning = ({routes}) => (<div>
    <ul className="navSecond">
        <li>
            <NavLink to="/MonitoringWarning/targetMonitoring" activeClassName="selected">目标实时监控</NavLink>
        </li>
        <li>
            <NavLink to="/MonitoringWarning/targetArea" activeClassName="selected">区域实时分析</NavLink>
        </li>
    </ul>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
</div>);

//数据分析
const Analyse = ({routes}) => (<div>
    <ul className="navSecond">
        <li>
            <NavLink to="/dataAnalyse/dataAnalyse" activeClassName="selected">数据分析</NavLink>
        </li>
        <li>
            <NavLink to="#" >特色分析</NavLink>
        </li>
        <li>
            <NavLink to="#" >数据导出</NavLink>
        </li>
        <li>
            <NavLink to="#" >帮助</NavLink>
        </li>
    </ul>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
</div>);

//-----------------------------------------------组件部分-----------------------------------------------------
const routes = [
    //  目标统计组件
    {
        path: "/targetCount",
        component: targetCount,
        routes: [
          {
            path: "/targetCount/userMessage",
            component: UserPage,
        }, {
            path: "/targetCount/userTopology",
            component: CommunicTopo
        }, {
            path: "/targetCount/middlemanRecommend",
            component: Middlemen
        }, {
            path: "/targetCount/middlemanAnalysis",
            component: targetCounts
        }, {
            path: "/targetCount/signTopology",
            component: SignTopology
        },{
            path: "/targetCount/messageAnalysis",
            component: SmsAnalyze
        },{
            path: "/targetCount/targetLine",
            component: targetCounts
        },{
            path: "/targetCount/targetRoam",
            component: targetCounts
        }
        ]
    },
    //通用统计组件
    {
        path: "/currencyCount",
        component: currencyCount,
        routes:[
            {
                path: "/currencyCount/countAnalysis",
                component: CountAnalysis
            }, {
                path: "/currencyCount/signCount",
                component: MapSignalling
            }
        ]
    },
    //  监控预警组件
    {
        path: "/MonitoringWarning",
        component: MonitoringWarning,
        routes: [{
            path: "/MonitoringWarning/targetMonitoring",
            component: TargetMonitor
        }, {
            path: "/MonitoringWarning/targetArea",
            component: AreaAnalyse
        }]
    },
    //  短信检索
    {
        path: "/messageSearch",
        component: MessagePage,
    },
    // 数据分析
    {
        path: "/dataAnalyse",
        component: Analyse,
        routes:[
            {
                path: "/dataAnalyse/dataAnalyse",
                component: DataAnalyse
            }, {
                path: "#",

            }, {
                path:"#",
            }, {
                path:"#"
            }
        ]
    },

];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (<route.component {...props} routes={route.routes}/>)}
    />
);

const history = createBrowserHistory();
const New = () => (
    <Router histry={history}>
        <Router>
            <div style={{height:"100%",width:"100%"}}>
                <Header/>
                <Route path="/" component={Home} exact/>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
            </div>
        </Router>
    </Router>
);

export default hot(module)(New)
