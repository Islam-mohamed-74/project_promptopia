# 🚀 Promptopia - AI Prompts Sharing Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-6.19.0-green?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/NextAuth-4.24.11-purple?style=for-the-badge&logo=nextauth" alt="NextAuth" />
</div>

---

## 📖 Overview

Promptopia is an open-source AI prompting tool for the modern world to discover, create and share creative prompts. It's a community-driven platform where users can share their best AI prompts and discover new ones from other creators.

---

## ✨ Key Features

### 🔍 **Search & Discovery**

- Advanced search functionality for prompts by keywords
- Filter by tags and authors
- Clean and responsive user interface

### 📝 **Content Creation & Management**

- Easy prompt creation with intuitive forms
- Edit and update existing prompts
- Tag system for content organization

### 👤 **User System**

- Secure Google OAuth authentication
- User profiles and personal dashboards
- Track all published prompts per user

### 🎨 **Modern Design**

- Beautiful and responsive user interface
- Modern Glassmorphism design
- Mobile-first approach

---

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15.5.2** - React framework for production
- **React 19.1.0** - UI library
- **TailwindCSS 4.1.12** - CSS framework
- **PostCSS** - CSS processor

### **Backend & Database**

- **Next.js API Routes** - API endpoints
- **MongoDB 6.19.0** - Database
- **Mongoose 8.18.0** - MongoDB ODM

### **Authentication & Security**

- **NextAuth.js 4.24.11** - Authentication system
- **Google OAuth** - Login provider
- **bcrypt 6.0.0** - Password hashing

### **Development Tools**

- **Turbopack** - Fast bundler for development
- **Webpack** - Production bundler

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+
- MongoDB Atlas account or local MongoDB
- Google Cloud Console account (for OAuth)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/promptopia.git
cd promptopia
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the project**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open browser**
   Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📁 Project Structure

```
promptopia/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── prompt/               # Prompt CRUD operations
│   │   └── users/                # User management
│   ├── create-prompt/            # Create prompt page
│   ├── update-prompt/            # Update prompt page
│   ├── profile/                  # User profile pages
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── components/                   # React Components
│   ├── Feed.jsx                  # Main feed component
│   ├── Form.jsx                  # Prompt form
│   ├── Nav.jsx                   # Navigation
│   ├── Profile.jsx               # User profile
│   ├── PromptCard.jsx            # Individual prompt card
│   └── Provider.jsx              # Context provider
├── models/                       # Database Models
│   ├── propmt.js                 # Prompt schema
│   └── user.js                   # User schema
├── utils/                        # Utility functions
│   └── database.js               # Database connection
├── styles/                       # Global styles
│   └── globals.css               # TailwindCSS imports
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.js            # TailwindCSS config
└── next.config.js                # Next.js config
```

---

## 🔧 API Endpoints

### **Authentication**

- `POST /api/auth/[...nextauth]` - Google OAuth authentication

### **Prompts**

- `GET /api/prompt` - Get all prompts
- `POST /api/prompt/new` - Create new prompt
- `GET /api/prompt/[id]` - Get specific prompt
- `PATCH /api/prompt/[id]` - Update prompt
- `DELETE /api/prompt/[id]` - Delete prompt

### **Users**

- `GET /api/users/[id]/posts` - Get user's prompts

---

## 🎯 Usage

### **For Users**

1. Sign in using Google OAuth
2. Explore existing prompts on the homepage
3. Use the search bar to find specific prompts
4. Click on tags to search by category
5. Create new prompts from the "Create Prompt" page
6. Edit or delete your prompts from your profile

### **For Developers**

- Use `npm run dev` for development with Hot Reload
- Use `npm run build` to build the project for production
- Use `npm run start` to run the built version

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Name:** [Islam Mohamed]
**Email:** [email@example.com]
**GitHub:** [@Islam-mohamed-74](https://github.com/Islam-mohamed-74)
**LinkedIn:** [Islam Mohamed](https://www.linkedin.com/in/islam-mohamed-038240210/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - For the amazing framework
- [TailwindCSS](https://tailwindcss.com/) - For beautiful styling
- [MongoDB](https://www.mongodb.com/) - For reliable database
- [NextAuth.js](https://next-auth.js.org/) - For secure authentication

---

<div align="center">
  <p>Made with Islam using Next.js and React</p>
</div>
