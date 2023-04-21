import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Text, ImageBackground, ScrollView} from 'react-native';

const window = Dimensions.get('window');
const cellSize = Math.floor(window.width * 0.1);
const gridWidth = Math.floor(window.width / cellSize);
const gridHeight = Math.floor(window.height / cellSize) - 2;

const Snake = () => {
  const [snake, setSnake] = useState([{x: 0, y: 0}]);
  const [food, setFood] = useState({x: 5, y: 5});
  const [direction, setDirection] = useState('right');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, 100);

    return () => clearInterval(interval);
  }, [snake]);

  const moveSnake = () => {
    if (gameOver) return;

    const head = snake[0];
    let newHead = {...head};

    switch (direction) {
      case 'up':
        newHead.y--;
        break;
      case 'down':
        newHead.y++;
        break;
      case 'left':
        newHead.x--;
        break;
      case 'right':
        newHead.x++;
        break;
    }

    if (
      newHead.x < 0 ||
      newHead.x >= gridWidth ||
      newHead.y < 0 ||
      newHead.y >= gridHeight ||
      snake.some(cell => cell.x === newHead.x && cell.y === newHead.y)
    ) {
      setGameOver(true);
      return;
    }

    if (newHead.x === food.x && newHead.y === food.y) {
      setSnake([newHead, ...snake]);
      generateFood();
    } else {
      setSnake([newHead, ...snake.slice(0, snake.length - 1)]);
    }
  };

  const generateFood = () => {
    let newFood = {
      x: Math.floor(Math.random() * gridWidth),
      y: Math.floor(Math.random() * gridHeight),
    };

    while (snake.some(cell => cell.x === newFood.x && cell.y === newFood.y)) {
      newFood = {
        x: Math.floor(Math.random() * gridWidth),
        y: Math.floor(Math.random() * gridHeight),
      };
    }

    setFood(newFood);
  };

  const restartGame = () => {
    setSnake([{x: 0, y: 0}]);
    setFood({x: 5, y: 5});
    setDirection('right');
    setGameOver(false);
  };

  const changeDirection = dir => {
    if (
      (dir === 'up' && direction === 'down') ||
      (dir === 'down' && direction === 'up') ||
      (dir === 'left' && direction === 'right') ||
      (dir === 'right' && direction === 'left')
    ) {
      return;
    }

    setDirection(dir);
  };

  return ( 
    <ScrollView contentContainerStyle={{ flex: 1 }}>
    <ImageBackground source={require('./fondos/a3.png')} style={{ flex: 1 }}>
    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}></View>
    <View style={styles.container}>
      <View style={styles.grid}>
        {snake.map((cell, index) => (
          <View
            key={index}
            style={[styles.cell, {left: cell.x * cellSize, top: cell.y * cellSize}]}
          />
        ))}
        <View
          style={[styles.cell, styles.food, {left: food.x * cellSize, top: food.y * cellSize}]}
        />
      </View>
      {gameOver && (
        <View style={styles.gameOver}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <TouchableOpacity onPress={restartGame}>
            <Text style={styles.restartButton}>Restart</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => changeDirection('up')} style={styles.arrowUp} />
      <TouchableOpacity onPress={() => changeDirection('down')} style={styles.arrowDown} />
      <TouchableOpacity onPress={() => changeDirection('left')} style={styles.arrowLeft} />
      <TouchableOpacity onPress={() => changeDirection('right')} style={styles.arrowRight} />
    </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: gridWidth * cellSize,
    height: gridHeight * cellSize,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    position: 'absolute',
    width: cellSize,
    height: cellSize,
    backgroundColor: '#333',
  },
  food: {
    backgroundColor: 'red',
  },
  gameOver: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOverText: {
    fontSize: 40,
    color: '#fff',
  },
  restartButton: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'green',
    padding: 10,
  },
  arrowUp: {
    position: 'absolute',
    top: 50,
    left: window.width / 2 - 20,
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderTopColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderBottomWidth: 40,
    borderBottomColor: 'green',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
  },
  arrowDown: {
    position: 'absolute',
    top: 130,
    left: window.width / 2 - 20,
    width: 0,
    height: 0,
    borderTopWidth: 40,
    borderTopColor: 'green',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
  },
  arrowLeft: {
    position: 'absolute',
    top: 90,
    left: window.width / 2 - 60,
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderTopColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'green',
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
  },
  arrowRight: {
    position: 'absolute',
    top: 90,
    left: window.width / 2 + 20,
    width: 0,
    height: 0,
    borderTopWidth: 20,
    borderTopColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderLeftWidth: 40,
    borderLeftColor: 'green',
  },
});

export default Snake;