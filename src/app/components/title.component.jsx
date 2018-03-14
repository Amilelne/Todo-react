import React, { Component } from 'react';

export class TitleComponent extends Component {
  render() {
    return <h1 className="title">{ this.props.children }</h1>
  }
}