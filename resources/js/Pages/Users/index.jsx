import React, { useEffect } from 'react';
import { Table, Button, Popconfirm, Space, message } from 'antd';
import { router, usePage, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Users() {
  const { users, flash } = usePage().props;

const { props } = usePage();
useEffect(() => {
  if (props.flash?.success) {
    message.success(props.flash.success);
  }
}, [props.flash]);

  const handleDelete = (id) => {
    router.delete(route('users.destroy', id), {
      onSuccess: () => message.success('تم حذف المستخدم'),
    });
  };

  const columns = [
    { title: 'الاسم', dataIndex: 'name' },
    { title: 'البريد الإلكتروني', dataIndex: 'email' },
    { title: 'النوع', dataIndex: 'user_type' },
    {
      title: 'الإجراءات',
      render: (_, record) => (
        <Space>
          <Popconfirm title="هل أنت متأكد؟" onConfirm={() => handleDelete(record.id)}>
            <Button danger>حذف</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>

      <Table
        columns={columns}
        dataSource={users.data}
        rowKey="id"
        pagination={{
          current: users.current_page,
          pageSize: users.per_page,
          total: users.total,
          onChange: (page) => {
            router.get(route('users.index'), { page }, { preserveScroll: true });
          },
        }}
      />
    </AdminLayout>
  );
}
