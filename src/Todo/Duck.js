import React, { Component } from "react";
class Duck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  componentDidMount() {
    // Được gọi sau khi component đã render lần đầu tiên
    console.log("Component đã được mount");
    // this.setState({
    //   message: "Hello 2",
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component đã được cập nhật");
    //prevProps, prevState : 2 biến do React cung cấp
    // if (this.state.message !== prevState.message) {
    //   this.setState({
    //     message: "Hello 2",
    //   });
    // }
  }
  render() {
    return (
      <div>
        {console.log("Render")}
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default Duck;
