import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SubscribeEmail.scss'
export default class SubscribeEmail extends PureComponent {
    static propTypes = {
        emailState: PropTypes.string,
        onChangeEmail: PropTypes.func,
        sendEmail: PropTypes.func,
        email: PropTypes.string,
    }
    render() {
        const emailState = this.props.emailState;
        return (
            <div className="subscribe-email" >
                <p className='subscribe-email__title'>
                    Get update from Umbala Network
                </p>
                <div id='subscription-form'
                    className='subscribe-email__email-input'
                >
                    <input className='subscribe-email__email-input__input'
                        name='email'
                        type='email'
                        placeholder="your@email.com"
                        value={this.props.email}
                        onChange={(e) => this.props.onChangeEmail(e)}
                    />
                    <div className="subscribe-email__email-input__right-box">
                        {(emailState !== 'sending' && emailState !== 'done') && <div
                            className={'button' + (emailState === 'ready' ? '' : ' disable')}
                            onClick={this.props.sendEmail}
                            disabled={!this.props.emailValid}
                        >
                            <i className="input--arrow fas fa-arrow-right"></i>
                        </div>}
                        {(emailState === 'sending' || emailState === 'done') && <div className={"circle" + (emailState === 'done' ? " load-complete" : "")}></div>}
                        {(emailState === 'done') && <div className="checkMarkBox">
                            <div className="checkMark" />
                        </div>}
                    </div>



                </div>
            </div>
        )
    }
}