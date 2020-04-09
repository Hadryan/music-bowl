import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import BigButton from '../components/big-button'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    console.log(this.state)
  }

  handleChange({target: { name, value} }) {
    this.setState({[name]: value}, () => console.log(this.state))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs='12'>
            <BigButton
              content='/images/logo.png'
              color='blue'
              link={'/'}
              image={true}
            />
            <div className="form-container">
              <form id="loginForm" className="mx-auto text-center mt-5">
                <input
                name="username"
                onChange={this.handleChange}
                placeholder="Username"
                className="mt-4"
                />
                <input
                name="password"
                type="password"
                onChange={this.handleChange}
                placeholder="Password"
                className="mt-4 mb-4"
                />
              </form>
              <div className="swirl-button" onClick={this.handleSubmit}>
                Login
              </div>
            </div>
          </Col>
        </Row>
        <style jsx>
          {
            `
            #loginForm {
             background-image: url('/images/purp-swirl.png');
             width: 307px;
             border-radius: 16px;
            }
            .swirl-button {
              background-image: url('/images/blue-swirl.png');
            }
            input {
              width: 240px;
              padding: 12px;
              border-radius: 7px;
              font-size: 1.2rem;
              border-style: none;
            }
            `
          }
        </style>
      </Container>
    )
  }
}