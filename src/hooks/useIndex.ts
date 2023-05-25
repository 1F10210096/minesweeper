import { useState } from 'react';
import { useBoard } from './useBoard';
export const useIndex = () => {
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

  const board = useBoard({
    userInputs,
    bombMap,
  });

  const [count, setCount] = useState<number>(0); // カウントの初期値を0として定義

  let countN = 0;
  const handleButtonClick = () => {
    // userInputs と bombMap の配列をリセットする
    const resetuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) => row.map(() => 0));
    const resetBombMap: (0 | 1 | 2 | 3)[][] = bombMap.map((row) => row.map(() => 0));

    setUserInputs(resetuserInputs);
    setBombMap(resetBombMap);
    const time_ID = undefined;
    clearInterval(time_ID);
    countN = 0;
  };

  const onClick = (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => {
    const isPlaying = userInputs.some((row) => row.some((input) => input === 1));
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    const newbombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
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
        setInterval(() => {
          countN = countN + 1;
          setCount(countN);
        }, 1000);
      }
      setUserInputs(newuserInputs);
    }
  };

  return { board, onClick, handleButtonClick, count };
};
