import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SubscrideEmail.scss'
export default class SubscribeEmail extends Component {
    state = {
        emailValid: false,
        emailValidBubble: null,
        email: null,
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    onChangeEmail = (e) => {
        let email = e.target.value;
        this.setState({
            emailValid: this.validateEmail(email),
            email: email,

        })
    }
    submitEmail = (e) => {
        alert(e.target.value)
    }
    render() {
        return (
            <div className="subscribe-email" >
                <p className='subscribe-email__title'>
                    Get update from Umbala Network
                </p>
                <form id='subscription-form'
                    className='subscribe-email__email-input'
                    action='https://umbala.network/subscribe_umbala_network'
                    method='POST'

                >
                    <input className='subscribe-email__email-input__input'
                        name='email'
                        type='email'
                        placeholder="your@email.com"
                        value={this.state.email}
                        onChange={(e) => this.onChangeEmail(e)}
                    />
                    <button 
                    className={'subscribe-email__email-input__search-button' + (this.state.emailValid ? '' : ' disable')}
                    type='submit'
                    disabled={!this.state.emailValid}
                    >
                        <i class="input--arrow fas fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(SubscribeEmail)
