import React, { useEffect } from 'react';
import { Table, Button, Popconfirm, Space, message } from 'antd';
import { router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js'
import AdminLayout from '@/Layouts/AdminLayout';

export default function Users() {
  const { users, flash } = usePage().props;

  useEffect(() => {
    if (flash?.success) {
      message.success(flash.success);
    }
    if (flash?.error) {
      message.error(flash.error);
    }
  }, [flash]);

const handleDelete = (id) => {
  router.delete(route('users.destroy', { user: id }), {
    onSuccess: () => message.success('تم حذف المستخدم بنجاح'),
    onError: () => message.error('حدث خطأ أثناء الحذف'),
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
          <Popconfirm
            title="هل أنت متأكد من حذف المستخدم؟"
            onConfirm={() => handleDelete(record.id)}
            okText="نعم"
            cancelText="لا"
          >
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
