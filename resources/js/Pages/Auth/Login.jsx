import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { router } from '@inertiajs/react';

export default function Login({ errors = {} }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    setSubmitting(true);
    router.post('/login', values, {
      onFinish: () => setSubmitting(false),
    });
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '100px auto',
        padding: 24,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Admin Login</h2>
      {errors?.email && (
        <Alert
          message={errors.email}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input placeholder="admin@something.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitting} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
