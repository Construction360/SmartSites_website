# SmartSites - AI-Powered Construction Monitoring

This repository contains the source code for the SmartSites website, a modern, responsive landing page for an AI-powered construction monitoring platform. The site is built with React and Vite, featuring a sleek, dark/light theme design and component-based architecture.

## ✨ Key Features

* **Modern & Responsive Design**: A beautiful, single-page layout that looks great on all devices, from mobile phones to desktops.
* **Component-Based Architecture**: Built with React, the UI is split into logical, reusable components for easy maintenance and scalability.
* **Dark/Light Theme**: Includes a theme toggler that allows users to switch between a dark and light mode, with preferences saved to local storage.
* **Smooth Scrolling & Animations**: Implements smooth scrolling for navigation and subtle CSS animations for a polished user experience.
* **External Widget Integration**: Includes an integration with Calendly for scheduling calls and demos via a popup widget.

## 🚀 Tech Stack

* **Frontend**: [React](https://reactjs.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: Plain CSS with a component-scoped approach.
* **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
* **State Management**: React Context for theme and language management.

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16 or later) and npm installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/smartsites-website.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd smartsites-website
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the Vite development server and view the project in your browser, run:
```bash
npm run dev
```
This will start the application, and you can access it at http://localhost:5174 (or another port if 5174 is in use). The server supports Hot Module Replacement (HMR) for a fast development experience.

### 📁 Project Structure
The project follows a standard React application structure:

```
/
├── public/
│   └── _redirects       # error-handling
├── src/
│   ├── assets/           # Images, logos, and other static assets
│   ├── components/       # Reusable React components (Navbar, Hero, etc.)
│   ├── context/          # React Context providers (ThemeContext, LanguageContext)
│   ├── styles/           # Component-specific CSS files
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Owner:

Sheikh Muhammed Tadeeb (SmartSites)
