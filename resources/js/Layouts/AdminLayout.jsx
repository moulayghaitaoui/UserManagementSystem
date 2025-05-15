import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, router, usePage } from '@inertiajs/react';

const { Header, Sider, Content, Footer } = Layout;

export default function AdminLayout({ children }) {
  const { component } = usePage();

  const handleLogout = () => {
    router.post('/logout');
  };

  const current = component?.split('/').pop()?.toLowerCase();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider breakpoint="lg" collapsedWidth="0" theme="dark">
        <div style={{ color: '#fff', textAlign: 'center', padding: 20, fontSize: 18 }}>
          Developatic
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          items={[
            {
              key: 'dashboard',
              icon: <BarChartOutlined />,
              label: <Link href="/dashboard">إحصائيات</Link>,
            },
            {
              key: 'users',
              icon: <UserOutlined />,
              label: <Link href="/users">المستخدمون</Link>,
            },
            {
              key: '/users/create',
              icon: <UserOutlined />,
              label: <Link href="/users/create">إضافة مستخدم</Link>,
            },
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              label: 'تسجيل الخروج',
              onClick: handleLogout,
            },
          ]}
        />
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
      <Header style={{ background: '#4096ff', padding: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <h1 style={{ color: '#fff', margin: 0 }}>Dashboard</h1>
</Header>


        {/* Page Content */}
        <Content style={{ margin: '16px', padding: 24, background: '#fff' }}>
          {children}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>
          Developatic Admin ©2025
        </Footer>
      </Layout>
    </Layout>
  );
}
