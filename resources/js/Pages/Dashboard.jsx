import React from 'react';
import { Card } from 'antd';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ standardUserCount }) {
  return (
    <AdminLayout>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
 <Card
  title={
    <div style={{ textAlign: 'center', width: '100%' }}>
      إحصائيات عامة
    </div>
  }
  style={{ maxWidth: 400, width: '100%' }}
>
  <p style={{ textAlign: 'center' }}>
    عدد المستخدمين العاديين: <strong>{standardUserCount}</strong>
  </p>
</Card>

</div>

    </AdminLayout>
  );
}
