
import React, { useState, useEffect } from 'react';
import { SectionType, Position } from './types';
import { PLAYER_DATA, COACH_DATA, NEWS_DATA } from './constants';
import PlayerCard from './components/PlayerCard';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.SQUAD);
  const [playerFilter, setPlayerFilter] = useState<Position | 'all'>('all');

  const filteredPlayers = playerFilter === 'all' 
    ? PLAYER_DATA 
    : PLAYER_DATA.filter(p => p.type === playerFilter);

  const sections = [
    { id: SectionType.SQUAD, label: '📋 선수단', color: 'suwon-gold' },
    { id: SectionType.COACH, label: '👨‍💼 코칭스태프', color: 'suwon-white' },
    { id: SectionType.CLUB, label: '🏟️ 클럽정보', color: 'suwon-red' },
    { id: SectionType.NEWS, label: '📰 뉴스', color: 'suwon-blue' },
    { id: SectionType.MAP, label: '📍 위치', color: 'suwon-gold' },
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover bg-center font-sans">
      <div className="min-h-screen bg-black/85 backdrop-blur-sm">
        
        {/* Navigation */}
        <nav className="sticky top-0 z-[1000] bg-suwon-blue/95 border-b-4 border-suwon-red backdrop-blur-md shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center py-4 px-4 gap-4">
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`text-sm md:text-base font-black px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === sec.id 
                  ? 'text-suwon-gold bg-white/10 scale-105' 
                  : 'text-white hover:text-suwon-gold hover:bg-white/5'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Header */}
        <header className="py-20 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              수원 삼성 <span className="text-suwon-red">블루윙즈</span>
            </h1>
            <p className="text-xl md:text-2xl text-suwon-gold font-bold uppercase tracking-widest drop-shadow-lg">
              🏆 이정효 감독 체제, 2026 K리그1 승격 도전 🏆
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 pb-32">
          
          {/* Squad Section */}
          {activeSection === SectionType.SQUAD && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-l-8 border-suwon-red pl-6">
                <h2 className="text-4xl font-black text-white">2026 시즌 선수단</h2>
                <div className="flex flex-wrap gap-2">
                  {['all', 'GK', 'DF', 'MF', 'FW'].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPlayerFilter(pos as any)}
                      className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                        playerFilter === pos 
                        ? 'bg-suwon-gold text-black shadow-[0_0_15px_rgba(179,151,89,0.5)]' 
                        : 'bg-suwon-blue/50 text-white hover:bg-suwon-blue border border-suwon-gold/30'
                      }`}
                    >
                      {pos === 'all' ? '전체' : pos}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPlayers.map((player, idx) => (
                  <PlayerCard key={player.name + idx} player={player} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* Coach Section */}
          {activeSection === SectionType.COACH && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-4xl font-black text-white mb-12 border-l-8 border-suwon-red pl-6">코칭 스태프</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COACH_DATA.map((coach, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-suwon-blue/30 to-black p-8 rounded-2xl border-2 border-suwon-gold/50 hover:border-suwon-gold transition-all duration-300 group">
                    <h3 className="text-suwon-gold text-2xl font-black mb-4 group-hover:scale-105 transition-transform origin-left">{coach.name}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-suwon-gold/70 font-bold text-sm">직책</span>
                        <span className="text-white font-medium">{coach.pos}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-suwon-gold/70 font-bold text-sm">경력</span>
                        <span className="text-white font-medium text-xs text-right max-w-[150px] leading-relaxed">{coach.career}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-suwon-gold/70 font-bold text-sm">담당</span>
                        <span className="text-white font-medium text-sm">{coach.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Club Info Section */}
          {activeSection === SectionType.CLUB && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
              <h2 className="text-4xl font-black text-white mb-12 border-l-8 border-suwon-red pl-6">클럽 정보</h2>
              
              <div className="bg-black/60 backdrop-blur-md p-10 rounded-3xl border-l-8 border-suwon-blue">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-3xl font-black text-suwon-gold mb-6">수원삼성 블루윙즈</h2>
                    <ul className="space-y-4 text-lg">
                      <li><strong className="text-suwon-gold">창단:</strong> 1995년 12월 15일</li>
                      <li><strong className="text-suwon-gold">현재 감독:</strong> 이정효 (제11대)</li>
                      <li><strong className="text-suwon-gold">홈구장:</strong> 수원 월드컵 경기장 (빅버드)</li>
                      <li>
                        <strong className="text-suwon-gold">주요 성적:</strong>
                        <ul className="ml-6 mt-2 text-base list-disc text-white/80">
                          <li>K리그1 우승: 4회 (1997, 1998, 1999, 2001)</li>
                          <li>FA컵 우승: 5회 (최다 우승)</li>
                          <li>AFC 챔피언스리그 우승: 2회 (2001, 2013)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-80 object-cover rounded-2xl border-2 border-suwon-gold shadow-2xl"
                    alt="Stadium"
                  />
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md p-10 rounded-3xl border-l-8 border-suwon-gold italic">
                <h2 className="text-2xl font-black text-suwon-gold mb-6">이정효 감독 인터뷰 (2026.01.02)</h2>
                <blockquote className="text-xl text-white/90 leading-relaxed pl-8 border-l-4 border-suwon-red">
                  "나의 축구는 명확하다. 수원은 이제 지지 않는 축구가 아니라, 상대를 압도하는 압박과 정확한 공격을 할 것이다. 팬들이 빅버드에서 전율을 느끼게 만드는 것이 나의 첫 번째 임무다. K리그2 승격은 필수가 아니라 당연한 결과가 되어야 한다."
                </blockquote>
              </div>
            </section>
          )}

          {/* News Section */}
          {activeSection === SectionType.NEWS && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-4xl font-black text-white mb-12 border-l-8 border-suwon-red pl-6">최신 뉴스</h2>
              <div className="space-y-4">
                {NEWS_DATA.map((news, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-xl flex items-center gap-6 hover:bg-suwon-blue/20 transition-all border border-transparent hover:border-suwon-gold cursor-pointer group">
                    <span className="text-suwon-gold font-black whitespace-nowrap">[{news.date}]</span>
                    <span className="text-white text-lg font-bold group-hover:translate-x-2 transition-transform">{news.title}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Map Section */}
          {activeSection === SectionType.MAP && (
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
              <h2 className="text-4xl font-black text-white mb-12 border-l-8 border-suwon-red pl-6">경기장 및 위치</h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-black/60 p-8 rounded-3xl border-2 border-suwon-gold/30 hover:border-suwon-gold transition-colors">
                  <h3 className="text-2xl font-black text-suwon-gold mb-6">🏟️ 홈 경기장: 수원 월드컵 경기장</h3>
                  <div className="space-y-3 text-sm text-white/80">
                    <p><strong>위치:</strong> 경기도 수원시 팔달구 월드컵로 310</p>
                    <p><strong>수용 인원:</strong> 43,959명</p>
                    <p><strong>개장:</strong> 2001년 (빅버드)</p>
                  </div>
                  <div className="mt-8 h-48 bg-suwon-blue/20 rounded-xl border border-suwon-gold flex items-center justify-center text-5xl">
                    📍
                  </div>
                </div>

                <div className="bg-black/60 p-8 rounded-3xl border-2 border-suwon-gold/30 hover:border-suwon-gold transition-colors">
                  <h3 className="text-2xl font-black text-suwon-gold mb-6">🏠 클럽하우스: 삼성 트레이닝 센터</h3>
                  <div className="space-y-3 text-sm text-white/80">
                    <p><strong>위치:</strong> 경기도 용인시 기흥구 보정동</p>
                    <p><strong>개장:</strong> 2007년</p>
                    <p><strong>특징:</strong> 국내 최대 규모 스포츠 재활 기관</p>
                  </div>
                  <div className="mt-8 h-48 bg-suwon-red/20 rounded-xl border border-suwon-gold flex items-center justify-center text-5xl">
                    🏢
                  </div>
                </div>
              </div>
            </section>
          )}

        </main>
      </div>

      <ChatBot />
      
      <footer className="bg-black py-12 border-t-4 border-suwon-red text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-suwon-gold font-black text-xl mb-4">SUWON SAMSUNG BLUEWINGS 2026</p>
          <p className="text-white/40 text-sm">© 2026 Suwon Samsung Bluewings. All Rights Reserved. This is a Fan Portal.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
