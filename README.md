

# GWDS

Welcome to the repository for my React website! This project was bootstrapped with [Create React App](npm create-react-app).

## 📦 Features
- Built using React for a fast and responsive user interface.
- Easy to set up and customize.
- Ready to deploy using GitHub Pages.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Carsonben-art/gwds.git
```

Navigate into the project directory:

```bash
cd gwds
```

---

### 2. **Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed on your system. Then install all required packages using npm:

```bash
npm install --legacy-peer-deps
```

---

### 3. **Run the Development Server**

Once the dependencies are installed, start the development server:

```bash
npm start
```

Open your browser and go to:

```
http://localhost:3000
```

The page will automatically reload if you make any changes to the code.

---
## 🛠 Push to github
Push the code to your github repo
Create a new repository on your profile with the name `gwds`
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
```

### 4. **Build for Production**

Before deploying, create a production build:

```bash
npm run build
```

This will generate an optimized and minified version of the app inside the `build` folder.

---

## 🌐 Deploying to GitHub Pages

### Step-by-Step Instructions

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following properties to your `package.json`:

   ```json
   "homepage": "https://[github username].github.io/gwds",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy your site to GitHub Pages:

   ```bash
   npm run deploy
   ```

4. Visit your deployed site at:

   ```
   https://[github username].github.io/gwds
   ```

> ⚠️ Make sure your GitHub repository is public, or adjust settings accordingly for private repos.

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [GitHub Pages Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment#github-pages)

---
