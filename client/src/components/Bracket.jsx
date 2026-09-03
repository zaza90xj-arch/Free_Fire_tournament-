import React from 'react';

const Bracket = ({ matches }) => {
  const rounds = {
    'final': [],
    'semifinal': [],
    'quarterfinal': [],
    'round16': []
  };
  
  if (matches) {
    matches.forEach(match => {
      if (rounds[match.round]) {
        rounds[match.round].push(match);
      }
    });
  }
  
  const roundNames = {
    'final': '🏆 النهائي',
    'semifinal': '⚔️ قبل النهائي',
    'quarterfinal': '🎯 ربع النهائي',
    'round16': '🔱 دور 16'
  };
  
  const hasMatches = Object.values(rounds).some(r => r.length > 0);
  
  if (!hasMatches) {
    return (
      <div className="text-center text-gray-400 py-8">
        <p className="text-xl">📋 لا توجد ماتشات حالياً</p>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center gap-8 overflow-x-auto py-4">
      {Object.entries(rounds).map(([key, matches]) => (
        matches.length > 0 && (
          <div key={key} className="flex flex-col gap-4 min-w-[200px]">
            <h4 className="text-gold-500 text-center text-sm font-bold tracking-wider">
              {roundNames[key]}
            </h4>
            {matches.map((match, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-800">
                <div className="flex justify-between items-center text-sm">
                  <span className={match.winner === match.team1 ? 'gold-text font-bold' : 'text-gray-400'}>
                    {match.team1 || '???'}
                  </span>
                  <span className="text-gold-500 font-bold text-xs">vs</span>
                  <span className={match.winner === match.team2 ? 'gold-text font-bold' : 'text-gray-400'}>
                    {match.team2 || '???'}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {match.score || '⏳ لم تلعب بعد'}
                </div>
              </div>
            ))}
          </div>
        )
      ))}
    </div>
  );
};

export default Bracket;