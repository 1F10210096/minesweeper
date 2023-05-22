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

  const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
    row.map((cell) => cell as 0 | 1 | 2 | 3)
  );
  const newbombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
  //周囲の爆弾を数える
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let around_bomb = 0;
  for (c = 0; c < 9; c++) {
    for (d = 0; d < 9; d++) {
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

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (bombMap[g][h] === 1) {
        board[g][h] = 11;
      }
    }
  }

  //空白連鎖

  function saiki(y: number, x: number) {
    for (let e = -1; e <= 1; e++) {
      for (let f = -1; f <= 1; f++) {
        const y_e = y + e;
        const x_f = x + f;
        console.log('a');
        if (board[y_e] === undefined || board[y_e][x_f] === undefined || board[y_e][x_f] !== -1) {
          continue;
        } else if (board[y_e][x_f] === -1) {
          console.log('b');
          board[y_e][x_f] = 0;
          saiki(y_e, x_f);
        }
      }
    }
  }

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (userInputs[g][h] === 1 && board[g][h] === -1) {
        saiki(g, h);
      }
    }
  }

  //   for (let e = -1; e <= 1; e++) {
  //     for (let f = -1; f <= 1; f++) {
  //       const y_e = y + e;
  //       const x_f = x + f;
  //       if (board[y_e] === undefined || board[y_e][x_f] === undefined || board[y_e][x_f] !== -1) {
  //         continue;
  //       } else if (userInputs[y_e][x_f] === 1 && board[y_e][x_f] === -1) {
  //         userInputs[y_e][x_f] = 1;
  //       }
  //     }
  //   }
  // }

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (board[h][g] !== 0 && userInputs[h][g] !== 1) {
        board[h][g] = -1;
      }
    }
  }


 


  console.log(userInputs);
  console.log(bombMap);
  console.log(board);

  //爆発判定
  // a = 0;
  // b = 0;
  // c = 0;
  // d = 0;
  // for (let c = 0; c < 9; c++) {
  //   for (let d = 0; d < 9; d++) {
  //     a = c;
  //     b = d;
  //     if (userInputs[b][a] === 1 && bombMap[b][a] === 1) {
  //       alert('爆発');
  //     }
  //   }
  // }

  const onClick = (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => {
    const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));

    newuserInputs[y][x] = 1;

    //爆弾を作る
    if (!isPlaying) {
      let i = 0;
      while (i < 10) {
        const y = Math.floor(Math.random() * 9);
        const x = Math.floor(Math.random() * 9);

        if (newbombMap[y][x] === 0 && newuserInputs[y][x] !== 1) {
          newbombMap[y][x] = 1;
          i++;
        }
      }
      setBombMap(newbombMap);
    }
    setUserInputs(newuserInputs);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board1}>
        <div className={styles.board2}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                key={`${x}-${y}`}
                onClick={(event) => onClick(x, y, event)}
                onContextMenu={(event) => onClick(x, y, event)}
              >
                {color !== 0 &&
                  (color !== -1 && color !== 9 && color !== 10 ? (
                    <div
                      className={styles.icon}
                      style={{ backgroundPosition: `${-(color - 1) * 30}px` }}
                    />
                  ) : (
                    color < 11 && (
                      <div className={styles.stone}>
                        {(board[y][x] === 9 || board[y][x] === 10) && (
                          <div
                            className={styles.flag}
                            style={{ backgroundPosition: `${-(color - 1) * 100}%` }}
                          />
                        )}
                      </div>
                    )
                  ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
