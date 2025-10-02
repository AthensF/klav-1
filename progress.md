# Klaviyo Campaign Generator - Project Documentation

## Project Overview
A multi-page campaign creation flow with AI-assisted design, built with React + TypeScript and vanilla HTML/CSS.

## Production Pages (User Flow)

### 1. Landing Page (`index.html`)
- **Tech**: React + TypeScript (Vite)
- **Purpose**: Campaign creation entry point
- **Features**: Prompt input, example templates, campaign type selection
- **Navigation**: Submit → `public/2-klaviyo-agent-ui-animated.html`

### 2. Campaign Builder (`public/2-klaviyo-agent-ui-animated.html`)
- **Purpose**: Initial campaign generation with AI agent
- **Features**: 
  - Knight Rider loading animation
  - Three-stage generation (Email, Recipients, Schedule)
  - Agent panel (visual only)
- **Navigation**: Agent submit → `public/3-klaviyo-agent-ui-animated.html`

### 3. Campaign Editor (`public/3-klaviyo-agent-ui-animated.html`)
- **Purpose**: Coral theme update with user confirmation
- **Features**:
  - Single-stage Knight Rider animation (Email only)
  - Accept/Reject dialogue (bottom-right of email card)
  - Auto-scroll with footer clearance
  - Schedule Campaign button → Confirmation modal
  - Modal extracts date/time/recipients
- **Navigation**: Confirm & Schedule → `public/4-klaviyo-confirmation.html`

### 4. Confirmation Page (`public/4-klaviyo-confirmation.html`)
- **Purpose**: Success confirmation after scheduling
- **Features**:
  - Animated success icon
  - Campaign details summary
  - Status badge with pulsing dot
  - Next steps guidance
- **Navigation**: Back to Dashboard → `public/5-campaigns-dashboard.html`

### 5. Campaigns Dashboard (`public/5-campaigns-dashboard.html`)
- **Purpose**: List all campaigns
- **Features**:
  - Filterable table (status, date range)
  - Sample campaigns with metrics
  - Pagination
- **Navigation**: Create Campaign → `/klav-1/index.html`

## Completed Features
- ✅ Full user flow (5 pages)
- ✅ Knight Rider animations
- ✅ Accept/Reject dialogue
- ✅ Confirmation modal with data extraction
- ✅ Sticky campaign actions footer
- ✅ Auto-scroll with footer clearance
- ✅ GitHub Pages deployment
- ✅ Code cleanup (removed duplicates)

## Technical Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Deployment**: GitHub Pages (gh-pages branch)

## File Structure
```
klav-1/
├── public/
│   ├── 2-klaviyo-agent-ui-animated.html  # Campaign builder
│   ├── 3-klaviyo-agent-ui-animated.html  # Campaign editor
│   ├── 4-klaviyo-confirmation.html       # Success page
│   └── 5-campaigns-dashboard.html        # Dashboard
├── src/
│   ├── KlaviyoGenerator.tsx              # Main component
│   ├── App.tsx                           # App wrapper
│   ├── main.tsx                          # Entry point
│   └── index.css                         # Global styles
├── old/                                  # Reference files
├── index.html                            # Root HTML
└── package.json                          # Dependencies
```

## Deployment
```bash
npm run build    # Build React app to dist/
npm run deploy   # Deploy to GitHub Pages
```

## Recent Cleanup (Oct 1, 2025)
- Removed duplicate .js files (KlaviyoGenerator.js, App.js, main.js)
- Removed root-level klaviyo_generator.tsx duplicate
- Cleaned up unused functions in HTML pages
- Removed unused variables
- Fixed lint errors
- Total code reduction: ~14KB

## Known Limitations
- Agent panel on pages 2 & 3 is visual only (not functional)
- Modal data extraction uses placeholder logic
- No backend integration
- Sample data only in dashboard

## Future Enhancements
- Add actual API integration
- Implement functional agent panel
- Add form validation
- Add error handling
- Add loading states for transitions
- Extract shared CSS to common file
