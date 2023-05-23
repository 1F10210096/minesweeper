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

  const [count, setCount] = useState([[0]]);

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

  const board2: number[][] = [
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

  const handleButtonClick = () => {
    // userInputs と bombMap の配列をリセットする
    const resetuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) => row.map(() => 0));
    const resetBombMap: (0 | 1 | 2 | 3)[][] = newbombMap.map((row) => row.map(() => 0));

    setUserInputs(resetuserInputs);
    setBombMap(resetBombMap);
  };

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
        if (board[y_e] === undefined || board[y_e][x_f] === undefined) {
          continue;
        } else if (board[y_e][x_f] !== -1) {
          board2[y_e][x_f] = 0;
        } else if (board[y_e][x_f] === -1) {
          board2[y_e][x_f] = 0;
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

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (userInputs[h][g] === 2) {
        board[h][g] = 10;
        board2[h][g] = 0;
      }
    }
  }

  //爆発判定
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (userInputs[b][a] === 1 && bombMap[b][a] === 1) {
        alert('爆発');
        for (let a = 0; a < 9; a++) {
          for (let b = 0; b < 9; b++) {
            board2[b][a] = 0;
            if (board[b][a] === -1) {
              board2[b][a] = 0;
              board[b][a] = 0;
            }
            if (bombMap[b][a] === 1 && board[b][a] === 10) {
              board[b][a] = 11;
            }
          }
        }
      }
    }
  }

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (userInputs[h][g] !== 1 && board2[h][g] === -1) {
        board[h][g] = -1;
      }
    }
  }

  console.log(userInputs);
  console.log(bombMap);
  console.log(board);

  let flagCount = 0;
  let bombCount = 0;

  for (let h = 0; h < 9; h++) {
    for (let g = 0; g < 9; g++) {
      if (userInputs[h][g] === 2) {
        flagCount++;
      }
      if (bombMap[h][g] === 1 && userInputs[h][g] === 1) {
        bombCount++;
      }
    }
  }

  if (flagCount + bombCount === 10) {
    alert('クリア');
  }

  const onClick = (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => {
    const isPlaying = userInputs.some((row) => row.some((input) => input === 1));

    newuserInputs[y][x] = 1;

    event.preventDefault(); // デフォルトの右クリックメニューを無効化

    if (event.button === 2) {
      // 右クリックイベントの場合
      const newInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) => row.slice()); // userInputsのコピーを作成

      if (newInputs[y][x] === 0) {
        // 旗が立っていないセルの場合
        newInputs[y][x] = 2; // 旗を立てる（2は旗の状態を表す値）
      } else if (newInputs[y][x] === 2) {
        // 旗が立っているセルの場合
        newInputs[y][x] = 0; // 旗を取り消す
      }

      setUserInputs(newInputs); // 新しいユーザーの入力状態を更新
    } else {
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
        // let countN = 0;
        // const interval_id= undefined;
        // setInterval(() => {
        //   countN = countN + 1;
        //   const newCount: number[][] = [[countN]];
        //   setCount(newCount);
        //   if (flagCount + bombCount === 10) {
        //     clearInterval(interval_id);
        //   }
        // }, 1000);
      }
      setUserInputs(newuserInputs);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board1}>
        <div>{count[0][0]}</div>
        <div className={styles.button} onClick={handleButtonClick}>
          a
        </div>
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
