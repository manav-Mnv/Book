# Book Web

A modern web application for showcasing books, built with Next.js and React.

## Features

- Book catalog with individual book pages
- Author information and about page
- Contact and events sections
- Responsive design with Tailwind CSS
- UI components from shadcn/ui

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI (via shadcn/ui)
- **Icons:** Lucide React
- **Forms:** React Hook Form with Zod validation
- **Charts:** Recharts
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd book-web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── books/          # Books catalog and individual book pages
│   ├── contact/        # Contact page
│   ├── events/         # Events page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── navigation.tsx # Main navigation
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets (images, etc.)
└── styles/            # Global styles
```

## Available Scripts

- `pnpm dev` / `npm run dev` - Start development server
- `pnpm build` / `npm run build` - Build for production
- `pnpm start` / `npm run start` - Start production server
- `pnpm lint` / `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Vercel. Push to your repository and connect it to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and not licensed for public use.
