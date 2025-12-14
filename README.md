# ExtensionHub

A modern web application built with React and Vite that serves as a hub for discovering, managing, and showcasing Google Chrome extensions. This project provides a user-friendly interface to browse, search, and organize browser extensions with detailed information and ratings.

## 🚀 Features

- **Extension Discovery**: Browse through a curated collection of Chrome extensions
- **Search & Filter**: Find extensions by category, functionality, or keywords
- **Detailed Information**: View comprehensive details, screenshots, and user reviews
- **Modern UI**: Built with ShadCN UI components for a polished, accessible interface
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Powered by Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: ShadCN UI with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/farndimini/ExtensionHub.git
cd ExtensionHub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment
The project is configured for automatic deployment to GitHub Pages using GitHub Actions. Simply push to the `master` branch to trigger a deployment.

## 📁 Project Structure

```
ExtensionHub/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   └── main.tsx       # Application entry point
├── .github/
│   └── workflows/     # GitHub Actions CI/CD
├── public/            # Static assets
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

Visit the live application at: [https://farndimini.github.io/ExtensionHub/](https://farndimini.github.io/ExtensionHub/)

## 📞 Contact

For questions or feedback, please open an issue on GitHub or contact the maintainer.

---

*Built with ❤️ using React, Vite, and modern web technologies.*