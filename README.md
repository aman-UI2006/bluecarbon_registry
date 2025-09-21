# Blue Carbon Registry - Blockchain-Powered MRV Platform

A comprehensive blockchain-based platform for monitoring, reporting, and verification (MRV) of blue carbon ecosystem restoration projects in India. This platform enables transparent, decentralized, and trustworthy carbon credit systems for coastal restoration initiatives.

## 🌊 Overview

The Blue Carbon Registry is designed to support India's climate goals by providing a transparent and immutable record of blue carbon restoration activities. The platform integrates blockchain technology to ensure data integrity, smart contracts for carbon credit tokenization, and multi-stakeholder access for NGOs, communities, and coastal panchayats.

## 🏗️ Architecture

### Core Components

- **Smart Contracts**: Solidity contracts on Polygon network for carbon credit management
- **Web Application**: React-based admin dashboard for NCCR and stakeholders
- **Mobile Application**: React Native app for field data collection
- **Shared Package**: TypeScript utilities and types shared across applications
- **Blockchain Service**: Ethers.js integration for smart contract interactions

### Technology Stack

- **Frontend**: React 18, TypeScript, Chakra UI, React Router
- **Mobile**: React Native, Expo, React Native Paper
- **Blockchain**: Solidity, Hardhat, Ethers.js, Polygon Network
- **Backend**: Node.js, Express (to be implemented)
- **Database**: PostgreSQL (to be implemented)
- **Storage**: IPFS for decentralized file storage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Hardhat (for smart contract development)
- Expo CLI (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bluecarbon_registry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Build shared package**
   ```bash
   npm run shared:build
   ```

### Development

1. **Start web application**
   ```bash
   npm run web
   ```

2. **Start mobile application**
   ```bash
   npm run mobile
   ```

3. **Deploy smart contracts**
   ```bash
   cd contracts
   npm install
   npm run compile
   npm run deploy:localhost  # or deploy:polygon for mainnet
   ```

## 📱 Mobile App Features

### Field Data Collection
- **GPS Location Capture**: Automatic location tagging with accuracy metrics
- **Photo Documentation**: Camera integration with EXIF data preservation
- **Tree Measurements**: Record DBH, height, and species information
- **Offline Support**: Data collection works without internet connection
- **Blockchain Sync**: Automatic upload to blockchain when connected

### User Interface
- **Multi-language Support**: English and Hindi interfaces
- **Role-based Access**: Different views for collectors, verifiers, and admins
- **Project Management**: View assigned projects and track progress
- **Data Validation**: Real-time validation of field data entries

## 🌐 Web Application Features

### Admin Dashboard (NCCR)
- **System Monitoring**: Real-time system health and performance metrics
- **Verification Management**: Review and approve field data submissions
- **Stakeholder Management**: Manage NGOs, panchayats, and verifiers
- **Blockchain Analytics**: Monitor transactions and credit issuance
- **Reporting**: Generate comprehensive reports and analytics

### Stakeholder Portal
- **Project Overview**: View project details and progress
- **Data Submission**: Submit field data for verification
- **Credit Tracking**: Monitor carbon credit issuance and trading
- **Documentation**: Access project documents and certificates

## ⛓️ Blockchain Integration

### Smart Contracts

#### BlueCarbonRegistry.sol
- **Project Management**: Create and manage restoration projects
- **Field Data Storage**: Immutable storage of field data submissions
- **Carbon Credit Tokenization**: Issue, transfer, and retire carbon credits
- **Role-based Access Control**: Manage permissions for different user types
- **Verification System**: Automated verification workflow

### Key Features
- **Immutable Records**: All data stored on blockchain cannot be modified
- **Transparent Transactions**: All credit transfers are publicly verifiable
- **Automated Verification**: Smart contracts enforce verification rules
- **Gas Optimization**: Efficient contract design for low transaction costs
- **Multi-signature Support**: Enhanced security for critical operations

## 🔐 Security & Compliance

### Data Integrity
- **Blockchain Immutability**: All critical data stored on blockchain
- **Cryptographic Verification**: Digital signatures for data authenticity
- **Audit Trails**: Complete history of all data modifications
- **Role-based Permissions**: Granular access control for different stakeholders

### Privacy Protection
- **Data Encryption**: Sensitive data encrypted before storage
- **IPFS Integration**: Decentralized file storage for photos and documents
- **GDPR Compliance**: User data protection and right to deletion
- **Anonymization**: Personal data anonymized where possible

## 📊 Monitoring & Analytics

### Real-time Metrics
- **Project Progress**: Track restoration activities across all projects
- **Carbon Sequestration**: Monitor total carbon credits issued and retired
- **Stakeholder Activity**: Analyze participation and engagement metrics
- **System Performance**: Monitor blockchain sync and API performance

### Reporting
- **Automated Reports**: Generate periodic reports for stakeholders
- **Custom Dashboards**: Configurable views for different user roles
- **Export Functionality**: Export data in various formats (CSV, PDF, JSON)
- **API Access**: RESTful API for third-party integrations

## 🛠️ Development

### Project Structure
```
bluecarbon_registry/
├── apps/
│   ├── web/                 # React web application
│   └── mobile/              # React Native mobile app
├── packages/
│   └── shared/              # Shared TypeScript utilities
├── contracts/               # Solidity smart contracts
├── docs/                    # Documentation
└── scripts/                 # Deployment and utility scripts
```

### Available Scripts

- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications for production
- `npm run test` - Run test suites
- `npm run lint` - Lint all code
- `npm run type-check` - TypeScript type checking
- `npm run clean` - Clean build artifacts

### Smart Contract Development

```bash
cd contracts
npm run compile          # Compile contracts
npm run test            # Run contract tests
npm run deploy:localhost # Deploy to local network
npm run deploy:polygon  # Deploy to Polygon mainnet
npm run verify          # Verify contracts on block explorer
```

## 🌍 Deployment

### Web Application
- **Production Build**: `npm run build`
- **Static Hosting**: Deploy to Vercel, Netlify, or similar
- **Environment Variables**: Configure production environment variables
- **CDN**: Use CDN for static assets and IPFS gateway

### Mobile Application
- **Expo Build**: `eas build --platform android/ios`
- **App Store**: Submit to Google Play Store and Apple App Store
- **OTA Updates**: Use Expo Updates for over-the-air updates
- **Push Notifications**: Configure for verification alerts

### Smart Contracts
- **Polygon Deployment**: Deploy to Polygon mainnet for production
- **Contract Verification**: Verify contracts on Polygonscan
- **Frontend Integration**: Update contract addresses in frontend
- **Monitoring**: Set up monitoring for contract events

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Smart contract development and deployment
- ✅ Web application with admin dashboard
- ✅ Mobile application for field data collection
- ✅ Basic blockchain integration

### Phase 2 (Next)
- 🔄 Backend API development
- 🔄 Database integration
- 🔄 Advanced analytics and reporting
- 🔄 Multi-language support expansion

### Phase 3 (Future)
- 📋 AI-powered verification
- 📋 Drone data integration
- 📋 Satellite imagery analysis
- 📋 International expansion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation for new features
- Follow the existing code style
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation in the `/docs` folder

## 🙏 Acknowledgments

- National Centre for Coastal Research (NCCR) for project guidance
- Polygon Network for blockchain infrastructure
- Open source community for various libraries and tools
- Blue carbon research community for scientific validation

---

**Built with ❤️ for India's Blue Carbon Future**