import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class ReactSider extends Component {
  render () {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="80"
        width={260}
        style={{
          background: 'linear-gradient(145deg, #1f1f1f, #2c2c2c)',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
          color: '#fff'
        }}
      >
        <Menu
          mode="inline"
          selectedKeys={[this.props.sider_selected]}
          defaultOpenKeys={['menu-updates', 'menu-coins']}
          style={{
            height: '100%',
            backgroundColor: 'transparent',
            borderRight: 0,
            color: '#fff'
          }}
          theme="dark"
        >

          <SubMenu
            key="menu-updates"
            title={
              <span>
                <span className="menu-title">General</span>
              </span>
            }
          >
            <Menu.Item key="asset-platforms">
              <Link to="/asset-platforms">Asset Platforms</Link>
            </Menu.Item>
            <Menu.Item key="trending-coins">
              <Link to="/trending-coins">Trending Coins</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="menu-coins"
            title={
              <span>
                <span className="menu-title">Coins</span>
              </span>
            }
          >
            <Menu.Item key="coin-list">
              <Link to="/coins">Coin Listing</Link>
            </Menu.Item>
            <Menu.Item key="coin-detail">
              <Link to="/coins/bitcoin">Coin Detail View</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="menu-exchanges"
            title={
              <span>
                <span className="menu-title">Exchanges</span>
              </span>
            }
          >
            <Menu.Item key="exchanges-list">
              <Link to="/exchanges/list">Exchanges Listing</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="menu-exchange-rates"
            title={
              <span>
                <span className="menu-title">Exchange Rates</span>
              </span>
            }
          >
            <Menu.Item key="exchange-rates-list">
              <Link to="/exchange-rates">Exchange Rates Listing</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="menu-global"
            title={
              <span>
                <span className="menu-title">Global</span>
              </span>
            }
          >
            <Menu.Item key="global-main">
              <Link to="/global">Data</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sider_selected: state.sider_selected
  }
}

export default connect(mapStateToProps)(ReactSider)
