# URL Shortener API

## Overview
The **URL Shortener API** is a backend service that allows users to shorten long URLs and redirect them to their original destinations using short codes. It is built with **Node.js**, **Express**, and **TypeScript**, following a modular, scalable architecture.

## Features

### URL Management
- **Shorten URLs:** Converts long URLs into shorter, unique identifiers.
- **Redirect URLs:** Redirects users to the original URL when a shortened URL is accessed.
- **Validation:** Ensures submitted URLs are valid before shortening.

### API Documentation
- **Swagger Integration:** Interactive API documentation using Swagger UI.
- **Versioning:** API versioning for smooth updates and backward compatibility.

### Deployment and Configuration
- **Environment Variables:** Supports flexible configuration through `.env`.
- **Production Ready:** Deployed live via Railway for testing and production environments.

### General Features
- **Error Handling:** Centralized error handling and response format.
- **Logging:** Console-based logging for debugging and development.
- **Scalable Structure:** Organized in controllers, services, and routes for maintainability.

## Tech Stack

- **Backend:**
  - Node.js with Express.js
  - TypeScript for static typing
  - Swagger for documentation
  - Railway for deployment

## Getting Started

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

### 1. Clone the Repository
```bash
   git clone https://github.com/CollinDex/url-shortener.git
   cd url-shortener
```

### 3. Install packages
```bash
yarn install
```

### 4. Run Dev Server
```bash
yarn run dev
```

### 5. Locate endpoints at http://localhost:8000/api/docs/
