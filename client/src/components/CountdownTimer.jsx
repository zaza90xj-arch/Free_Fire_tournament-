import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="countdown-number">{String(value).padStart(2, '0')}</div>
            <div className="countdown-label">{key === 'days' ? 'أيام' : key === 'hours' ? 'ساعات' : key === 'minutes' ? 'دقائق' : 'ثواني'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;