import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../services/supabase';
import CountdownTimer from '../components/CountdownTimer';
import Bracket from '../components/Bracket';
import toast from 'react-hot-toast';

const TournamentPage = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ phone: '', playerId: '' });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const [tournamentRes, playersRes] = await Promise.all([
      supabase.from('tournaments').select('*').eq('id', id).single(),
      supabase.from('registrations').select('*').eq('tournament_id', id)
    ]);
    
    setTournament(tournamentRes.data);
    setPlayers(playersRes.data || []);
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from('registrations')
      .insert([{
        tournament_id: id,
        phone: form.phone,
        player_id: form.playerId
      }]);

    if (error) {
      toast.error('حدث خطأ في التسجيل');
    } else {
      toast.success('تم التسجيل بنجاح! 🎉');
      setForm({ phone: '', playerId: '' });
      fetchData();
    }
  };

  if (loading) return <div className="text-center text-gray-400">جاري التحميل...</div>;
  if (!tournament) return <div className="text-center text-red-400">البطولة غير موجودة</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold gold-text text-center">{tournament.name}</h1>
      <div className="text-center text-gray-300 mt-2">
        📅 {new Date(tournament.date).toLocaleDateString('ar-EG')} | ⏰ {tournament.time} | 🏆 {tournament.stage}
      </div>

      <div className="max-w-2xl mx-auto my-8">
        <CountdownTimer targetDate={tournament.date} />
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold gold-text text-center mb-4">📋 جدول البطولة</h2>
        <Bracket matches={tournament.matches || []} />
      </div>

      <div className="max-w-md mx-auto bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold gold-text text-center mb-4">📝 تسجيل اللاعبين</h3>
        <p className="text-center text-gray-400 mb-4">👥 عدد المسجلين: {players.length}</p>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="tel"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gold-500 focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="ID اللاعب"
            value={form.playerId}
            onChange={(e) => setForm({ ...form, playerId: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gold-500 focus:outline-none"
            required
          />
          <button type="submit" className="btn-gold w-full">تسجيل</button>
        </form>
      </div>
    </div>
  );
};

export default TournamentPage;