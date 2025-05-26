import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';


export default function App () {
  return (
  <Layout>
    <AppHeader>Header</AppHeader>
    <Layout>
      <AppSider>Sider</AppSider>
      <AppContent>Content</AppContent>
    </Layout>
  </Layout>
      )
}
