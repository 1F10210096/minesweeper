import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombCount = 0;
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const board: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

  const onClick = (x: number, y: number) => {
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    const newbombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
    const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
    const randomValue = Math.random();
    console.log(randomValue);
    const h = 8; // 盤面の高さ
    const w = 8; 
    newuserInputs[y][x] = 1;
    setUserInputs(newuserInputs);
    let count_bomb = 0;
    for (let o = 0; o < 8; o++) {
      for (let p = 0; p < 8; p++) {
        y = o;
        x = p;
        for (let r = -1; r <= 1; r++) {
          for (let t = -1; t <= 1; t++) {
            const y_r = y + r;
            const x_t = x + t;
            if (
              newbombMap[y_r] === undefined ||
              newbombMap[y_r][x_t] === undefined ||
              newbombMap[y_r][x_t] === 0
            ) {
              continue;
            } else if (newbombMap[y_r][x_t] === 1) {
              count_bomb = count_bomb + 1;
              newBoard[y_r][x_t] === count_bomb;
              console.log('a');
            } else {
              continue;
            }
          }
        }
      }
    }
    
    //bomb作る
    if (!isPlaying) {
      const bombCount = 10;

      for (let i = 0; i < bombCount; i++) {
        const y = Math.floor(Math.random() * h);
        const x = Math.floor(Math.random() * w);

        if (bombMap[y][x] === 0) {
          bombMap[y][x] = 1;
        } else if (bombMap[y][x] === 1) {
          i--;
        }
      }
    }

    console.log(userInputs[y][x]);
    console.log(bombMap);
    if (newuserInputs[y][x] === 1 && newbombMap[y][x] === 1) {
      alert('爆発');
    }
    newBoard[y][x] === 28;
    console.log(newBoard);
    console.log(userInputs);
  };

  // userInputs.forEach((row) => {
  //   const boardRow = [...row];
  //   bombMap.push(boardRow);
  // });

  return (
    <div className={styles.container}>
      <div className={styles.board1}>
        <div className={styles.board2}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
                {color !== 0 && (
                  <div
                    className={styles.stone}
                    style={{
                      background: color === 1 ? '#000' : '#fff',
                    }}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
