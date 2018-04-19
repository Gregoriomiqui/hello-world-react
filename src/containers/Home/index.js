// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static proptypes={
    isMobile:PropTypes.bool
  }
  render() {
    const { isMobile } = this.props;
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <p>

          {isMobile ? 'Mobile device':'Desktop device'}

        </p>

      </div>
    );
  }
}



export default connect(state=>({
  isMObile:state.device.isMobile
}),null)(Home);
