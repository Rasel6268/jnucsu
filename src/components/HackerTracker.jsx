import React, { useState, useEffect, useRef } from 'react';

const HackerTracker = () => {
  const [targets, setTargets] = useState([
    { id: 1, name: 'TARGET_ALPHA', ip: '192.168.1.45', status: 'TRACKING', risk: 'HIGH' },
    { id: 2, name: 'TARGET_BETA', ip: '10.0.0.23', status: 'ACTIVE', risk: 'MEDIUM' },
    { id: 3, name: 'TARGET_GAMMA', ip: '172.16.0.89', status: 'DORMANT', risk: 'LOW' },
    { id: 4, name: 'TARGET_DELTA', ip: '203.0.113.17', status: 'TRACKING', risk: 'CRITICAL' },
  ]);

  const [isTracking, setIsTracking] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [hackProgress, setHackProgress] = useState(0);
  const [activeSound, setActiveSound] = useState(true);
  
  const audioRef = useRef(null);
  const typingSoundRef = useRef(null);
  const hackSoundRef = useRef(null);

  // Terminal messages
  const terminalMessages = [
    "INITIALIZING TRACKING SYSTEM...",
    "SCANNING NETWORK...",
    "ANALYZING DATA STREAMS...",
    "ENCRYPTION BYPASSED...",
    "TARGETS ACQUIRED...",
    "ESTABLISHING SECURE CONNECTION...",
    "SATELLITE LINK ACTIVATED...",
  ];

  // Sound effects
  const playClickSound = () => {
    if (!activeSound) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    setTimeout(() => oscillator.stop(), 100);
  };

  const playTypingSound = () => {
    if (!activeSound) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 1200;
    oscillator.type = 'sawtooth';
    gainNode.gain.value = 0.05;
    
    oscillator.start();
    setTimeout(() => oscillator.stop(), 50);
  };

  const playHackSound = () => {
    if (!activeSound) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.5);
    oscillator.type = 'sawtooth';
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500);
  };

  // Initialize terminal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalMessages.length) {
        setTerminalOutput(prev => [...prev, terminalMessages[index]]);
        playTypingSound();
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Simulate hacking progress
  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setHackProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isTracking]);

  const toggleTracking = () => {
    playClickSound();
    setIsTracking(!isTracking);
    if (!isTracking) {
      playHackSound();
    }
  };

  const addTarget = () => {
    playClickSound();
    const newTarget = {
      id: targets.length + 1,
      name: `TARGET_${String.fromCharCode(65 + targets.length)}`,
      ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      status: 'TRACKING',
      risk: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][Math.floor(Math.random() * 4)]
    };
    setTargets([...targets, newTarget]);
  };

  const toggleSound = () => {
    setActiveSound(!activeSound);
    playClickSound();
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500 animate-pulse';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'TRACKING': return 'text-green-400 animate-pulse';
      case 'ACTIVE': return 'text-blue-400';
      case 'DORMANT': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 font-mono">
      {/* Matrix Rain Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="matrix-rain"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-2 border-green-500 rounded-lg p-4 mb-6 bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-green-400 animate-pulse">
                <span className="text-red-500">❮</span> SYSTEM_TRACKER <span className="text-red-500">❯</span>
              </h1>
              <p className="text-green-300 text-sm mt-1">// SECURE TERMINAL v2.4.7</p>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={toggleTracking}
                className={`px-4 py-2 font-bold border-2 ${isTracking ? 'border-red-500 text-red-400' : 'border-green-500 text-green-400'} hover:bg-black/50 transition-all`}
              >
                {isTracking ? '■ TERMINATE' : '▶ INITIATE'}
              </button>
              <button 
                onClick={toggleSound}
                className={`px-4 py-2 font-bold border-2 ${activeSound ? 'border-blue-500 text-blue-400' : 'border-gray-500 text-gray-400'} hover:bg-black/50 transition-all`}
              >
                {activeSound ? '🔊 SOUND ON' : '🔇 SOUND OFF'}
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-green-800 p-3">
              <p className="text-gray-400 text-sm">ACTIVE TRACKS</p>
              <p className="text-green-400 text-2xl font-bold">{targets.filter(t => t.status === 'TRACKING').length}</p>
            </div>
            <div className="border border-green-800 p-3">
              <p className="text-gray-400 text-sm">TOTAL TARGETS</p>
              <p className="text-blue-400 text-2xl font-bold">{targets.length}</p>
            </div>
            <div className="border border-green-800 p-3">
              <p className="text-gray-400 text-sm">CRITICAL RISK</p>
              <p className="text-red-400 text-2xl font-bold">{targets.filter(t => t.risk === 'CRITICAL').length}</p>
            </div>
            <div className="border border-green-800 p-3">
              <p className="text-gray-400 text-sm">SYSTEM STATUS</p>
              <p className={`text-2xl font-bold ${isTracking ? 'text-green-400 animate-pulse' : 'text-red-400'}`}>
                {isTracking ? 'ONLINE' : 'OFFLINE'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Terminal Output */}
          <div className="border-2 border-green-500 rounded-lg bg-black/80 backdrop-blur-sm h-96 overflow-hidden">
            <div className="border-b border-green-800 p-3 flex justify-between items-center">
              <h2 className="text-green-400 font-bold">TERMINAL_OUTPUT</h2>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto terminal-scroll">
              {terminalOutput.map((line, index) => (
                <div key={index} className="mb-2">
                  <span className="text-green-400">$</span>
                  <span className="text-green-300 ml-2 animate-typing">{line}</span>
                  {index === terminalOutput.length - 1 && (
                    <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-blink"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tracking Progress */}
          <div className="border-2 border-green-500 rounded-lg bg-black/80 backdrop-blur-sm h-96 overflow-hidden">
            <div className="border-b border-green-800 p-3">
              <h2 className="text-green-400 font-bold">TRACKING_PROGRESS</h2>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-green-300">DATA_EXTRACTION</span>
                  <span className="text-green-400">{hackProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${hackProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-green-300">ENCRYPTION_BYPASS</span>
                  <span className="text-green-400">{(hackProgress * 0.8).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${hackProgress * 0.8}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button 
                  onClick={addTarget}
                  className="px-6 py-3 border-2 border-green-500 text-green-400 hover:bg-green-500/10 transition-all font-bold"
                >
                  + ADD TARGET
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Targets Grid */}
        <div className="mt-6 border-2 border-green-500 rounded-lg bg-black/80 backdrop-blur-sm">
          <div className="border-b border-green-800 p-3 flex justify-between items-center">
            <h2 className="text-green-400 font-bold">TARGET_MATRIX</h2>
            <span className="text-green-300 text-sm">LAST_UPDATE: {new Date().toLocaleTimeString()}</span>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {targets.map(target => (
                <div 
                  key={target.id} 
                  className="border border-green-800 p-4 hover:border-green-500 transition-all hover:bg-black/50 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-green-400 font-bold text-lg group-hover:text-green-300">{target.name}</h3>
                      <p className="text-gray-400 text-sm">IP: {target.ip}</p>
                    </div>
                    <div className={`px-2 py-1 border ${getRiskColor(target.risk)} border-current text-xs`}>
                      {target.risk}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${getStatusColor(target.status)}`}>
                      STATUS: {target.status}
                    </span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => playClickSound()}
                        className="text-xs border border-blue-500 text-blue-400 px-2 py-1 hover:bg-blue-500/10"
                      >
                        SCAN
                      </button>
                      <button 
                        onClick={() => playHackSound()}
                        className="text-xs border border-red-500 text-red-400 px-2 py-1 hover:bg-red-500/10"
                      >
                        TRACE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-green-800 text-sm">
          <p>SYSTEM PROTECTED: AES-256 ENCRYPTION ACTIVE</p>
          <p className="mt-1">ALL ACTIVITIES LOGGED AND MONITORED</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(transparent 90%, rgba(0, 255, 0, 0.1) 100%);
          background-size: 100% 4px;
          animation: matrixRain 20s linear infinite;
        }
        
        @keyframes matrixRain {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        .terminal-scroll::-webkit-scrollbar {
          width: 8px;
        }
        
        .terminal-scroll::-webkit-scrollbar-track {
          background: rgba(0, 255, 0, 0.1);
        }
        
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 0, 0.3);
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(40, end);
        }
      `}</style>
    </div>
  );
};

export default HackerTracker;