import React from 'react';
import { Form, Input, DatePicker, Select, Button, message } from 'antd';
import { Inertia } from '@inertiajs/inertia';
import dayjs from 'dayjs';
import AdminLayout from '@/Layouts/AdminLayout'; // تأكد من المسار الصحيح

export default function AddUser() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const payload = {
      ...values,
      date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
    };
    Inertia.post('/users/store', payload, {
      onSuccess: () => {
        message.success('تمت إضافة المستخدم بنجاح');
        form.resetFields();
      },
      onError: () => message.error('فشل في إضافة المستخدم'),
    });
  };

  return (
    <AdminLayout>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // لملء الشاشة بالكامل
      background: '#fff',
    }}
  >
    <div style={{ width: '100%', maxWidth: 500 }}>
      <h2 style={{ marginBottom: 20, textAlign: 'center' }}>ADD USER</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'الاسم مطلوب' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'بريد صحيح مطلوب' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'كلمة المرور مطلوبة' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="date_of_birth" label="Date of birth" rules={[{ required: true, message: 'تاريخ الميلاد مطلوب' }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="user_type" label="User Type" rules={[{ required: true, message: 'الرجاء اختيار النوع' }]}>
          <Select
            options={[
              { label: 'مشرف (ADMIN)', value: 'ADMIN' },
              { label: 'عادي (STANDARD)', value: 'STANDARD' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
</AdminLayout>

  );
}
