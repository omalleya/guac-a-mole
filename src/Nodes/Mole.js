import React from 'react';

export default class Mole extends React.Component {
  render() {
    return <img src={this.props.source} key={this.props.index} onClick={this.props.moleClick} alt="hole" width="100" height="100" />;
  }
}
