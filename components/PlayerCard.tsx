
import React, { useState } from 'react';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
  index: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[480px] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-2 border-suwon-gold shadow-2xl bg-black">
          <div className="h-[72%] relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#074CA1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#C8102E', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect width="300" height="400" fill={`url(#grad${index})`} />
              <circle cx="150" cy="140" r="70" fill="white" opacity="0.2" />
              <path d="M150 210 Q210 210 210 280 L90 280 Q90 210 150 210" fill="white" opacity="0.15" />
              <text x="50%" y="85%" textAnchor="middle" fill="white" fontSize="48" fontWeight="900" style={{ opacity: 0.3 }}>{player.number}</text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-6xl font-black text-white/40 select-none">{player.name}</span>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-all duration-500 -translate-x-full group-hover:translate-x-full" />
          </div>
          <div className="h-[28%] p-4 bg-gradient-to-b from-suwon-blue to-black border-t border-suwon-gold/30">
            <p className="text-suwon-gold text-xs font-bold tracking-widest uppercase">{player.pos_ko}</p>
            <h3 className="text-2xl font-black text-white mt-1">{player.name}</h3>
            <p className="text-white/60 text-sm">#{player.number}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 border-2 border-suwon-gold bg-gradient-to-br from-suwon-blue to-suwon-red overflow-y-auto">
          <h3 className="text-suwon-gold text-xl font-black mb-4 border-b border-suwon-gold/30 pb-2">{player.name} 상세 정보</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-suwon-gold font-bold">포지션</span>
              <span className="text-white font-medium">{player.pos_ko} ({player.pos})</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-suwon-gold font-bold">경력</span>
              <span className="text-white font-medium text-right text-xs max-w-[140px] leading-tight">{player.career}</span>
            </div>
            
            <div className="mt-6 space-y-3">
              {Object.entries(player.stats).map(([key, val]) => {
                const isNumeric = typeof val === 'number';
                const percentage = isNumeric && (val as number) <= 100 ? (val as number) : 50;
                
                return (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-suwon-gold text-xs font-bold">{key}</span>
                      <span className="text-white text-xs font-bold">{val}</span>
                    </div>
                    {isNumeric && (
                      <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-suwon-gold to-yellow-300 shadow-[0_0_8px_rgba(179,151,89,0.5)] transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <p className="mt-8 text-[10px] text-white/50 text-center italic">클릭하여 돌아가기</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
