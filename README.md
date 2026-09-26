# Greenway Pathways Foundation Website

A modern, responsive website developed for **Greenway Pathways Foundation**, a non-profit organization focused on creating positive social impact through its programmes, initiatives, and community development efforts.

🌐 **Live Website:** https://www.greenwaypathwaysfoundation.com/

The website provides a clear digital presence for the foundation, allowing visitors to learn about its mission, explore its programmes, understand its impact, get in touch, and support its work.

## Overview

The Greenway Pathways Foundation website was built with a focus on:

* Clean and professional visual design
* Fully responsive experience across desktop, tablet, and mobile devices
* Clear presentation of the foundation's mission and programmes
* Easy and intuitive navigation
* Scalable and maintainable React architecture
* Light and dark theme support
* Search-engine-friendly structure
* Deployment-ready frontend architecture

## Technology Stack

* **React** — Frontend application development
* **Vite** — Development environment and build tooling
* **React Router** — Client-side routing
* **Tailwind CSS v4** — Styling and responsive design
* **JavaScript (ES6+)** — Application logic
* **Vercel** — Deployment and hosting

## Project Structure

```text
src/
├── assets/        # Images, icons, logos and static assets
├── components/    # Reusable UI components
├── pages/         # Website pages
├── layouts/       # Shared page layouts
├── hooks/         # Custom React hooks
├── services/      # API and external service integrations
├── context/       # Global application state
├── utils/         # Utility functions
├── routes/        # Application routing
└── theme/         # Theme configuration
```

## Website Pages

### Home

The homepage introduces Greenway Pathways Foundation and highlights:

* The organization's mission
* Key impact statistics
* Featured programmes
* Calls to action
* Donation/support section
* Important organizational information

### About

Provides information about the foundation, including its purpose, mission, vision, and the work it carries out.

### Programs

Showcases the foundation's programs and initiatives, helping visitors understand the areas where the organization creates impact.

### Contact

Provides a dedicated channel for visitors, partners, volunteers, and other stakeholders to get in touch with the foundation.

## Key Features

### Responsive Design

The website is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile devices

### Dark / Light Mode

The website includes a theme system that allows users to switch between light and dark modes.

Theme state is managed using React Context and persisted using `localStorage`.

The selected theme is applied to the HTML element using:

```html
data-theme="light"
```

or

```html
data-theme="dark"
```

### Reusable Components

Common interface elements such as the navigation bar, footer, buttons, cards, and theme controls are implemented as reusable React components.

This makes the application easier to maintain and extend.

### Client-Side Routing

React Router provides navigation between the major pages without requiring full-page reloads.

Current routes include:

```text
/
/about
/programs
/contact
```

All pages are rendered through the shared `MainLayout`.

## API Integration

The frontend includes service wrappers that provide a structure for backend integrations.

### Contact Service

Located at:

```text
services/contactService.js
```

The service is configured to communicate with:

```text
/api/contact
```

### Donation Service

Located at:

```text
services/donationService.js
```

The service provides a structure for initiating donations through:

```text
/api/donations/initiate
```

The frontend can be connected to a production backend by configuring the API base URL.

## Environment Variables

Create a `.env` file in the project root when connecting the frontend to a backend:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

For local development, the application can use the default `/api/...` endpoints.

> **Note:** Never commit sensitive API keys or private credentials to the repository.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd greenway-pathways-foundation
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Deployment

The project is structured for deployment on modern frontend hosting platforms such as Vercel.

A typical deployment process involves:

1. Connecting the repository to the hosting platform
2. Installing project dependencies
3. Running the production build
4. Configuring environment variables
5. Connecting the organization's domain
6. Verifying routes and production functionality

## SEO

The website has been structured with search engine visibility in mind.

SEO-related considerations include:

* Semantic page structure
* Descriptive website content
* Dedicated page routes
* Sitemap configuration
* Search engine indexing
* Responsive design
* Page metadata
* Mobile-friendly layouts

The website sitemap can be submitted through Google Search Console to support search engine discovery and indexing.

## Future Improvements

The architecture allows for future enhancements such as:

* Full backend integration
* Online donation processing
* Automated contact-form submissions
* CMS integration for news and updates
* Volunteer registration
* Newsletter subscriptions
* Website analytics
* Additional SEO optimization
* Content management capabilities

## Project Status

**Completed and Delivered**

The Greenway Pathways Foundation website has been designed, developed, deployed, and delivered as a functional digital platform for the organization.

The project architecture has been structured to support future improvements and integrations without requiring a complete rebuild.

## Developer

Developed as a custom web development project for **Greenway Pathways Foundation**.

Built with:

**React · Vite · React Router · Tailwind CSS**

## License

This project was developed specifically for Greenway Pathways Foundation.

Unless otherwise stated, the website design, content, branding, and project assets remain the property of their respective owners.
