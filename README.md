# 🏋️ Elevate Fitness

![Elevate Fitness Banner](./public/banner.png)

> **Elevate Fitness** is a premium, high-conversion gym website built for the modern fitness industry. Featuring a minimalist aesthetic, localized content for India (Gorakhpur), and a robust admin dashboard.

---

## 🚀 Features

-   **🎨 Premium Aesthetic**: Minimalist design with `Tailwind CSS v4` and `Framer Motion` animations.
-   **🇮🇳 Localization**: Content fully adapted for the Indian market (Currency: ₹, Local Trainers, Hinglish Reviews).
-   **🔐 Authentication**: Secure User & Admin login via `Clerk` and Custom Middleware.
-   **💳 Payments**: Demo Checkout flow with Mock Payment Gateway and Invoice generation.
-   **📊 Admin Dashboard**: Manage Leads, Schedule, and Plans from a secure backend.
-   **📱 Mobile First**: Fully responsive design for all devices.

## 📸 Screenshots

| Home Page | Admin Dashboard |
| :---: | :---: |
| ![Home Page](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop) | ![Admin Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop) |
| *Premium Landing Page* | *Analytics & Management* |

| Class Schedule | Checkout Flow |
| :---: | :---: |
| ![Classes](https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1475&auto=format&fit=crop) | ![Checkout](https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1470&auto=format&fit=crop) |
| *Interactive Timetable* | *Secure Payment Demo* |


## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Database**: [MongoDB Atlas](https://www.mongodb.com/)
-   **Authentication**: [Clerk](https://clerk.com/) + Custom Middleware
-   **Icons**: [Lucide React](https://lucide.dev/)

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Axshatt/ElevateFitness.git
cd ElevateFitness
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
MONGODB_URI=mongodb+srv://...
```

### 4. Run the Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site!

---

## 🔐 Admin Access

-   **URL**: `/admin/login`
-   **Username**: `admin`
-   **Password**: `admin`

---

Built with ❤️ by **Akshat Singh**
