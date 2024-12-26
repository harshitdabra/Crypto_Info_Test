import React from 'react'
import { Layout } from 'antd'
import { FacebookOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Footer } = Layout

export default function CustomFooter () {
  return (
    <Footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.topSection}>
          <p style={styles.text}><strong>Harshit Dabra</strong></p>
        </div>

        <div style={styles.socialLinks}>
          <a
            href="https://github.com/harshitdabra"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <GithubOutlined />
          </a>
          <a
            href="https://x.com/harshit_dabra"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitdabra/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <LinkedinOutlined />
          </a>
        </div>

      </div>
    </Footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '40px 0',
    textAlign: 'center',
    borderTop: '1px solid #eaeaea',
    color: '#333'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  topSection: {
    marginBottom: '20px'
  },
  text: {
    margin: '5px 0',
    fontSize: '18px',
    color: '#666'
  },
  socialLinks: {
    marginBottom: '20px'
  },
  icon: {
    color: '#333',
    backgroundColor: '#eaeaea',
    margin: '0 10px',
    padding: '10px',
    borderRadius: '50%',
    fontSize: '20px',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  iconHover: {
    color: '#fff',
    backgroundColor: '#1890ff'
  }
}
