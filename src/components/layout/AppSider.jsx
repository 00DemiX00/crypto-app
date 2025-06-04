import { Layout, Card } from 'antd';

const siderStyle = {
padding: '1rem'
};

export default function AppSider() {
    return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </Layout.Sider>)
}