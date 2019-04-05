import React, { Component } from 'react'
import SubscriptionPage from '../views/SubscriptionPage'
export default class SubcriptionMailController extends Component {
    componentDidMount() {
        const { model } = this.props;      
        model.onChange(() => this.forceUpdate());
    }

    onChange = (e) => {
        const { model } = this.props;
        model.setEmail(e.target.value);
        model.emitChange();
    }
    sendEmail = () =>{
        const { model } = this.props;
        var value = model.sendEmail();
        alert(value);
    }
    render() {
        var {model} = this.props
        return (
            <SubscriptionPage  
            email = {model.email}
            emailState = {model.emailState}
            onChangeEmail = {this.onChange}
            sendEmail = {this.sendEmail}
            />
        )
    }
}
