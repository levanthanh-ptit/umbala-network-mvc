export default class SubscriptionEmailModel {
    email = '';
    emailState = 'notValid';
    listeners = [];
    setEmail(value) {
        this.email = value;
        this.emailState = this.validateEmail(this.email) ? 'ready' : 'notValid';
    }
    onChange(callback) {
        this.listeners.push(callback)
    }
    emitChange() {
        for (var i in this.listeners) {
            this.listeners[i]();
        }
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendEmail() {
        console.log(this.emailState)
        if (this.emailState === 'notValid') return "email is not valid"
        else {
            this.emailState = 'sending'
            this.emitChange();
        }
        fetch('https://umbala.network/subscribe_umbala_network', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.email,
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then((responseJson) => {
            this.emailState = 'done'
            this.emitChange();
        }).catch((error) => {
            console.log(error)
        });
    }
}