import { useBoard } from '../hooks/useBoard';
import styles from './index.module.css';

const Home = () => {
  const { board, onClick, handleButtonClick, count } = useBoard();

  return (
    <div className={styles.container}>
      <div className={styles.board1}>
        <div>{count}</div>
        <div className={styles.board3}>
          <div className={styles.button} onClick={handleButtonClick} />
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
