// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Actions
import * as action from './action';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component{
    constructor(props){
      super(props);

    }

  static proptypes={
    loadBooks:PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array

  };

  render(){
    const { loadBooks, book, books} = this.props;
    return(
      <div className="Libreria">
        <h2>Libreria</h2>
      </div>
    );
  }

}


export default connect(state=>({
  books:state.library.books,
  book:state.library.book
}),action )(Library);
