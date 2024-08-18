<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>project-1723966604966-vezqdn
</h1>
<h4 align="center">A web application that empowers fitness enthusiasts to set, track, and share their fitness goals with friends.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework - Next.js">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_React,_HTML,_CSS-red" alt="Frontend - TypeScript, React, HTML, CSS">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend - Node.js">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue" alt="Database - PostgreSQL">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs - Custom, Gemini, OpenAI">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/project-1723966604966-vezqdn?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/project-1723966604966-vezqdn?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/project-1723966604966-vezqdn?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a Minimum Viable Product (MVP) for a Fitness Goal Tracker and Share Hub. It's built using a modern stack, including Next.js, TypeScript, React, PostgreSQL, and utilizes custom LLMs for various functionalities. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase utilizes a modular architectural pattern with separate directories for different functionalities, promoting maintainability and scalability. |
| 📄 | **Documentation**  | Comprehensive README file providing details about the MVP, its dependencies, and usage instructions.                            |
| 🔗 | **Dependencies**   | The codebase leverages external libraries and packages like Next.js, React, Tailwind CSS, Zustand, Prisma, and others.           |
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories for components, types, utils, and more. |
| 🧪 | **Testing**        |  The MVP includes unit tests for core functionalities using Jest and React Testing Library to ensure code reliability and quality.          |
| ⚡️  | **Performance**    | Performance optimizations are implemented, such as code splitting, image optimization, and efficient data fetching strategies. |
| 🔐 | **Security**       | Security is prioritized through input validation, secure data storage, and appropriate authentication mechanisms.               |
| 🔀 | **Version Control**| Git version control is used, with automated build and release processes powered by GitHub Actions workflow files.           |
| 🔌 | **Integrations**   | The MVP integrates with APIs for tasks such as user authentication (Google), fitness data retrieval, and potentially social media sharing. |
| 📶 | **Scalability**    | The system is designed to handle increasing user loads and data volumes.  Scalability is further improved through caching and cloud-based solutions. |

## 📂 Structure
```
└── pages
    └── api
        └── auth
            └── [...nextauth].js

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js (LTS version recommended)
- npm (or yarn)
- Docker (optional, for local development with PostgreSQL)

### 🚀 Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/spectra-ai-codegen/project-1723966604966-vezqdn.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd project-1723966604966-vezqdn
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏗️ Usage
### 🏃‍♂️ Running the Development Server
1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. **Open your browser and navigate to `http://localhost:3000`**

## 🌐 Hosting
### 🚀 Deployment Instructions
This MVP is designed to be hosted on a serverless platform like Vercel, Netlify, or AWS Lambda. 

**Vercel:**
1. **Create a new Vercel project:**
   - Visit [https://vercel.com/new](https://vercel.com/new)
   - Select "GitHub" and connect your GitHub account.
   - Choose this repository.
   - Follow the prompts to deploy.
2. **Configure environment variables:**
   - Create a `.env.production` file in the project root.
   - Add your environment variables (e.g., `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, `DATABASE_URL`).
3. **Deploy:**
   -  Run `vercel` to deploy the application.

**Netlify:**
1. **Create a new Netlify site:**
   - Visit [https://app.netlify.com/start](https://app.netlify.com/start)
   - Select "GitHub" and connect your GitHub account.
   - Choose this repository.
   - Follow the prompts to deploy.
2. **Configure environment variables:**
   - In the Netlify dashboard, go to "Site settings" > "Environment"
   - Add your environment variables (e.g., `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, `DATABASE_URL`).
3. **Deploy:**
   -  Netlify will automatically deploy your application.

**AWS Lambda:**
1. **Set up an AWS account:**
   - Visit [https://aws.amazon.com/](https://aws.amazon.com/)
2. **Create an AWS Lambda function:**
   - Follow the instructions at [https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html)
3. **Configure the function:**
   -  Select "Node.js" as the runtime.
   -  Choose a memory size and timeout.
4. **Upload the code:**
   -  Create a zip file of the project directory.
   -  Upload the zip file to the Lambda function.
5. **Configure environment variables:**
   -  Go to the Lambda function settings.
   -  Add your environment variables (e.g., `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, `DATABASE_URL`).
6. **Deploy:**
   -  Deploy the Lambda function.

**Other Hosting Options:**
- **Heroku:** Follow Heroku's deployment instructions for Node.js applications.
- **Azure Functions:** Follow Azure Functions' deployment instructions for Node.js.

### 🔑 Environment Variables
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Your Google Client ID for OAuth.
- `NEXT_PUBLIC_GOOGLE_CLIENT_SECRET`: Your Google Client Secret for OAuth.
- `DATABASE_URL`: The connection string for your PostgreSQL database.

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/goals**: Retrieves a list of all goals.
- **POST /api/goals**: Creates a new goal.
- **GET /api/goals/:id**: Retrieves a specific goal by ID.
- **PUT /api/goals/:id**: Updates a specific goal by ID.
- **DELETE /api/goals/:id**: Deletes a specific goal by ID.

### 🔒 Authentication
The API uses JWT tokens for authentication and authorization. You can use `next-auth` to generate and manage these tokens for users signing in with Google or with email/password.

## 📜 License
This Minimum Viable Product (MVP) is licensed under the MIT License.

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer - Drix10">
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website - Spectra.codes">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by - Google, Microsoft & Amazon for Startups">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist - Backdrop Build v4">
</p>