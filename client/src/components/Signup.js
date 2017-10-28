import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

import RenderField from './template/RenderField';

class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: false
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        !nextProps.err ? undefined : this.setState({ loading: false })
    }

    onFormSubmit(values){
        this.props.clearError();        
        this.props.initSignUp(values);
        this.setState({ loading: true });
    }
    
    renderButton(){
        return (
            (!this.state.loading) ? 
                (<span className="row">
                    <span className="auth--error text-danger container small">{this.props.err}</span>
                    <div className="col">
                        <button className="btn btn-primary form-control">SignUp</button>
                    </div>
                    <div className="col">
                        <Link className="btn btn-success form-control" to='/'>Want To SignIn?</Link>
                    </div>
                </span>
                ) :
            (<i className="fa fa-spinner" aria-hidden="true"></i>)
        )
    }

    renderMaster(){
         return (
             <div className="container">
                 <h1 className="signup--title">Two Way Auth</h1>
                 <hr />
                 <form className="form-group" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                     <Field key='email' component={RenderField} type="email" label='Email' name='email' />
                     <Field key='password' component={RenderField} type="password" label='Password' name='password' />
                     <Field key='confirm' component={RenderField} type="password" label='Confirm' name='confirm' />
                     {this.renderButton()}
                 </form>
             </div>
                )
        }
    

    render() {
        return (
            <div className="signup--container">
                {this.renderMaster()}
            </div>
            
        )
    }
}

const validate = (values) => {
    const errors = {};

    !values.email ? errors.email="Required" : undefined;
    !values.password ? errors.password="Required" : undefined;
    !values.confirm ? errors.confirm="Required" : ((values.confirm !== values.password) ? errors.confirm="Confirm Password Not Match" : undefined);

    return errors;
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.errSignUp
    }
}

Signup = connect(mapStateToProps,actions)(Signup);

export default reduxForm({
    validate,
    form: 'signupForm',
})(Signup);
