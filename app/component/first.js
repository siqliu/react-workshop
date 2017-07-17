import React from "react";
import ReactDom from 'react-dom';

class FirstComponent extends React.Component{
  render(){
    return <div>hello ,{this.props.message}</div>;
  }
}

ReactDom.render(<FirstComponent message="test" />, document.getElementById('app'));