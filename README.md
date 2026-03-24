# Brooklyn Gilbert Portfolio Website

A modern, responsive portfolio website for Brooklyn Gilbert - UI/UX Designer and Developer.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Purple accent color scheme
- ⚡ Smooth scrolling navigation
- 🔗 Easy to customize sections

## Project Structure

```
├── index.html       # Main HTML file
├── styles.css       # Styling
├── script.js        # JavaScript interactivity
├── profile.jpg      # Profile image (needs to be added)
└── package.json     # Project configuration
```

## Getting Started

### 1. Add Profile Image
Replace/add your profile image as `profile.jpg` in the project root directory.

### 2. Run the Website Locally

```bash
# Install http-server (if not already installed)
npm install -g http-server

# Start the development server
npm start
```

The website will be available at `http://localhost:8000`

### 3. Customize Content

Edit the following in `index.html`:
- Hero section text and headings
- Navigation menu items
- Section content

## Sections Included

1. **Navigation** - Sticky header with logo and menu
2. **Hero Section** - Welcome message with profile image
3. **About** - Your background and experience
4. **Process** - Your design/development process
5. **Portfolio** - Your projects and work samples
6. **Blog** - Articles and insights
7. **Services** - What you offer
8. **Contact** - Get in touch section

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #7c3aed;      /* Main purple color */
    --bg-light: #f3e8ff;           /* Light background */
    /* ... other colors ... */
}
```

### Typography
Modify font sizes and families in the CSS file to match your preferences.

### Adding Sections
Copy existing section structure and modify as needed.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Grid & Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Need Help?

To expand the website with more content, simply add more sections following the existing pattern in the HTML file.
