import React, { Component } from "react";
import "./style.css";
import SearchBox from "../SearchBox";

class PageHeader extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Search Employees Names</p>
        <p className="lead">Click the table header to sort names</p>
        <hr className="my-4" />
        <SearchBox handler={this.props.handler} />
      </div>
    );
  }
}

export default PageHeader;
