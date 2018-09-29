import React from "react";
// import ReactDOM from "react-dom";
import SequenceDiagram from "react-sequence-diagram";



const input =
  'Andrew->China: 我爱你\n' +
  'Note right of China: China thinks\\nabout it\n' +
  'China-->Andrew: How are you?\n' +
  'Andrew->>China: I am good thanks!';

const options = {
  // theme: 'hand'
  theme: 'simple'
};



export default class MiddlemanAnalyze extends React.PureComponent {
  // componentDidMount() {
  //   var dom = ReactDOM.findDOMNode(this.refs.diagram);
  //   //var diagram = dom.parse("A->B: Message");
  //   dom.drawSVG("A->B: Message", { theme: "hand" });
  // }
  //

  onError(error) {
    console.log(error);
  }

  render() {
    return (
      <SequenceDiagram input={input} options={options} onError={this.onError()} />
    );
  }
}
