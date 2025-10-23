# Modern Portfolio Website

A sleek, modern portfolio website showcasing projects with a dynamic theme switcher.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **4 Beautiful Themes**: 
  - 🌙 Dark (default - Apple-inspired)
  - ☀️ Light
  - 🌅 Sunset
  - 🌊 Ocean
- **Smooth Animations**: Elegant transitions and hover effects
- **Portfolio Gallery**: Showcase your projects in a responsive grid
- **Contact Integration**: Easy-to-use contact button

## Quick Start

Simply open `index.html` in your web browser to view the portfolio.

For development with live reload, you can use any local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have npx installed)
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Update Your Information
Edit `index.html` to change:
- Your name in the hero section
- About Me content
- Portfolio projects
- Contact email in `script.js`

### Modify Themes
Edit the CSS variables in `styles.css` under each theme section:
- `:root` - Dark theme (default)
- `[data-theme="light"]` - Light theme
- `[data-theme="sunset"]` - Sunset theme
- `[data-theme="ocean"]` - Ocean theme

## Files Structure

```
modern_portfolio/
├── index.html    # Main HTML structure
├── styles.css    # All styling and themes
├── script.js     # Theme switcher and interactions
└── README.md     # This file
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Feel free to use this template for your own portfolio!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
