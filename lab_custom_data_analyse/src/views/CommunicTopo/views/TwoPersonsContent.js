import React from 'react';
import { Tabs} from 'antd';
// import TwoPersonsPhone from "./TwoPersonsPhone";
import TwoPersonsTable from "./TwoPersonsTable";

import "./style.css";

const TabPane = Tabs.TabPane;


class TwoContentShow extends React.PureComponent {
    render() {
        return(
            <div >
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="通信详情" key="1">
                        <TwoPersonsTable/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
    callback=(key)=>{
        console.info("key",key)
    }
}
export default TwoContentShow;
