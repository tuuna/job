import React from 'react';

class SignallingDetail extends React.PureComponent {

  render() {
    let a = this.props.data[0]
    return (<div>
      <a>IMSI:{a.imsi}</a>
      <a>本机号码:{a.towardnumber}</a>
    </div>);
  }
}

export default SignallingDetail;
