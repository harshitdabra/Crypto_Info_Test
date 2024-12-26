import React, { Component } from 'react'
import { Layout, Typography, List } from 'antd'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Title, Paragraph } = Typography

class AboutPage extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('about')
  }

  render () {
    // Define the purpose and challenges for the new About page
    const challenges = [
      'Integrating multiple third-party APIs efficiently.',
      'Managing state and component structure in a scalable way.',
      'Ensuring responsiveness across all device sizes.',
      'Creating reusable UI components for future projects.',
      'Improving user experience with seamless navigation and design.'
    ]

    return (
      <Layout style={{ padding: '2rem', backgroundColor: '#f0f2f5' }}>
        <Content style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2}>About This Application</Title>

          <Paragraph>
            This application was developed as part of an ongoing effort to enhance skills in React, API integration, and responsive design. It uses a modern UI framework for a clean and intuitive interface while focusing on building reusable and scalable components.
          </Paragraph>

          <Title level={3}>Project Purpose</Title>
          <Paragraph>
            The core purpose of this project is to explore advanced frontend development practices, specifically focusing on efficient state management, seamless user experiences, and API-driven functionality. It was also a learning experience in building more complex interfaces using best practices in modern web development.
          </Paragraph>

          <Title level={3}>Key Features</Title>
          <Paragraph>
            This application includes several advanced features, such as real-time data fetching, dynamic routing, and optimized component rendering. The UI is built to be highly responsive, adapting seamlessly to various screen sizes and devices.
          </Paragraph>

          <Title level={3}>Development Challenges</Title>
          <Paragraph>
            Throughout the development of this application, several challenges were faced and overcome, contributing to both the technical and conceptual growth of the project. Below are some key challenges:
          </Paragraph>

          <List
            size="medium"
            bordered
            dataSource={challenges}
            renderItem={(challenge) => <List.Item>{challenge}</List.Item>}
          />
        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(AboutPage)
