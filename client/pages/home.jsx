import React, { Component } from 'react'
import BigButton from '../components/big-button'
import MedButton from '../components/med-button'
import { Container, Row, Col } from 'reactstrap'
import requireAuth from '../../services/require-auth'

export default class Home extends Component {
  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs='12' style={{ marginTop: '2rem' }}>
            <BigButton
              content='/images/logo.png'
              color='blue'
              link='/home'
              image={true}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '2rem' }}>
          <Col xs='6'>
            <MedButton
              link='/upload'
              color='purple'
              subheading='Upload'
              icon='upload'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/discover'
              color='purple'
              subheading='Discover'
              icon='discover'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/library'
              color='purple'
              subheading='Library'
              icon='library'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/account'
              color='purple'
              subheading='Account'
              icon='account'
            />
          </Col>

        </Row>
      </Container>
    )
  }
}
