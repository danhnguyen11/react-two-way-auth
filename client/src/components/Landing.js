import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Landing extends Component {
    state = { 
        quote: null,
        author: null
    }

    componentWillMount(){
        this.props.fetchQuote();
    }

    componentWillReceiveProps({ quote }){
       this.setState({ quote: quote.content, author: quote.author })
    }

    renderQuote(quote,author){
        if(quote && author)
            return (
                <blockquote className="blockquote">
                    <p className="mb-0 quote--text">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
          )
    }


    render() {
    return (
        <div className="container">
            <h3>Welcome To Two-Way-Auth: "<span className="text-white"><strong>{this.props.email}</strong></span>"</h3> 
            <p>Here is your quote:</p>
            {this.renderQuote(this.state.quote,this.state.author)}
            <button
                className="btn btn-warning"
                onClick={() => this.props.initLogout()}
            >
                Logout
            </button>
        </div>
    )
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.user.email,
    quote: state.quoteReducer.quote
})

export default connect(mapStateToProps,actions)(Landing);
