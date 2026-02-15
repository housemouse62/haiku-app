# Haiku Checker - React App

A React app that helps poets write haikus by counting syllables in real-time and providing instant feedback.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd haiku-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## 📁 Project Structure

```
haiku-app/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # Main app styles
│   ├── HaikuLine.jsx        # Reusable line component
│   ├── HaikuLine.css        # Line component styles
│   ├── syllableCounter.js   # Syllable counting logic
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Key React Concepts Used

- **Components**: Reusable `HaikuLine` component
- **State Management**: `useState` hook for tracking line values
- **Props**: Passing data from parent to child components
- **Event Handlers**: `onChange` for real-time updates
- **Conditional Rendering**: Show success message when haiku is complete

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📝 Next Steps

- Add more poem types (sonnets, limericks)
- Save haikus to local storage
- Share haikus feature
- Improved syllable counting algorithm
- Dark mode
