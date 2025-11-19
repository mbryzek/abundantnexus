# Abundant Nexus - Static HTML Website

This is a clean, static HTML version of the Abundant Nexus website focused on the MEMS conference and event information. The original wordpress site can be found at:

https://drive.google.com/file/d/169FForSccoQATxcc50hgC0PPtb5ODEwf/view?usp=sharing

## Site Information

- **Site Name**: Abundant Nexus
- **Description**: Abundant Nexus Conference in Honor of Dr. Janusz Bryzek
- **Pages**: 17 content pages
- **Features**: Fixed navigation bar, responsive design, optimized images

## Structure

```
abundantnexus-static/
├── index.html              # The Abundant Nexus home page (MEMS event)
├── about.html             # About the event
├── origin-story.html      # Background information
├── press-releases.html    # Press releases
├── *-abstract.html        # Speaker abstracts (15 pages)
├── css/
│   └── style.css         # Main stylesheet with fixed navigation
├── static/uploads/   # Media files (images)
└── images/               # Additional images
```

## Pages

### Main Pages
- **Home** (`index.html`) - The Abundant Nexus event information with keynote speakers
- **About** - Information about the event
- **Origin Story** - Background and history
- **Press Releases** - Media and announcements

### Speaker Abstract Pages (15)
- Peter Diamandis
- Sandeep Akkaraju (Exo Imaging)
- Benedetto Vigna (Ferrari CEO)
- Roger Grace
- David Horsley
- Edvard Kälvesten & Magnus Rimskog
- Susumu Kaminaga
- Franz Laermer & Stefan Majoni
- Kurt Petersen
- Curtis Ray
- Shad Roundy
- Weijie Yun
- Swaminathan Rajaraman

## Features

✅ **Fixed Navigation Bar** - Header and navigation stay at top while scrolling
✅ **Hamburger Menu Navigation** - Clean "☰ Menu" button visible on all screens
✅ **Dropdown Menu** - All pages accessible via dropdown menu on desktop and mobile
✅ **Responsive Design** - Mobile-friendly layout that adapts to screen size
✅ **Optimized Images** - All images resized to 70% (30% smaller) for better performance
✅ **Relative Paths** - All PDFs and media files use relative paths for portability
✅ **Clean Navigation** - No spam or unnecessary pages
✅ **Fast Loading** - Pure HTML/CSS with minimal JavaScript

## Design Features

### Fixed Header & Navigation
- Header and navigation bar remain fixed at the top while scrolling
- Clean, professional appearance on all screen sizes
- Hamburger menu button always visible in top right corner

### Hamburger Menu Navigation
- **All Screens**: "☰ Menu" button visible in top right of navigation bar
- Click to open/close dropdown menu with all pages
- Menu displays as vertical dropdown below navigation bar
- Menu closes automatically when clicking a link
- Menu closes when clicking outside the navigation area
- Smooth transitions and touch-friendly interface
- Maximum height with scroll for long page lists

### Image Optimization
- All images display at 70% of original size
- Maintains aspect ratio and quality
- Faster page loading times
- Original images preserved in case you need to adjust sizing

## Viewing the Site

### Local Viewing
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Local Web Server (Recommended)
For best experience, use a local web server:

**Python 3:**
```bash
cd ~/Downloads/abundantnexus-static
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

## Deployment

This static site can be hosted anywhere:

### Recommended Hosting Services
- **Netlify** - Free, drag-and-drop deployment
- **Vercel** - Free with Git integration
- **GitHub Pages** - Free via GitHub repository
- **Cloudflare Pages** - Free with excellent performance
- **AWS S3 + CloudFront** - Scalable cloud hosting
- **Traditional Web Hosting** - Any FTP/SFTP host

### Quick Deploy to Netlify
1. Drag the `abundantnexus-static` folder to https://app.netlify.com/drop
2. Get instant URL (e.g., `https://your-site.netlify.app`)
3. Optional: Configure custom domain

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name abundantnexus.com;
    root /var/www/abundantnexus-static;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache Configuration
Create `.htaccess`:
```apache
Options +FollowSymLinks
RewriteEngine On

# Cache static assets
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|webp)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

## Customization

### Adjusting Image Sizes
Images are currently set to 70% width. To adjust:

**Make images larger (e.g., 85%):**
```bash
find . -name "*.html" -type f -exec sed -i '' 's/width:70%/width:85%/g' {} \;
```

**Make images smaller (e.g., 50%):**
```bash
find . -name "*.html" -type f -exec sed -i '' 's/width:70%/width:50%/g' {} \;
```

### Updating Styles
Edit `css/style.css` to customize:

**Colors** - Modify CSS variables at the top:
```css
:root {
    --primary: #2c3e50;      /* Header background */
    --secondary: #34495e;    /* Navigation background */
    --accent: #3498db;       /* Links */
}
```

**Navigation Height** - Adjust if header size changes:
```css
body { padding-top: 180px; }  /* Adjust this value */
nav { top: 124px; }            /* Adjust this value */
```

### Disabling Fixed Navigation
To make navigation scroll normally, edit `css/style.css`:
```css
/* Remove these properties from header and nav: */
position: fixed;
top: ...;
z-index: ...;

/* And remove from body: */
padding-top: 180px;
```

## Technical Details

### Navigation Structure
- Fixed position header and navigation
- Body padding prevents content from hiding under fixed elements
- Responsive adjustments for mobile devices
- Z-index layering ensures proper stacking

### Image Handling
- Images use inline `style="width:70%; height:auto;"`
- Maintains original image files
- Preserves srcset for responsive images
- Easy to bulk-adjust sizing with sed commands

### Browser Compatibility
✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS/Android)

## Notes

- **Image Sources**: Images still reference WordPress upload paths
- **Clean Content**: All spam/gambling blog posts removed
- **Focused Site**: Only MEMS conference and speaker content
- **No Database**: Pure static HTML - fast and secure

## Maintenance

### Adding New Speaker Pages
1. Copy an existing abstract HTML file
2. Update the content
3. Add link to navigation in all HTML files

### Updating Navigation
Navigation is in each HTML file. To update site-wide:
```bash
# Example: Add new page link
find . -name "*.html" -exec sed -i '' 's|</ul>|<li><a href="new-page.html">New Page</a></li>\n</ul>|' {} \;
```

## License

Content copyright © Abundant Nexus. All rights reserved.

---

**Last Updated**: November 19, 2025
**Conversion**: WordPress to Static HTML
**Status**: Production Ready
