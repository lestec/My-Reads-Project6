import React from 'react'
import Books from './Books'
//adding componentDidMount to check
//then below gonna render some bk components vs list of books
class BkShelf extends React.Component {
 componentDidMount() {
   console.log(this);
 }
  
  render() {
    return (
        <div className="bookshelf">
        	<h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
            	<ol className="books-grid">
					{
                      this.props.books.map((book, key) => <Books updateBook={this.props.updateBook} book={ book } key={key}/> ) 
                    } 
                </ol>
               </div>
              </div>
              
      );
 }
}


export default BkShelf;