import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd'

class MyTable extends React.PureComponent {
  render() {
    const {
      columns,total, result, loading,size
    } = this.props
    let size_1 ="default"
    if (size==="small" || size==="middle"){
      size_1=size
    }
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
      <Table
        dataSource={result}
        loding={loading}
        // size="middle"
        columns={columns}
        pagination={pagination}
        rowKey={(r, i) => (i)}
        size={size_1}
      />
    </div>);
  }
}

MyTable.propTypes = {
  total: PropTypes.number.isRequired,
  result: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  size:PropTypes.string
};

export default MyTable;
