import React, { PureComponent } from 'react'
import SubscribeEmail from '../components/SubscribeEmail/SubscribeEmail'
import Footer from '../components/Footer/Footer'
import './SubscriptionPage.scss'

export default class SubscriptionPage extends PureComponent {
    render() {
        return (
            <div className="App">
                <SubscribeEmail
                    email={this.props.email}
                    emailState={this.props.emailState}
                    onChangeEmail={this.props.onChangeEmail} 
                    sendEmail={this.props.sendEmail}
                    />
                <Footer />
            </div>
        )
    }
}
