import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

const TournamentCard = ({ tournament }) => {
  return (
    <div className="tournament-card">
      <h3 className="gold-text text-xl font-bold">{tournament.name}</h3>
      <div className="text-gray-400 text-sm mt-2">
        📅 {new Date(tournament.date).toLocaleDateString('ar-EG')} | ⏰ {tournament.time}
      </div>
      <div className="text-gray-400 text-sm">
        🏆 {tournament.stage} | 👥 {tournament.registered || 0}/{tournament.maxPlayers}
      </div>
      <div className="my-4">
        <CountdownTimer targetDate={tournament.date} />
      </div>
      <Link to={`/tournament/${tournament.id}`}>
        <button className="btn-gold w-full">عرض التفاصيل</button>
      </Link>
    </div>
  );
};

export default TournamentCard;