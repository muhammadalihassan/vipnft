import React from 'react';
import { useReactCountdown } from 'use-react-countdown';
function Counter() {
    const { days, hours, minutes, seconds } = useReactCountdown(
        'July 22, 2022 00:00:00'
      );
  return (
    <div>
        <ul>
            <li><p>{days} <span>Days</span></p></li>
            <li>:</li>
            <li><p>{minutes} <span>Min</span></p></li>
            <li>:</li>
            <li><p>{seconds} <span>sec</span></p></li>
        </ul>
    </div>
  );
}

export default Counter;
