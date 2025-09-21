# Blue Carbon MRV Data Management Features

## 🎯 Overview

This document outlines the comprehensive data management features added to the Blue Carbon MRV prototype. These features enable stakeholders to upload, validate, and manage ecosystem data for blue carbon projects.

## 📁 File Structure

```
bluecarbon_registry/
├── apps/web/src/
│   ├── data/
│   │   └── blueCarbonData.json          # Comprehensive dummy data
│   ├── components/
│   │   ├── DataUpload.tsx               # File upload component
│   │   └── SpeciesGallery.tsx           # Species browsing component
│   ├── pages/
│   │   ├── DataManagement.tsx           # Main data management dashboard
│   │   └── DataValidation.tsx           # Data validation interface
│   └── api/
│       └── validateData.js              # Backend API stubs
└── contracts/contracts/
    └── CarbonCreditToken.sol            # Smart contract for carbon credits
```

## 🗄️ Data Model

### 1. Ecosystem Data (`blueCarbonData.json`)

**Comprehensive dummy entries including:**

- **Ecosystem Extent/Location:**
  - Latitude, longitude coordinates
  - Area in hectares
  - Ecosystem type (Mangrove, Seagrass, Salt Marsh)
  - Administrative boundaries (State, District, Block)

- **Carbon Pools:**
  - Above Ground Biomass (AGB) in t/ha
  - Below Ground Biomass (BGB) in t/ha
  - Soil Organic Carbon (SOC) in t/ha
  - Dead wood and litter values

- **Species-Specific Data:**
  - Scientific and common names
  - Identifying characteristics
  - Stored carbon percentage
  - Geographical distribution tags
  - Image placeholder URLs

- **Monitoring Data:**
  - LiDAR placeholder fields
  - Drone imagery URL placeholders
  - Field inventory values (DBH, height)
  - Citizen-science photo URLs

- **Ecosystem Health:**
  - Nutrient concentrations (N, P, K)
  - Salinity, pH, temperature
  - Biodiversity scores
  - Erosion risk assessments

### 2. Species Database

**6 species entries covering:**
- **Mangroves:** Rhizophora mucronata, Avicennia marina, Bruguiera gymnorrhiza
- **Seagrasses:** Halophila ovalis, Cymodocea serrulata
- **Salt Marshes:** Salicornia brachiata

Each species includes:
- Carbon potential ratings (Low, Medium, High, Very High)
- Conservation status
- Detailed identifying characteristics
- Image placeholders for real species photos

## 🚀 Components

### 1. DataUpload Component

**Features:**
- **File Picker:** Supports JSON/CSV uploads
- **GPS Auto-Capture:** Simulated GPS location capture
- **Preview Table:** Shows uploaded data with validation status
- **Data Validation:** Real-time validation against known zones
- **Commit to Database:** Save validated data to local storage

**Key Functions:**
- `handleFileUpload()` - Process uploaded files
- `captureGPSLocation()` - Simulate GPS capture
- `validateData()` - Validate against ecosystem zones
- `commitData()` - Save to database

### 2. SpeciesGallery Component

**Features:**
- **Filtering System:** By ecosystem type, carbon potential, conservation status, state
- **Search Functionality:** Search by scientific/common names
- **Species Cards:** Display with images, carbon data, and distribution
- **Detail Modal:** Comprehensive species information
- **Responsive Grid:** Adapts to different screen sizes

**Key Functions:**
- `handleFilterChange()` - Apply filters
- `viewSpeciesDetails()` - Show detailed species info
- `getCarbonPotentialColor()` - Color-code carbon potential

### 3. DataValidation Component

**Features:**
- **Validation Dashboard:** Summary of validation status
- **Batch Validation:** Process multiple records
- **Error/Warning Display:** Clear issue identification
- **Validation History:** Track validation timeline

## 🔧 Backend API Stubs

### `validateData.js` Functions:

1. **`validateCoordinates()`**
   - Validates coordinates against known blue carbon zones
   - Checks latitude/longitude ranges
   - Returns confidence levels

2. **`validateCarbonStocks()`**
   - Validates carbon pool values against expected ranges
   - Checks for negative values
   - Provides warnings for unusual values

3. **`validateSpecies()`**
   - Validates species against known databases
   - Checks scientific name format
   - Verifies ecosystem compatibility

4. **`validateEcosystemData()`**
   - Comprehensive validation combining all checks
   - Returns detailed validation results
   - Provides actionable feedback

## 🔗 Smart Contract Integration

### CarbonCreditToken.sol

**ERC-1155 Multi-Token Standard for:**
- **Tokenized Carbon Credits:** Each credit represents verified carbon sequestration
- **Role-Based Access:** Admin, Verifier, Issuer, Retirer roles
- **Lifecycle Management:** Issue, transfer, retire credits
- **Metadata Storage:** IPFS integration for detailed project data
- **Audit Trail:** Complete transaction history

**Key Functions:**
- `issueCarbonCredits()` - Create new carbon credits
- `transferCarbonCredits()` - Transfer between accounts
- `retireCarbonCredits()` - Permanently remove from circulation
- `getCarbonCredit()` - Retrieve credit details

## 🎨 User Interface

### Navigation Integration

**Added to Sidebar:**
- "Data Management" menu item with database icon
- Links to main data management dashboard

**Routing Structure:**
- `/data-management` - Main dashboard
- `/data-management/upload` - Data upload interface
- `/data-management/species` - Species gallery
- `/data-management/validation` - Data validation

### Dashboard Features

**Data Management Dashboard includes:**
- **Statistics Cards:** Total datasets, species records, ecosystems mapped
- **Quick Actions:** Direct links to upload, gallery, validation
- **Recent Activity:** Timeline of data management actions
- **Progress Indicators:** Visual feedback for operations

## 📋 Developer Instructions

### Image Replacement

**Replace placeholder URLs with real images from:**
- [GBIF](https://www.gbif.org/) - Global Biodiversity Information Facility
- [iNaturalist](https://www.inaturalist.org/) - Citizen science platform
- MoSPI/FSI/NCCR official portals for approved research use

**Current placeholders:**
```json
"imageUrl": "/images/mangrove_species_001.jpg"
```

### Data Source Integration

**Replace dummy data with real datasets:**

1. **FSI "State of Forest" Reports:**
   - Biomass data for different ecosystems
   - Carbon stock estimates
   - Forest cover statistics

2. **MoSPI Ecosystem Extent Datasets:**
   - Administrative boundary data
   - Land use classifications
   - Geographic information

3. **NCCR Shoreline Erosion Datasets:**
   - Coastal vulnerability assessments
   - Erosion risk maps
   - Monitoring station data

### API Integration

**Replace mock API calls with real endpoints:**
- Coordinate validation services
- Carbon stock databases
- Species identification APIs
- Government data portals

### Smart Contract Deployment

**Deploy CarbonCreditToken contract:**
```bash
npm run contracts:deploy
```

**Configure contract addresses in:**
- Frontend environment variables
- Backend API configurations
- Mobile app settings

## 🚀 Launch Instructions

### 1. Start Development Server

```bash
# Install dependencies
npm install

# Start web application
npm run web

# Or start all applications
npm run dev
```

### 2. Access Data Management

1. Navigate to the web application
2. Click "Data Management" in the sidebar
3. Explore the dashboard and features:
   - Upload ecosystem data
   - Browse species gallery
   - Validate uploaded data

### 3. Test Features

**Data Upload:**
1. Go to `/data-management/upload`
2. Click "Capture Current Location" (simulated GPS)
3. Select a JSON/CSV file
4. Review preview table
5. Validate and commit data

**Species Gallery:**
1. Go to `/data-management/species`
2. Use filters to narrow results
3. Click "View Details" on species cards
4. Explore comprehensive species information

**Data Validation:**
1. Go to `/data-management/validation`
2. Review validation summary
3. Process pending validations
4. View detailed validation results

## 🔮 Future Enhancements

### Planned Features:
- **Real-time Data Sync:** Live updates from monitoring stations
- **Advanced Analytics:** Carbon sequestration modeling
- **Mobile Integration:** Field data collection apps
- **Blockchain Integration:** Immutable data storage
- **AI/ML Validation:** Automated data quality checks
- **Multi-language Support:** Regional language interfaces

### Integration Opportunities:
- **Government APIs:** Direct integration with FSI, MoSPI, NCCR
- **Satellite Data:** Remote sensing integration
- **IoT Sensors:** Real-time environmental monitoring
- **Carbon Markets:** Trading platform integration
- **Research Collaboration:** Academic institution partnerships

---

## 📞 Support

For questions about the data management features:
1. Check the component documentation
2. Review the API stub implementations
3. Refer to the smart contract comments
4. Contact the development team

**🎉 The Blue Carbon MRV Data Management system is now ready for development and testing!**
