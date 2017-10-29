import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

import RenderField from './template/RenderField';

class Login extends Component {

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

    componentWillUnmount() {
        this.props.clearError();
    }

    onFormSubmit(values){
        this.props.clearError();
        setTimeout(() => this.props.initLogin(values), 1250);
        this.setState({ loading: true });
    }
    
    renderButton(){
        return (
            (!this.state.loading) ? 
                (<span className="row">
                    <span className="auth--error text-danger small container">{this.props.err}</span>
                    <div className="col login--btn">
                        <button className="btn btn-primary form-control">Login</button>
                    </div>
                    <div className="col switch--signup--btn">
                        <Link className="btn btn-success form-control" to="/signup">Need SignUp?</Link>
                    </div>
                </span>
            ) : 
            (<div className="text-center"><i className="fa fa-spinner fa-spin fa-2x fa-fw fa-align-center" aria-hidden="true"></i></div>)
        )
    }

    renderMaster(){
        return (
            <div className="container">
                <h1 className="login--title">Two Way Auth</h1>
                <hr/>
                <form className="form-group" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <Field key='email' component={RenderField} type="email" label='Email' name='email' />
                    <Field key='password' component={RenderField} type="password" label='Password' name='password' />
                    {this.renderButton()}
                </form>
                <button className="form-control btn btn-danger google--btn" onClick={this.props.googleLogin}>Signin with Google</button>
                <button className="form-control btn btn-warning github--btn" onClick={this.props.gitLogin}>Signin with GitHub</button>
            </div>
                )
     }

    render() {
        return (
            <div className="login--container">
                {this.renderMaster()}
            </div>
            
        )
    }
}

const validate = (values) => {
    const errors = {};

    !values.email ? errors.email="Required" : undefined;
    !values.password ? errors.password="Required" : undefined;

    return errors;
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.errSignIn
    }
}

Login = connect(mapStateToProps,actions)(Login);

export default reduxForm({
    validate,
    form: 'loginForm',
})(Login);
