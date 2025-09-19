# 🌊 BlueCarbon Registry

A comprehensive blockchain-powered MRV (Monitoring, Reporting, Verification) platform for India's blue carbon restoration projects. This monorepo contains both mobile (React Native/Expo) and web (React/Vite) applications for managing mangrove restoration, carbon credit verification, and stakeholder engagement.

## 🏗️ Architecture

```
bluecarbon-registry/
├── apps/
│   ├── mobile/          # React Native (Expo) mobile app
│   └── web/             # React (Vite) web dashboard
├── packages/
│   └── shared/          # Shared types, utilities, and constants
└── docs/                # Documentation
```

## ✨ Features

### 🎯 Core Functionality
- **Multi-stakeholder Platform**: NGOs, Panchayats, Verifiers, Admins, Industries, Government
- **Field Data Collection**: GPS polygon mapping, photo documentation, tree measurements
- **AI-Powered Verification**: Cross-reference drone imagery, IoT sensors, and field reports
- **Blockchain Registry**: Immutable storage on Hyperledger/Polygon PoS
- **Carbon Credit Tokenization**: Smart contract-based credit issuance
- **Multilingual Support**: 12 Indian languages including Hindi, Bengali, Tamil, etc.

### 📱 Mobile App (React Native/Expo)
- Offline-first data collection
- GPS-based polygon drawing
- Camera integration with EXIF data
- Real-time sync with exponential backoff
- Push notifications via Firebase

### 🖥️ Web Dashboard (React/Vite)
- Real-time analytics and reporting
- Interactive maps with Leaflet
- Verification workflows
- Admin panel with KPIs
- Data export capabilities

## 🛠️ Tech Stack

### Frontend
- **Mobile**: React Native (Expo), TypeScript, NativeWind
- **Web**: React, Vite, TypeScript, Chakra UI
- **Shared**: Zod validation, React Query, i18next

### Styling & UI
- **Mobile**: NativeWind (Tailwind for React Native)
- **Web**: Chakra UI with custom theme
- **Design**: Framer Motion animations, responsive design

### State Management
- React Query for server state
- React Hook Form + Zod for forms
- AsyncStorage for offline persistence

### Maps & Location
- Mapbox GL / Leaflet for interactive maps
- GPS accuracy validation
- Polygon area calculations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/bluecarbon-registry.git
   cd bluecarbon-registry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build shared packages**
   ```bash
   npm run shared:build
   ```

### Development

**Start all applications:**
```bash
npm run dev
```

**Start individual applications:**
```bash
# Web dashboard
npm run web

# Mobile app
npm run mobile

# Shared package development
cd packages/shared && npm run dev
```

### Environment Variables

Create `.env` files in each app directory:

**apps/web/.env:**
```env
VITE_API_URL=http://localhost:3001
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_FIREBASE_CONFIG=your_firebase_config
```

**apps/mobile/.env:**
```env
EXPO_PUBLIC_API_URL=http://localhost:3001
EXPO_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
EXPO_PUBLIC_FIREBASE_CONFIG=your_firebase_config
```

## 🎨 Design System

### Colors
- **Deep Ocean Blue**: `#005F73` - Primary brand color
- **Teal**: `#0A9396` - Secondary actions and highlights  
- **Sand Beige**: `#E9D8A6` - Warm accents and backgrounds
- **White**: `#FFFFFF` - Clean backgrounds and text

### Typography
- **Font**: Inter (web) / Roboto (mobile)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: Consistent spacing system based on 8px grid

### Components
- **Rounded corners**: 2xl (16px) for cards and buttons
- **Shadows**: Subtle elevation with soft shadows
- **Animations**: Framer Motion for smooth transitions
- **Accessibility**: High contrast mode, scalable fonts

## 📊 Data Flow

### Field Data Collection
1. **GPS Capture**: High-accuracy location with validation
2. **Photo Documentation**: EXIF metadata extraction
3. **Tree Measurements**: DBH, height → automatic basal area calculation
4. **Offline Queue**: Retry mechanism with exponential backoff
5. **Carbon Estimation**: Allometric equations for mangroves

### Verification Process
1. **AI Pre-screening**: Cross-reference multiple data sources
2. **Manual Review**: Side-by-side evidence comparison
3. **Approval/Rejection**: Verifier actions with comments
4. **Blockchain Storage**: Immutable record creation

### Carbon Credit Lifecycle
1. **Verification Complete** → Smart contract trigger
2. **Credit Issuance** → Blockchain token creation
3. **Marketplace Integration** → Trading platform
4. **Retirement Tracking** → Final use documentation

## 🌐 Internationalization

Supported languages with RTL support where applicable:
- English (en)
- हिंदी (hi) 
- বাংলা (bn)
- தமிழ் (ta)
- తెలుగు (te)
- ಕನ್ನಡ (kn)
- മലയാളം (ml)
- ગુજરાતી (gu)
- ଓଡ଼ିଆ (or)
- অসমীয়া (as)
- اردو (ur)
- मराठी (mr)

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests for specific app
cd apps/web && npm run test
cd apps/mobile && npm run test

# E2E tests (mobile)
cd apps/mobile && npm run test:e2e
```

## 📦 Building & Deployment

### Web Dashboard
```bash
cd apps/web
npm run build
npm run preview
```

### Mobile App
```bash
cd apps/mobile
# Development build
expo build:android
expo build:ios

# Production build
eas build --platform all
```

## 🔐 Security & Privacy

- **Data Encryption**: End-to-end encryption for sensitive data
- **Blockchain Integration**: Immutable audit trails
- **Privacy Controls**: Granular data sharing permissions
- **Compliance**: GDPR-ready with data export/deletion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use conventional commits
- Add tests for new features
- Update documentation
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NCCR (National Centre for Coastal Research)** - Domain expertise
- **Coastal Communities** - Field testing and feedback
- **Open Source Community** - Tools and libraries
- **Mangrove Restoration Organizations** - Real-world validation

## 📞 Support

- **Documentation**: [docs.bluecarbon.org](https://docs.bluecarbon.org)
- **Issues**: [GitHub Issues](https://github.com/your-org/bluecarbon-registry/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/bluecarbon-registry/discussions)
- **Email**: support@bluecarbon.org

---

**Built with 💙 for India's coastal restoration efforts**