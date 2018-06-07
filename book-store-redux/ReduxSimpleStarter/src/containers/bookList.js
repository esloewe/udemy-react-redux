import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={ () => this.props.selectBook(book) }
                    className='list-group-item'
                    key={book.title}>
                    {book.title}
                    </li>
            )
        })
    }
    render()  {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}



function mapStateToProps(state) {
    console.log('state book list', state);
    return {
        books: state.books
    }
}


function mapDispatchToProps(dispatch) {
    //anything returned from this function will end up as props on the BookList container
   // whenever selectbook is called the results should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}


//promote bookList from a component to a container - it needs to know about this new dispatch method, selectbook to make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps )(BookList);