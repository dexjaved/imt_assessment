import React, { Component } from 'react';


class Cart extends Component {
  state = {
    article: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ article: data })
    })
    .catch(console.log)
  }
  render() {
    
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1> Json Data</h1>
        {this.state.article.map((article) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <h6 className="card-text">{article.body}</h6>
              <div> UsserId - {article.userId}</div> 
              Id - {article.id}

            </div>
          </div>

        ))}
        </div>
       </div>
    );
  }
}

export default Cart;
