import React, {useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  increment,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [max, setMax] = useState<number>(10);

  return (
    <div>
      <div className={styles.row}>
        <label htmlFor="maxValue">Введите максимальное значение:</label>
        <input
            id="maxValue"
            className={styles.textbox}
            value={max}
            onChange={(e) => setMax(+e.target.value)}
        />
        <span className={styles.value}>{count}</span>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(increment(max))}
        >
          Новое рандомное число
        </button>
      </div>
    </div>
  );
}
