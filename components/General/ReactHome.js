import React from 'react'
import { Layout, Row, Col } from 'antd'
import './LandingPage.css'

const { Content } = Layout

const LandingPage = () => {
  return (
    <Content style={{ padding: '60px', backgroundColor: '#ffffff' }}>
      <div className="landing-container">
        <h1 className="landing-title">Welcome to the Crypto Platform</h1>
        <p className="landing-description">
          Step into the world of cryptocurrencies. The platform provides cutting-edge tools and data insights to help you navigate the market with confidence.

        </p>

        <h2 className="features-title">Amazing Features</h2>
        <Row gutter={[24, 24]} className="features-list">
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Asset Platforms</h3>
              <p>Access various platforms for your trading needs.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Trending Coins</h3>
              <p>Track the latest trending cryptocurrencies in the market.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Coin Listings</h3>
              <p>Explore comprehensive listings of all available cryptocurrencies.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Coin Detail View</h3>
              <p>Get in-depth information on individual coins.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Exchanges</h3>
              <p>Browse various exchanges for trading opportunities.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Exchange Rates</h3>
              <p>Check real-time cryptocurrency exchange rates.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="feature-item">
              <h3>Global Data</h3>
              <p>Access global cryptocurrency market data and insights.</p>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default LandingPage
