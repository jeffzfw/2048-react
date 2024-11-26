# 2048 Game React Implementation

A modern React implementation of the classic 2048 game, featuring smooth animations, touch support, and responsive design.

## 🎮 Game Features

- Classic 2048 gameplay mechanics
- Smooth tile animations
- Keyboard arrow keys support
- Touch/swipe support for mobile devices
- Responsive design that works on all screen sizes
- Score tracking
- Game over detection

## 🚀 Technologies Used

- React 18
- CSS3 for styling and animations
- Custom React Hooks for game logic
- Modern JavaScript (ES6+)

## 🛠️ Project Structure

```
2048-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Header.js
│   │   └── Tile.js
│   ├── hooks/
│   │   └── useGame2048.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎯 Game Rules

1. Use arrow keys or swipe to move tiles
2. When two tiles with the same number touch, they merge into one
3. After each move, a new tile appears (value of 2 or 4)
4. The goal is to create a tile with the number 2048
5. Game ends when no more moves are possible

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd 2048-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 How to Play

- **Desktop**: Use arrow keys (↑ ↓ ← →) to move tiles
- **Mobile**: Swipe up, down, left, or right to move tiles
- Merge tiles with the same number to create larger numbers
- Try to reach the 2048 tile!

## 🧪 Game Logic

The game logic is encapsulated in a custom React hook (`useGame2048`), which handles:
- Grid state management
- Tile movement and merging
- Score calculation
- Game over detection
- Touch and keyboard event handling

## 📱 Responsive Design

The game is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🛠️ Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original 2048 game by Gabriele Cirulli
- React team for the amazing framework
- The open-source community for inspiration and support
