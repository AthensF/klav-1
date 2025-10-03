# Klaviyo Campaign Builder 📧

An interactive AI-powered email campaign builder with real-time validation, agent assistance, and animated UI workflows.

From this 

![Before](public/klav-1-before.gif)

to 

![Demo](public/klav-1-demo.gif)

this

## 🚀 Features

### Core Functionality
- **AI Agent Integration**: Interactive agent panel with typewriter animations and multi-line input
- **Email Composer**: Visual email template builder with product showcases
- **Recipient Management**: Email validation with pill-based interface
- **Smart Scheduling**: Date/time picker with timezone support
- **Real-time Validation**: Knight Rider loading animations and inline error handling

### User Experience
- **Animated Workflows**: Smooth section-by-section generation with loading states
- **Error Handling**: Dedicated error page with Accept/Reject dialogue
- **Sticky Footer**: Persistent action bar with validation feedback
- **Responsive Navigation**: Sidebar with smooth scroll-to-section functionality

## 📁 Project Structure

```
klav-1/
├── public/
│   ├── 2-klaviyo-agent-ui-animated.html    # Main campaign builder (animated workflow)
│   ├── 3-klaviyo-agent-ui-animated.html    # Campaign builder with validation
│   ├── 3-klaviyo-agent-ui-error.html       # Error handling page
│   ├── 4-klaviyo-confirmation.html         # Confirmation page
│   ├── 5-campaigns-dashboard.html          # Dashboard view
│   ├── ice1.png                            # Product image 1
│   ├── ice2.png                            # Product image 2
│   └── ice3.png                            # Product image 3
├── src/
│   ├── main.tsx                            # React entry point
│   └── KlaviyoGenerator.tsx                # Main generator component
├── dist/                                    # Build output
└── index.html                               # Landing page

```

## 🎯 Page Flow

### 1. Main Campaign Builder (`2-klaviyo-agent-ui-animated.html`)
- Initial landing page with animated section generation
- Knight Rider loading animations for each section
- Agent panel with conversation history

### 2. Campaign Builder with Validation (`3-klaviyo-agent-ui-animated.html`)
- Full campaign builder with email validation
- Inline error messages with "Ask Agent" button
- Knight Rider loading on validation failure
- Sticky footer with error states

### 3. Error Handling Page (`3-klaviyo-agent-ui-error.html`)
- Dedicated error resolution page
- Auto-scrolls to Recipients section
- Shows invalid email with strikethrough styling
- Accept/Reject dialogue for error correction
- Agent provides contextual help

## 🛠️ Technical Implementation

### Email Validation
- Real-time validation on Enter/Tab key press
- Supports `.com` domain validation
- Visual feedback with red dotted underline
- Email pill creation for valid addresses
- Duplicate email detection

### Agent Panel
- Multi-line textarea with auto-expansion (up to 200px)
- Typewriter animation for responses
- HTML formatting support (`<strong>`, `<br>`)
- Shift+Enter for new lines, Enter to submit

### Animations
- **Knight Rider Loading**: Horizontal scanner animation (500ms)
- **Section Generation**: Fade-in with slide animation (600ms)
- **Typewriter Effect**: Character-by-character text rendering (15ms/char)
- **Accept/Reject Dialogue**: Fade-in with opacity transition (300ms)

### State Management
- `sessionStorage` for invalid email persistence across pages
- Dynamic class toggling for show/hide states
- Event-driven validation and error handling

## 🎨 Styling

### Design System
- **Primary Color**: `#5C4CDB` (Purple)
- **Error Color**: `#dc2626` (Red)
- **Success Color**: `#10b981` (Green)
- **Background**: `#f9fafb` (Light Gray)
- **Agent Panel**: `#E8F4FF` (Light Blue)

### Components
- Rounded corners (8-16px border radius)
- Box shadows for depth
- Smooth transitions (0.2-0.6s)
- Backdrop blur effects on sticky elements

## 🚦 Getting Started

### Prerequisites
- Node.js (LTS version)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd klav-1

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Opening HTML Files Directly
You can also open the HTML files directly in your browser:
```bash
# Navigate to public directory
cd public

# Open in browser (macOS)
open 2-klaviyo-agent-ui-animated.html

# Or use a local server
python3 -m http.server 8000
# Then visit: http://localhost:8000/2-klaviyo-agent-ui-animated.html
```

## 📝 Usage

### Creating a Campaign

1. **Start on Main Page**: Open `2-klaviyo-agent-ui-animated.html`
2. **Watch Generation**: Sections animate in sequentially
3. **Email Composer**: Review generated email template
4. **Add Recipients**: Enter email addresses (press Enter to create pills)
5. **Schedule**: Select date, time, and timezone
6. **Validate**: Click "Schedule Campaign" to validate
7. **Handle Errors**: If validation fails, click "Ask Agent" for help

### Error Resolution Flow

1. Invalid email triggers validation error
2. Knight Rider loading animation (500ms)
3. Error message appears with "Ask Agent" button
4. Click "Ask Agent" → redirects to error page
5. Error page shows:
   - Invalid email with strikethrough
   - Accept/Reject dialogue
   - Agent provides guidance
6. Click "Accept" to remove invalid email
7. Click "Reject" to keep and manually fix

## 🔧 Configuration

### Email Validation Rules
Edit validation logic in `validateRecipients()` function:
```javascript
// Current: Validates .com domains
if (email.endsWith('.com') && email.length > 10) {
    // Valid email
}

// Customize as needed:
// - Add more TLDs (.org, .net, etc.)
// - Use regex for full email validation
// - Add custom domain restrictions
```

### Agent Response Messages
Customize agent messages in `typewriterAgentResponse()`:
```javascript
const responseText = `Your custom message here...`;
```

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📄 License

MIT License - feel free to use for learning and personal projects.

## 🎓 Learning Resources

This project demonstrates:
- Vanilla JavaScript DOM manipulation
- CSS animations and transitions
- Form validation patterns
- State management with sessionStorage
- Event-driven architecture
- Responsive design principles

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Built with ❤️ as a learning project**
