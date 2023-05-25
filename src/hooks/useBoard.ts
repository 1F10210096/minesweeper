import { useMemo } from 'react';
export const useBoard = ({
  userInputs,
  bombMap,
}: {
  userInputs: (0 | 1 | 2 | 3)[][];
  bombMap: number[][];
}) => {
  const board = useMemo(() => {
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

    // useEffect(() => {
    //   let intervalId: NodeJS.Timeout | null = null;

    //   if (count < 1) {
    //     intervalId = setInterval(() => {
    //       setCount((prevCount) => prevCount + 1);
    //     }, 1000);
    //   }

    //   return () => {
    //     if (intervalId) {
    //       clearInterval(intervalId);
    //     }
    //   };
    // }, [count]);

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
        if (userInputs[h][g] === 2 && bombMap[h][g] === 1) {
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
    return board;
  }, [userInputs, bombMap]);
  return board;
};
