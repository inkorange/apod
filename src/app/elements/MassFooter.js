import React from 'react'
import { Icon } from './Icon';

export class MassFooter extends React.Component {

    static defaultProps = {
        submitURL: '/api/submitContact.php',
    }

    constructor(props) {
        super(props);
        this.state = {
            firstnameError: null,
            lastnameError: null,
            emailError: null,
            messageError: null,
            loading: false,
            loadMessage: ''
        };
        this.submitForm = this.submitForm.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.successForm = this.successForm.bind(this);
        this.failedForm = this.failedForm.bind(this);

    }

    clearForm() {
        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('company').value = "";
        document.getElementById('message').value = "";
        document.getElementById('address').value = "";
        document.getElementById('city').value = "";
        document.getElementById('state').value = "";
    }

    submitForm() {
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let company = document.getElementById('company').value;
        let message = document.getElementById('message').value;
        let address = document.getElementById('address').value;
        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;
        let firstnameError = null;
        let lastnameError = null;
        let emailError = null;
        let messageError = null;
        let hasError = false;

        if(firstname === "") {
            firstnameError = "Please supply a first name.";
            hasError= true;
        }
        if(lastname === "") {
            lastnameError = "Please supply a last name.";
            hasError= true;
        }
        if(email === "") {
            emailError = "Please supply an email.";
            hasError= true;
        } else if(!(this.validateEmail(email))) {
            emailError = "Please supply a valid email.";
            hasError= true;

        }
        if(message === "") {
            messageError = "Please supply a message.";
            hasError= true;
        }
        if(!hasError) {
            let payload = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                address: address,
                message: message,
                company: company,
                city: city,
                state: state
            };
            this.setState({
                loading: true,
                loadMessage: 'Sending Inquiry...'
            });
            $.ajax({
                type: "POST",
                url: this.props.submitURL,
                data: JSON.stringify(payload),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.successForm,
                failure: this.failedForm
                })
                .done(this.successForm)
                .fail(this.failedForm);
/*
            fetch(this.props.submitURL, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(payload)
            })
                .then(function(response) {
                    console.log(response.json());
                    return response.json();
                })
                .then((Obj) => {
                    console.log(Obj);
                    this.setState({
                        loadMessage: 'Success'
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                loading: false
                            });
                            this.clearForm();
                        }, 2000);
                    });
                })
                .catch((e) => {
                    console.log(e);
                    this.setState({
                        loadMessage: 'There was a problem with your submission. Please try again later.'
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                loading: false
                            });
                        }, 4000);
                    });
                });
                */
        }
        this.setState({
            firstnameError: firstnameError,
            lastnameError: lastnameError,
            emailError: emailError,
            messageError: messageError
        })
    }

    successForm() {
        console.log('success!');
        this.setState({
            loadMessage: 'Success'
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                });
                this.clearForm();
            }, 2000);
        });
    }

    failedForm() {
        console.log('failed!!');
        this.setState({
            loadMessage: 'There was a problem with your submission. Please try again later.'
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 4000);
        });
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        let statesDOM = [];
        states.map(s => {
            statesDOM.push(
                <option key={s} value={s}>{s}</option>
            )
        });

        let meta = '{"@context": "http://schema.org","@type": "Organization","url": "http://www.midatlanticss.com/home#contact","name": "Mid-Atlantic Strategic Solutions","contactPoint": {"@type": "ContactPoint", "address": "100 Pine St., Suite 400, 4th Floor Harrisburg, PA 17113", "telephone": "+1-717-857-6435", "contactType": "Customer service"}}';

        return (
            <footer className="AppFooter">
                <img className="contact_image" src="images/contact_bg.jpg" />
                <section id="contact">
                    <div className="content">
                        <h3>CONTACT MASS</h3>
                        <p>Please fill out the form below, with a brief description of your inquiry and our staff will get back to you as soon as possible.</p>
                        <div className={"contact_form " + (this.state.loading ? "loading" : "")}>
                            <div>
                                <label className={this.state.firstnameError ? 'error' : ''}>First Name*<span>{this.state.firstnameError}</span></label>
                                <input className={this.state.firstnameError ? 'error' : ''} id="firstname" type="text"/>
                                <label className={this.state.lastnameError ? 'error' : ''}>Last Name*<span>{this.state.lastnameError}</span></label>
                                <input className={this.state.lastnameError ? 'error' : ''}id="lastname" type="text"/>
                                <label>Company</label>
                                <input id="company" type="text"/>
                                <label>Street Address</label>
                                <input id="address" type="text"/>
                                <div className="form_2column">
                                    <div style={{width: '60%'}}>
                                        <label>City</label>
                                        <input id="city" type="text"/>
                                    </div>
                                    <div style={{width: '39%', marginLeft: '1%'}}>
                                        <label>State</label>
                                        <select id="state"><option value="">--</option>{statesDOM}</select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className={this.state.emailError ? 'error' : ''}>Email Address*<span>{this.state.emailError}</span></label>
                                <input className={this.state.emailError ? 'error' : ''} id="email" type="text"/>
                                <label className={this.state.messageError ? 'error' : ''}>Brief Message*<span>{this.state.messageError}</span></label>
                                <textarea className={this.state.messageError ? 'error' : ''} id="message"></textarea>
                                <button type="submit" onClick={this.submitForm}>SUBMIT INQUIRY</button>
                            </div>
                            <div className="sending_message">{this.state.loadMessage}</div>
                        </div>
                        <script type="application/ld+json">
                            {meta}
                        </script>
                        <p>Mid-Atlantic Strategic Solutions</p>
                        <p>100 Pine St., Suite 400, 4th Floor</p>
                        <p>Harrisburg, PA 17113</p>
                        <p>email: <a href="mailto:contact@midatlanticss.com">contact@midatlanticss.com</a></p>
                        <p>office: 717-857-6435</p>
                        <div className="social">
                            <a href="https://twitter.com/MidAtlanticSS"><Icon iconid="twitter"  size="30px" color="white" /></a>
                            <a href="https://www.linkedin.com/company/midatlanticss/"><Icon iconid="linkedin"  size="30px" color="white" /></a>
                            <a href="https://www.facebook.com/midatlanticss/"><Icon iconid="facebook" size="30px" color="white" /></a>
                            <a href="https://www.instagram.com/midatlanticss"><Icon iconid="instagram"  size="30px" color="white" /></a>
                        </div>
                    </div>
                </section>
                <div className="eng_by"><img src="/images/ioLogoWhite.svg"/> <a href="http://inkorange.com/" target="_blank">Engineered by inkOrange</a></div>
            </footer>
        )
    }
}

const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
];
