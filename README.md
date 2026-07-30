# 🚀 Personal Portfolio Website

A professional, modern, and fully responsive single-page portfolio website built for web developers. Designed to showcase projects like digital products with a clean, interactive interface.

## ✨ Features

### 🎨 Design & Layout
- **Professional Single-Page Design** - All content on one seamless page
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode Toggle** - User preference theme switching
- **Modern Gradient Backgrounds** - Eye-catching hero section
- **Smooth Animations** - AOS (Animate On Scroll) library integration

### 📱 Mobile-First Approach
- **Bottom Navigation Bar** - App-like mobile experience with 4 tabs
- **Hamburger Menu** - Collapsible navigation for small screens
- **Touch-Friendly UI** - Large buttons and optimized touch targets
- **Full-Width Cards** - Mobile-optimized project display

### 💼 Sections

1. **Hero Section**
   - Developer introduction
   - Call-to-action buttons
   - Animated scroll indicator
   - Gradient background

2. **Featured Projects**
   - Product-card style layout
   - Interactive filter buttons (All, Web Apps, UI, Tools)
   - Hover effects and animations
   - Tech stack badges
   - Demo & Code links

3. **About Section**
   - Personal bio
   - Achievement statistics
   - Skills grid with icons
   - Download resume button

4. **Experience Section**
   - Professional role summary
   - Key responsibilities and impact
   - School-focused project highlights

5. **Achievements/Testimonials**
   - Award showcases
   - Accomplishment cards
   - Animated on scroll

6. **Contact Section**
   - Functional contact form
   - Social media links
   - Contact information
   - Form validation

7. **Footer**
   - Copyright information
   - Social links
   - Credits

### 🛠 Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS (CDN)** - Utility-first styling
- **jQuery** - DOM manipulation and interactivity
- **AOS.js** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family

## 🚀 Getting Started

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required!

3. **Or use Live Server (Recommended)**
   - If you have VS Code, install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`index.html` - Line ~140):
```html
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your Role</p>
<p>Your description...</p>
```

**About Section** (`index.html` - Line ~410):
```html
<h3>Hello! I'm Your Name 👋</h3>
<p>Your bio...</p>
```

### 2. Projects

Each project card structure (`index.html` - Line ~265):
```html
<div class="project-item" data-category="webapp">
    <img src="your-image-url" alt="Project Name">
    <h3>Project Title</h3>
    <p>Project description...</p>
    <!-- Tech Stack Badges -->
    <!-- Demo & Code Links -->
</div>
```

**To add a new project:**
1. Copy an existing project card div
2. Update the image, title, description
3. Modify tech stack badges
4. Update demo and code links
5. Set the correct `data-category` (webapp, ui, or tools)

### 3. Skills

Update skills in About section (`index.html` - Line ~475):
```html
<div class="skill-badge">
    <i class="fab fa-your-icon"></i>
    <div>Skill Name</div>
</div>
```

Find icons at: [Font Awesome Icons](https://fontawesome.com/icons)

### 4. Contact Information

Update in Contact section (`index.html` - Line ~665):
```html
<div>Email: your.email@example.com</div>
<div>Location: Your Location</div>
```

Update social media links (`index.html` - Line ~690):
```html
<a href="your-github-url">GitHub</a>
<a href="your-linkedin-url">LinkedIn</a>
<!-- etc. -->
```

### 5. Colors & Branding

**Primary Colors** (Tailwind classes used):
- Blue: `blue-500`, `blue-600`
- Purple: `purple-500`, `purple-600`
- Slate: `slate-800`, `slate-900`

**Change gradient colors** (`index.html` - Line ~77):
```css
.gradient-bg {
    background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
}
```

### 6. Images

**Project Images:**
- Replace placeholder Unsplash URLs with your own images
- Recommended size: 600x400px
- Formats: JPG, PNG, WebP

**Where to find free images:**
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

## 🎯 Features Explained

### Dark/Light Mode Toggle
- Click the moon/sun icon in the navbar
- Automatically switches entire theme
- Smooth transitions between modes

### Project Filtering
- Click filter buttons above projects
- jQuery dynamically shows/hides projects
- Smooth fade animations

### Smooth Scroll Navigation
- Click any navigation link
- Smooth scroll to section
- Active link highlighting

### Mobile Bottom Navigation
- Appears automatically on mobile devices
- Fixed position for easy access
- Active state highlighting

### Contact Form
- Client-side validation
- Success notification on submit
- Form reset after submission
- Email format validation

### AOS Animations
- Scroll-triggered animations
- Customizable durations and delays
- Multiple animation types (fade, zoom, slide)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Bottom nav, hamburger menu)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: > 1024px (3-4 column grid)

## 🔧 jQuery Functions

### Main Interactive Features:
1. **Theme Toggle** - Switch between dark/light modes
2. **Mobile Menu** - Toggle hamburger menu
3. **Smooth Scroll** - Navigate sections smoothly
4. **Project Filter** - Filter projects by category
5. **Active Nav Links** - Highlight current section
6. **Form Handling** - Process contact form submissions
7. **Scroll to Top** - Quick return to top button
8. **Notifications** - Toast-style messages

## 🎨 Customization Tips

### Change Font:
Replace in `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Update CSS:
```css
* {
    font-family: 'YourFont', sans-serif;
}
```

### Add More Sections:
1. Create section in HTML with unique `id`
2. Add navigation link in navbar
3. Add to mobile bottom nav
4. Style with Tailwind classes

### Modify Animations:
Change AOS attributes:
```html
data-aos="fade-up"           <!-- Animation type -->
data-aos-duration="1000"     <!-- Duration in ms -->
data-aos-delay="200"         <!-- Delay in ms -->
data-aos-offset="100"        <!-- Trigger offset -->
```

Available animations: fade, fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out, slide-up, slide-down, etc.

## 🚀 Deployment

### GitHub Pages:
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main/master)
4. Save and wait for deployment

### Netlify:
1. Create account on Netlify
2. Drag and drop your folder
3. Site is live instantly!

### Vercel:
1. Import GitHub repository
2. Deploy with one click
3. Automatic deployments on push

## 📝 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ⚠️ IE11 (limited support)

## 🐛 Troubleshooting

**Animations not working?**
- Check if AOS library is loaded
- Verify internet connection (CDN dependencies)

**jQuery functions not working?**
- Ensure jQuery is loaded before script.js
- Check browser console for errors

**Styling issues?**
- Verify Tailwind CDN link is active
- Clear browser cache

**Mobile menu not opening?**
- Check JavaScript console for errors
- Verify jQuery is properly loaded

## 🎓 Learning Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [jQuery Documentation](https://api.jquery.com/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── script.js           # jQuery & JavaScript
└── README.md          # Documentation (this file)
```

## 💡 Tips for Success

1. **Personalize Content** - Make it uniquely yours
2. **Use Real Projects** - Showcase actual work
3. **Optimize Images** - Compress for faster loading
4. **Test Responsiveness** - Check on multiple devices
5. **Keep It Updated** - Add new projects regularly
6. **SEO Optimization** - Add meta tags for better visibility
7. **Performance** - Minimize external dependencies when possible

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

For questions or suggestions, feel free to reach out:
- Email: deep@example.com
- GitHub: [@yourusername]
- LinkedIn: [Your LinkedIn]

## 📜 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using HTML, Tailwind CSS, jQuery & AOS.js**

Happy Coding! 🚀