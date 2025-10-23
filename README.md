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