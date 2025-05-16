# 🛠️ Admin Back Office - User Management System

This is a full-featured admin back office built with **Laravel 11**, **React**, **Inertia.js**, **Ant Design**, and **Docker**. It allows an administrator to manage users, view statistics, and access a rich set of API endpoints for data analysis.

---

## 🚀 Features

- ✅ **Authentication**
  - Admin login (only users of type `ADMIN` can access the back office)
  - Admin credentials:  
    **Email:** `admin@something.com`  
    **Password:** `password`

- 📊 **Dashboard**
  - Displays total number of standard users.

- 👥 **User Management**
  - List users with pagination (15 per page)
  - Add new users
  - Delete existing users
  - View users with type and date of birth

- 🔎 **Advanced Filtering**
  - Search users by keyword (name or email)

- 📈 **Statistics APIs**
  - Get pairs of users whose ages sum up to a given number
  - Get age distribution grouped by age ranges (e.g., 15–30, 31–45)

---

## ⚙️ Tech Stack

- **Laravel 11** (Backend)
- **React.js** + **Ant Design** + **Inertia.js** (Frontend)
- **Docker** (Environment)
- **MySQL** (Database)
- **Faker** (Data Seeding)

---

## 🧪 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Get list of users with pagination & keyword filtering |
| `GET` | `/api/users/pairs/{sum}` | Get user pairs whose ages sum up to a number |
| `GET` | `/api/users/age-distribution` | Get age distribution of users grouped in ranges |

Example:
```bash
GET /api/users?page=1&keyword=kata
GET /api/users/pairs/54
GET /api/users/age-distribution

- ✅ **⚙️ Environment Setup**
## 1. Clone the repository
`git clone https://github.com/moulayghaitaoui/UserManagementSystem.git`
`cd UserManagementSystem`
##  2. Copy and configure environment variables
`cp .env.example .env`
## 3. Start Docker containers
`docker-compose up -d --build`
##  4. Install dependencies
`docker exec -it laravel_app bash`
`apt update && apt install -y default-mysql-client`
##  5. Run migrations
`php artisan migrate`
##  6. (Optional) Seed test users
`php artisan db:seed`
