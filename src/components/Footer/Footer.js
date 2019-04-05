import React, { Component } from 'react'
import './Footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <div className='Footer__main-container' >
                <div className='Footer__Linked_icons'>
                    <a className='Footer__Linked_icons__icon' href="https://t.me/UmbalaNetworkVietnam" target="_blank">
                        <i className='fab fa-telegram-plane' />
                    </a>
                    <a className='Footer__Linked_icons__icon' href="https://medium.com/umbalanetworkvn" target="_blank">
                        <i class="fab fa-medium-m"></i>
                    </a>
                    <a className='Footer__Linked_icons__icon' href="http://fb.com/UmbalaNetwork" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a className='Footer__Linked_icons__icon'href="https://twitter.com/UmbalaNetwork" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a className='Footer__Linked_icons__icon'href="https://www.linkedin.com/company/umbalanetwork/" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <p className='Footer__title'>
                    Copyright {'\u00A9'}  Umbala Network 2018
                </p>
            </div>
        )
    }
}
