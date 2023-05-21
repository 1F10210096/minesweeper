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
  let a = 0;
  let b = 0;
  let around_bomb = 0;
  for (let c = 0; c < 9; c++) {
    for (let d = 0; d < 9; d++) {
      a = c;
      b = d;
      for (let e = -1; e <= 1; e++) {
        for (let f = -1; f <= 1; f++) {
          const a_e = a + e;
          const b_f = b + f;
          if (
            bombMap[b_f] === undefined ||
            bombMap[b_f][a_e] === undefined ||
            bombMap[b_f][a_e] === 0
          ) {
            continue;
          } else if (bombMap[b_f][a_e] === 1) {
            around_bomb++;
            board[b][a] = around_bomb;
          }
        }
      }
      around_bomb = 0;
    }
  }
  console.log(board);
  console.log(bombMap);
  const onClick = (x: number, y: number) => {
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    const newbombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
    const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
    const h = 9;
    const w = 9;
    newuserInputs[y][x] = 1;
    setUserInputs(newuserInputs);
    //bomb作る
    if (!isPlaying) {
      const bombCount = 10;

      let i = 0;
      while (i < bombCount) {
        const y = Math.floor(Math.random() * h);
        const x = Math.floor(Math.random() * w);

        if (newbombMap[y][x] === 0) {
          newbombMap[y][x] = 1;
          i++;
        }
      }
    }
    setBombMap(newbombMap);
  };
  console.log(userInputs)

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
