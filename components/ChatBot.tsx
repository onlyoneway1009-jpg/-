
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: '반갑습니다! 수원 삼성 블루윙즈 2026 시즌의 모든 것을 알려드리는 AI 비서입니다. 궁금한 점이 있으신가요? 💙🤍❤️' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiMsg = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiMsg }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[2000] font-sans">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-black/90 border-2 border-suwon-gold rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-lg">
          {/* Header */}
          <div className="bg-suwon-blue p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-suwon-gold flex items-center justify-center font-bold text-black text-xs">AI</div>
              <h3 className="text-white font-bold">블루윙즈 AI 비서</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-suwon-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-suwon-red text-white rounded-tr-none' 
                  : 'bg-suwon-blue/50 text-white rounded-tl-none border border-suwon-blue'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-suwon-blue/30 text-white/50 p-3 rounded-2xl text-xs animate-pulse">전술 분석 중...</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="질문을 입력하세요..."
              className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-suwon-gold"
            />
            <button 
              onClick={handleSend}
              className="bg-suwon-gold text-black px-4 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all"
            >
              전송
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-suwon-blue rounded-full shadow-2xl flex items-center justify-center border-4 border-suwon-gold hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <div className="absolute -top-2 -right-1 bg-suwon-red text-[10px] px-2 py-0.5 rounded-full font-bold animate-bounce shadow-lg">New</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:text-suwon-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
