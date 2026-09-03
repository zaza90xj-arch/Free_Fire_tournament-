import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import TournamentCard from '../components/TournamentCard';

const HomePage = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    const { data } = await supabase
      .from('tournaments')
      .select('*')
      .order('date', { ascending: true });
    
    setTournaments(data || []);
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center text-gray-400">جاري التحميل...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold gold-text text-center mb-8">🏆 البطولات القادمة</h1>
      
      {tournaments.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p className="text-2xl">📋 لا توجد بطولات حالياً</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;