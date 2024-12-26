import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  InfoCircleOutlined,
  GithubOutlined,
  AreaChartOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Header } = Layout

class ReactHeader extends Component {
  render () {
    const { selected } = this.props
    return (
      <Header className="header" style={headerStyle}>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selected]}
          style={menuStyle}
        >
          <Menu.Item
            key="home"
            onClick={() => this.props.setHeaderMenuItem('home')}
          >
            <Link to="/" style={linkStyle}>
              <HomeOutlined style={iconStyle} /> Home
            </Link>
          </Menu.Item>
          <Menu.Item
            key="dashboard"
            onClick={() => this.props.setHeaderMenuItem('dashboard')}
          >
            <Link to="/asset-platforms" style={linkStyle}>
              <AreaChartOutlined style={iconStyle} /> Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item
            key="about"
            onClick={() => this.props.setHeaderMenuItem('about')}
          >
            <Link to="/about" style={linkStyle}>
              <InfoCircleOutlined style={iconStyle} /> About
            </Link>
          </Menu.Item>
          <Menu.Item
            key="github"
          >
            <a href="https://github.com/harshitdabra" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <GithubOutlined style={iconStyle} /> GitHub
            </a>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

// Styling

const headerStyle = {
  background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)', // Sleek gradient background
  padding: '0 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
}

const menuStyle = {
  backgroundColor: 'transparent',
  lineHeight: '64px',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'justify-content-center'
}

const linkStyle = {
  color: '#fff',
  fontSize: '16px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.3s ease',
  textDecoration: 'none'
}

const iconStyle = {
  fontSize: '20px',
  marginRight: '8px',
  transition: 'color 0.3s ease'
}

// Hover effects
const hoverStyle = {
  ':hover': {
    color: '#00cec9' // Slight hover color for links
  }
}

// Redux connection for header state
const mapStateToProps = (state) => ({
  selected: state.header_selected
})

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactHeader)
