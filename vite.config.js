import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(), // لتفعيل JSX و React بشكل صحيح
    ],
    resolve: {
        alias: {
            ziggy: '/vendor/tightenco/ziggy/dist',
            '@': path.resolve(__dirname, 'resources/js'), // 👈 تعريف المسار
        },
    },
    server: {
        host: 'localhost', // ← تأكد من هذا
        port: 5173, // ← تأكد من أن البورت غير مستخدم مسبقاً
    },
});
