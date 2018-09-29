import React, { Component } from 'react';
import {Table} from 'antd';
class LocationDescribe extends Component {

    handleTableChange = (pagination, filters, sorter) => {
        this.props.onChange(pagination, filters, sorter);
    };

    render() {
        const {columns,data,size,pagination,loading,rowKey}=this.props;
        return(
			<div>
				<Table  rowKey={rowKey || 'key'} columns={columns}  dataSource={data} size={size} pagination={pagination} loading={loading}
						onChange={this.handleTableChange} />
			</div>
        );
    }

}

export default LocationDescribe;