# Bonny Island School Bus Transport Website

A professional, responsive, and interactive website for school student bus transport services in Bonny Island.

## 🌟 Features

### Homepage (index.html)
- **Navigation Bar**: Sticky navigation with mobile hamburger menu
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Services Section**: 6 key services displayed in a responsive grid
- **Pricing Section**: Three term pricing cards (Term 1, 2, 3) with features
- **Payment Options**: Multiple payment methods display
- **FAQ Section**: Common questions and answers
- **Contact Section**: Contact information and quick inquiry form
- **Responsive Footer**: Links and copyright information

### Registration Page (registration.html)
- **Multi-Step Form**: 4-step registration process with progress indicator
  - Step 1: Student Information
  - Step 2: Parent/Guardian Information
  - Step 3: Service Details (Term, Routes, Type)
  - Step 4: Review & Summary with cost calculation
- **Form Validation**: Required field validation before moving to next step
- **Cost Calculator**: Automatic calculation of total amount based on selections
- **Responsive Layout**: Mobile-friendly form with proper spacing

## 📋 Website Structure

```
project/
├── index.html              # Homepage
├── registration.html       # Registration/Multi-step form page
├── styles.css             # All responsive CSS styling
├── script.js              # Interactive functionality
└── README.md              # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: `#2563eb` - Main brand color
- **Secondary Blue**: `#1e40af` - Hover states
- **Accent Orange**: `#f59e0b` - Highlights
- **Light Background**: `#f3f4f6` - Section backgrounds
- **Dark Text**: `#1f2937` - Primary text

### Responsive Breakpoints
- **Desktop**: Full-width experience
- **Tablet** (≤ 768px): Optimized grid layouts
- **Mobile** (≤ 480px): Single column, touch-friendly

## 💰 Pricing Structure

All three terms are priced at:
- **Monthly Fee**: ₦12,500 (Round-trip)
- **One-way**: ₦8,000/month
- **Sibling Discounts**: 5-10% available
- **Flexible Duration**: 1-4 months per term

### Term Schedule
- **Term 1**: January - March
- **Term 2**: April - July (Most Popular)
- **Term 3**: September - December

## 🔧 Technical Details

### HTML5 Features Used
- Semantic HTML structure
- Meta tags for SEO
- Responsive viewport settings
- Form elements with proper attributes

### CSS3 Features
- CSS Grid and Flexbox layouts
- CSS Variables for theming
- CSS Animations (fade, float, slide)
- Media queries for responsive design
- CSS Transitions for smooth interactions

### JavaScript Functionality
- Multi-step form navigation
- Form validation
- Data persistence (localStorage)
- Dynamic cost calculation
- Mobile menu toggle
- Smooth scrolling
- Notification system
- Keyboard navigation support

## 🚀 Key Interactive Features

1. **Mobile Navigation**
   - Hamburger menu for mobile devices
   - Active state indicators
   - Smooth menu transitions

2. **Multi-Step Registration Form**
   - Progress indicator showing current step
   - Back/Next navigation
   - Form validation on each step
   - Real-time cost calculation
   - Review page before submission

3. **Dynamic Cost Calculation**
   - Calculates based on transport type
   - Multiplies by number of months
   - Displays in review section

4. **Special Needs Support**
   - Optional disability field
   - Conditional display based on checkbox
   - Support information collection

5. **Notification System**
   - Success/Error/Info messages
   - Auto-dismiss after 5 seconds
   - Smooth slide-in animation

## 📱 Responsive Features

- **Mobile Menu**: Hamburger icon appears on screens ≤ 768px
- **Touch Friendly**: Larger buttons and form inputs on mobile
- **Readable Text**: Font sizes scale appropriately
- **Grid Layouts**: Adapt from multi-column to single column
- **Flexible Images**: Icons scale responsively

## 🔒 Form Validation

The registration form includes:
- Required field validation
- Email format validation
- Phone number input support
- Date picker for DOB
- Dropdown validation for selections
- Terms acceptance checkbox

## 📧 Form Submission

Currently, the form:
1. Validates all required fields
2. Stores data in browser localStorage
3. Shows success notification
4. Redirects to homepage after 2 seconds

**Note**: To enable actual email submissions, integrate with a backend service like:
- Firebase
- Node.js/Express
- AWS Lambda
- Formspree
- EmailJS

## 🎯 Content Sections

### Services Provided
1. Safety First - Professional drivers with background checks
2. On-Time Delivery - Punctual service with tracking
3. Supervised Rides - Trained supervisors on every trip
4. Multiple Routes - Convenient pick-up points across Bonny Island
5. Easy Management - Online registration and parent dashboard
6. Excellent Support - 24/7 customer support

### Pricing Cards Features
Each term card includes:
- ✓ 4 weeks of transport
- ✓ Daily pick-up & drop-off
- ✓ Real-time tracking
- ✓ Emergency support
- ✓ Insurance coverage
- ✓ Sibling discounts (5-10%)
- ✓ Priority booking (Term 2)

## 🔄 User Journey

1. **New Visitor**
   - Lands on homepage
   - Browses services and pricing
   - Reads FAQ for common questions
   - Clicks "Register Now"

2. **Registration Process**
   - Fills student information
   - Enters parent/guardian details
   - Selects term and service options
   - Reviews information
   - Completes registration

3. **Confirmation**
   - Success notification appears
   - Form data saved
   - Redirect to homepage

## 🎨 Customization Tips

### Change Brand Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Update Contact Information
Edit the contact section in `index.html`:
- Phone number
- Email address
- Physical address
- Business hours

### Modify Routes
Update the dropdown options in `registration.html` for pick-up and drop-off points.

### Add Real Payment Integration
Update form submission in `script.js` to:
- Send to your backend API
- Integrate with payment gateway (Stripe, Paystack, etc.)
- Generate confirmation emails

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

- Minimized CSS with efficient selectors
- Optimized JavaScript with no external dependencies
- Responsive images and icons
- Smooth CSS animations (hardware accelerated)

## 🔍 SEO Features

- Semantic HTML structure
- Meta title and description
- Proper heading hierarchy
- Alt text for images
- Mobile-responsive design

## 📞 Support Features

- FAQ section with 6 common questions
- Quick inquiry form
- Contact information display
- 24/7 support availability mentioned

## 🚀 Deployment

To deploy this website:

1. **Static Hosting** (Recommended for this site)
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3

2. **Traditional Hosting**
   - Any web hosting provider
   - Upload all files via FTP

3. **Add Backend**
   - For actual form submissions
   - Database storage
   - Email notifications

## 📝 Notes

- All features are front-end only (no backend required for demo)
- Form data is stored in browser localStorage
- To persist data, integrate with a database
- Icons are Unicode emoji (no external icon libraries)
- No external dependencies - pure HTML/CSS/JavaScript

## 🎓 Learning Resources

This website demonstrates:
- Responsive web design principles
- HTML5 semantic structure
- CSS Grid and Flexbox
- JavaScript form handling
- DOM manipulation
- Event listeners
- CSS animations
- Mobile-first design

---

**Created**: 2026
**For**: Bonny Island School Bus Transport
**Status**: Production Ready
