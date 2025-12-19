import React, { useState, useEffect, useRef } from "react";

// https://i.ibb.co.com/MJtgJjx/590345885-122097504783140657-5106965453948841051-n.jpg
// https://i.ibb.co.com/67zRkqFq/download-15.png
// https://i.ibb.co.com/WvtDhyrk/download-14.png
// https://i.ibb.co.com/tTg2F4p0/download-13.png
// https://i.ibb.co.com/C5dDLzQF/download-12.png
const candidatesData = [
  {
    candidate_id: "JAUCSU-2025-001",
    name: "নাহিদ হাসান রাসেল",
    photo_url:
      "https://i.ibb.co.com/bjM9vrg3/594842180-122104749537140657-8065090109621658289-n.jpg",
    gender: "Male",
    academic_info: {
      faculty: "Social Sciences",
      department: "Social Work",
      session: "২০১৮-১৯",
      year: "4th Year",
      hall: "N/A",
    },
    nomination: {
      position: "সাহিত্য ও সংস্কৃতি বিষয়ক সম্পাদক",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 17,
    },
  },
  {
    candidate_id: "JAUCSU-2025-002",
    name: "মোসা.সায়মা খাতুন",
    photo_url:
      "https://i.ibb.co.com/hJvSFPDr/591872612-122101633221140657-2901719402324544308-n.jpg",
    gender: "Female",
    academic_info: {
      faculty: "Arts",
      department: "দর্শন",
      session: "২০২৩-২০২৪",
      year: "1st Year",
      hall: "N/A",
    },
    nomination: {
      position: "কার্যনির্বাহী সদস্য (হল সংসদ)",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 3,
    },
  },
  {
    candidate_id: "JAUCSU-2025-003",
    name: "আবদুল আলিম আরিফ",
    photo_url:
      "https://i.ibb.co.com/rKsZnp6T/592283471-860098563625712-6085019031187159599-n.jpg",
    gender: "Male",
    academic_info: {
      faculty: "Law",
      department: "আইন ও ভূমি প্রশাসন",
      session: "২০১৮-১৯",
      year: "2nd Year",
      hall: "N/A",
    },
    nomination: {
      position: "জিএস",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 12,
    },
  },
  {
    candidate_id: "JAUCSU-2025-004",
    name: "মাসুদ রানা",
    photo_url:
      "https://i.ibb.co.com/Y7t5xF4M/591730026-860596580242577-2191601091466249139-n.jpg",
    gender: "Male",
    academic_info: {
      faculty: "Physical Sciences",
      department: "পদার্থবিজ্ঞান",
      session: "২০১৯-২০",
      year: "Masters",
      hall: "N/A",
    },
    nomination: {
      position: "এজিএস",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 22,
    },
  },
  {
    candidate_id: "JAUCSU-2025-005",
    name: "মোঃ নুর নবী",
    photo_url:
      "https://i.ibb.co.com/qM0RKBd0/592131383-861055406863361-7182526409003956215-n.jpg",
    gender: "Male",
    academic_info: {
      faculty: "Arts",
      department: "ইসলামিক স্টাডিজ",
      session: "২০১৯-২০২০",
      year: "3rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "মুক্তিযুদ্ধ ও গণতন্ত্র সম্পাদক",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 28,
    },
  },
  {
    candidate_id: "JAUCSU-2025-006",
    name: "মোঃ রিয়াজুল ইসলাম",
    photo_url:
      "https://i.ibb.co.com/MJtgJjx/590345885-122097504783140657-5106965453948841051-n.jpg",
    gender: "Male",
    academic_info: {
      faculty: "Law",
      department: "আইন",
      session: "২০১৮-১৯",
      year: "3rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "ভিপি",
      panel: "অদম্য জবিয়ান ঐক্য",
      ballot_no: 23,
    },
  },
  {
    candidate_id: "JAUCSU-2025-007",
    name: "এ কে এম রাকিব",
    photo_url: "https://i.ibb.co.com/67zRkqFq/download-15.png",
    gender: "Male",
    academic_info: {
      faculty: "Biological Sciences",
      department: "উদ্ভিদ বিজ্ঞান",
      session: "২০১৭-১৮",
      year: "3rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "ভিপি",
      panel: "ঐক্যবদ্ধ নির্ভীক জবিয়ান",
      ballot_no: 32,
    },
  },
  {
    candidate_id: "JAUCSU-2025-008",
    name: "খাদিজাতুল কুবরা",
    photo_url: "https://i.ibb.co.com/WvtDhyrk/download-14.png",
    gender: "Female",
    academic_info: {
      faculty: "Social Sciences",
      department: "রাষ্ট্রবিজ্ঞান",
      session: "২০১৯-২০২০",
      year: "3rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "জিএস",
      panel: "ঐক্যবদ্ধ নির্ভীক জবিয়ান",
      ballot_no: 35,
    },
  },
  {
    candidate_id: "JAUCSU-2025-009",
    name: "বিএম আতিকুর রহমান তানজিল",
    photo_url: "https://i.ibb.co.com/tTg2F4p0/download-13.png",
    gender: "Male",
    academic_info: {
      faculty: "Arts",
      department: "ইসলামিক স্টাডিজ",
      session: "২০২১-২২",
      year: "3rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "এজিএস",
      panel: "ঐক্যবদ্ধ নির্ভীক জবিয়ান",
      ballot_no: 33,
    },
  },
  {
    candidate_id: "JAUCSU-2025-010",
    name: "উম্মে মাবুদা",
    photo_url: "https://i.ibb.co.com/C3mfKjwq/497873949-703575708775430-6822072361000385733-n.jpg",
    gender: "Female",
    academic_info: {
      faculty: "Social Sciences",
      department: "সমাজকর্ম বিভাগ",
      session: "২০২০-২১",
      year: "4rd Year",
      hall: "N/A",
    },
    nomination: {
      position: "জিএস",
      panel: "স্বতন্ত্র",
      ballot_no: 11, 
    },
  },
//   উম্মে মাবুদা
// সমাজকর্ম বিভাগ
// ২০২০-২১ সেশন,
];

const CandidateTracker = () => {
  const [searchInput, setSearchInput] = useState("");
  const [foundCandidate, setFoundCandidate] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]); // ALL terminal text stored here
  const [activeSound, setActiveSound] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showAllCandidates, setShowAllCandidates] = useState(false);
  const [currentTypingLine, setCurrentTypingLine] = useState("");

  const audioContextRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const terminalRef = useRef(null);

  // Auto-scroll to bottom whenever content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines, currentTypingLine]);

  // Initialize
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();

    // Initial terminal messages - stored permanently
    const initialMessages = [
      "$ SYSTEM BOOTING...",
      "$ LOADING CANDIDATE DATABASE...",
      `$ ${candidatesData.length} CANDIDATES LOADED`,
      "$ READY FOR SEARCH",
      "$ ENTER BALLOT NUMBER BELOW",
      "$ ========================================",
    ];

    setTerminalLines(initialMessages);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Sound effects
  const playSound = (frequency, type = "sine", duration = 0.1) => {
    if (!activeSound || !audioContextRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;
    gainNode.gain.value = 0.1;

    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      gainNode.disconnect();
    }, duration * 1000);
  };

  const playTypingSound = () => {
    playSound(1200 + Math.random() * 400, "square", 0.03);
  };

  const playSearchSound = () => {
    playSound(800, "sawtooth", 0.2);
  };

  const playFoundSound = () => {
    if (!activeSound || !audioContextRef.current) return;

    const frequencies = [523.25, 659.25, 783.99];
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.frequency.value = freq;
        oscillator.type = "triangle";
        gainNode.gain.value = 0.1;

        oscillator.start();
        setTimeout(() => oscillator.stop(), 150);
      }, index * 150);
    });
  };

  const playErrorSound = () => {
    playSound(200, "sawtooth", 0.3);
  };

  const playButtonSound = () => {
    playSound(600, "sine", 0.1);
  };

  const searchCandidate = () => {
    if (!searchInput.trim()) return;

    setIsSearching(true);
    playSearchSound();

    // Clear previous candidate
    setFoundCandidate(null);
    setCurrentTypingLine("");

    const ballotNumber = parseInt(searchInput);
    const candidate = candidatesData.find(
      (c) => c.nomination.ballot_no === ballotNumber
    );

    // Add search query to terminal - STORED PERMANENTLY
    setTerminalLines((prev) => [
      ...prev,
      `$ SEARCHING FOR BALLOT NO: ${ballotNumber}`,
    ]);

    setTimeout(() => {
      if (candidate) {
        playFoundSound();
        setFoundCandidate(candidate);

        // Add found message to terminal
        setTerminalLines((prev) => [...prev, "$ CANDIDATE FOUND"]);

        // Prepare candidate details
        const candidateDetails = [
          "========================================",
          `ID: ${candidate.candidate_id}`,
          `NAME: ${candidate.name}`,
          `POSITION: ${candidate.nomination.position}`,
          `PANEL: ${candidate.nomination.panel}`,
          `BALLOT NO: ${candidate.nomination.ballot_no}`,
          "",
          "ACADEMIC DETAILS:",
          `FACULTY: ${candidate.academic_info.faculty}`,
          `DEPARTMENT: ${candidate.academic_info.department}`,
          `SESSION: ${candidate.academic_info.session}`,
          `YEAR: ${candidate.academic_info.year}`,
          `HALL: ${candidate.academic_info.hall}`,
          `GENDER: ${candidate.gender}`,
          "",
          "SEARCH COMPLETE",
          "========================================",
        ];

        // Start typing animation - lines will be ADDED to terminalLines
        startTypingAnimation(candidateDetails);
      } else {
        playErrorSound();
        setTerminalLines((prev) => [
          ...prev,
          "$ ERROR: CANDIDATE NOT FOUND",
          "$ PLEASE CHECK BALLOT NUMBER",
          `$ Available ballot numbers: ${candidatesData
            .map((c) => c.nomination.ballot_no)
            .join(", ")}`,
          "$ ========================================",
        ]);
      }
      setIsSearching(false);
    }, 800);
  };

  const startTypingAnimation = (lines) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    let lineIndex = 0;
    let charIndex = 0;
    setIsTyping(true);

    const typeNextCharacter = () => {
      if (lineIndex >= lines.length) {
        // Animation complete
        setIsTyping(false);
        clearInterval(typingIntervalRef.current);
        return;
      }

      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        // Still typing current character
        setCurrentTypingLine(currentLine.substring(0, charIndex + 1));
        charIndex++;

        // Play sound for non-space characters
        if (currentLine[charIndex - 1] !== " ") {
          playTypingSound();
        }
      } else {
        // Line complete - ADD TO PERMANENT STORAGE
        setTerminalLines((prev) => [...prev, `$ ${currentLine}`]);
        setCurrentTypingLine("");

        // Move to next line
        lineIndex++;
        charIndex = 0;

        // If line is empty, add it immediately without typing
        if (lineIndex < lines.length && lines[lineIndex] === "") {
          setTerminalLines((prev) => [...prev, `$ `]);
          lineIndex++;
        }
      }
    };

    // Start typing at 40ms per character
    typingIntervalRef.current = setInterval(typeNextCharacter, 40);
  };

  const clearSearch = () => {
    playButtonSound();
    setSearchInput("");
    setFoundCandidate(null);
    setCurrentTypingLine("");
    setTerminalLines((prev) => [
      ...prev,
      "$ ========================================",
      "$ SYSTEM RESET",
      "$ READY FOR NEW SEARCH",
      "$ ========================================",
    ]);
  };

  const toggleSound = () => {
    setActiveSound(!activeSound);
    playButtonSound();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isSearching && !isTyping) {
      searchCandidate();
    }
  };

  const quickSelectCandidate = (ballotNo) => {
    setSearchInput(ballotNo.toString());
    playButtonSound();
  };

  return (
    <div 
      className="min-h-screen text-green-400 font-mono p-4 md:p-8 relative"
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/JwXNDwXD/Global-network-generated.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(transparent 65%, rgba(0, 255, 0, 0.1) 75%, transparent 85%),
                           linear-gradient(90deg, transparent 65%, rgba(0, 255, 0, 0.1) 75%, transparent 85%),
                           linear-gradient(45deg, transparent 70%, rgba(0, 255, 0, 0.05) 75%, transparent 80%),
                           linear-gradient(-45deg, transparent 70%, rgba(0, 255, 0, 0.05) 75%, transparent 80%)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Scanning lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 animate-scan" style={{
          background: 'linear-gradient(transparent 95%, rgba(0, 255, 0, 0.1) 100%)',
          backgroundSize: '100% 20px',
          animation: 'scan 3s linear infinite',
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-2 border-green-500/50 rounded-lg p-4 md:p-6 mb-6 bg-black/70 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,0,0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-300">
                <span className="text-red-400">{"<"}</span>
                <span className="animate-pulse bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> JAUCSU </span>
                <span className="text-blue-400">CANDIDATE</span>
                <span className="text-yellow-400"> TRACKER </span>
                <span className="text-red-400">{">"}</span>
              </h1>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                SYSTEM v2.5.1 | SECURE ACCESS ONLY | GLOBAL NETWORK ACTIVE
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex space-x-4">
              <button
                onClick={toggleSound}
                className={`px-4 py-2 border-2 ${
                  activeSound
                    ? "border-blue-500 text-blue-300 bg-blue-900/20"
                    : "border-gray-600 text-gray-400"
                } hover:bg-black/50 transition-all backdrop-blur-sm`}
              >
                {activeSound ? "🔊 AUDIO ON" : "🔇 AUDIO OFF"}
              </button>
              <button
                onClick={clearSearch}
                className="px-4 py-2 border-2 border-red-500 text-red-300 hover:bg-red-500/10 transition-all backdrop-blur-sm"
              >
                CLEAR SEARCH
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center border-2 border-green-600/70 bg-black/70 p-2 backdrop-blur-sm">
                  <span className="text-green-400 mr-2">$</span>
                  <input
                    type="number"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="ENTER BALLOT NUMBER (e.g., 3, 12, 17, 22, 28)"
                    className="flex-1 bg-transparent text-green-300 outline-none placeholder-green-700"
                    disabled={isSearching || isTyping}
                  />
                  {(isSearching || isTyping) && (
                    <span className="animate-pulse text-green-400 ml-2">
                      {isSearching ? "SCANNING..." : "TYPING..."}
                    </span>
                  )}
                </div>
                <div className="mt-2 text-green-500 text-sm">
                  <span className="animate-pulse">▸</span> Available ballot
                  numbers:{" "}
                  {candidatesData.map((c) => c.nomination.ballot_no).join(", ")}
                </div>
              </div>

              <button
                onClick={searchCandidate}
                disabled={isSearching || !searchInput || isTyping}
                className={`px-8 py-3 border-2 font-bold backdrop-blur-sm ${
                  isSearching || !searchInput || isTyping
                    ? "border-gray-600 text-gray-400"
                    : "border-green-500 text-green-300 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                } transition-all`}
              >
                {isSearching ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⟳</span> SCANNING...
                  </span>
                ) : (
                  "INITIATE SEARCH"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Terminal Output - ALL TEXT STAYS HERE PERMANENTLY */}
          <div className="border-2 border-green-500/50 rounded-lg bg-black/70 backdrop-blur-md h-[500px] overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <div className="border-b border-green-700 p-3 flex justify-between items-center bg-black/50">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-300 font-bold">
                  TERMINAL_OUTPUT
                </span>
              </div>
              <span className="text-green-600 text-sm">
                LINES: {terminalLines.length}
              </span>
            </div>

            <div
              ref={terminalRef}
              className="p-4 h-[420px] overflow-y-auto terminal-scroll font-mono text-sm bg-gradient-to-b from-black/40 to-transparent"
            >
              {/* ALL STORED LINES - NEVER DISAPPEAR */}
              {terminalLines.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className="text-green-300">{line}</span>
                </div>
              ))}

              {/* CURRENTLY TYPING LINE */}
              {currentTypingLine && (
                <div className="mb-1">
                  <span className="text-green-500">$</span>
                  <span className="ml-2 text-green-300">
                    {currentTypingLine}
                  </span>
                  <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-blink"></span>
                </div>
              )}

              {/* TYPING STATUS */}
              {isTyping && !currentTypingLine && (
                <div className="mb-1">
                  <span className="text-green-500">$</span>
                  <span className="ml-2 text-green-300 animate-pulse">
                    Processing...
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Candidate Display */}
          <div className="border-2 border-green-500/50 rounded-lg bg-black/70 backdrop-blur-md h-[500px] md:h-[550px] lg:h-[500px] overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            {/* Header - Responsive */}
            <div className="border-b border-green-700 p-3 bg-black/50">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h2 className="text-green-300 font-bold text-lg sm:text-xl">
                  CANDIDATE_DOSSIER
                </h2>
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="text-green-600 text-sm">
                    {foundCandidate ? "ACCESS GRANTED" : "AWAITING SEARCH"}
                  </span>
                  {foundCandidate && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-sm hidden sm:inline">
                        LIVE
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 h-[calc(100%-70px)] overflow-y-auto">
              {foundCandidate ? (
                <div className="animate-fadeIn">
          
                  {/* Main Content Grid - Fully Responsive */}
                  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3 lg:gap-4 h-auto md:h-[340px]">
                    {/* Photo Section - Full width on mobile, left column on desktop */}
                    <div className="md:col-span-1 md:row-span-3 p-3 border-2 border-green-400/30 rounded-lg bg-black/50">
                      <div className="flex flex-col sm:flex-row md:flex-col items-center gap-4 md:gap-3">
                        {/* Photo Container */}
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-full md:h-48 overflow-hidden border-4 border-green-500/20 rounded-md">
                            <img
                              src={foundCandidate.photo_url}
                              alt={foundCandidate.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                  foundCandidate.name
                                )}&background=0f0&color=000&size=256&bold=true`;
                              }}
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500 flex items-center justify-center border-2 border-black">
                            <span className="text-black font-bold text-sm sm:text-base">
                              {foundCandidate.nomination.ballot_no}
                            </span>
                          </div>
                        </div>

                        {/* Info beside photo on mobile, below on desktop */}
                        <div className="flex-1 w-full sm:w-auto md:w-full">
                          <div className="text-center mb-3">
                            <div className="text-green-500 text-sm font-semibold">
                              PHOTO_ID
                            </div>
                            <div className="text-green-300 text-sm line-clamp-2">
                              {foundCandidate.name}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            <div className="bg-green-900/30 p-2 rounded">
                              <div className="text-green-500 text-xs">
                                GENDER
                              </div>
                              <div className="text-green-300 font-medium text-sm">
                                {foundCandidate.gender}
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Info Section - Full width on mobile, spans 3 columns on desktop */}
                    <div className="md:col-span-3 md:row-span-2 p-3 sm:p-4 border-2 border-green-400/30 rounded-lg bg-black/50 overflow-y-auto">
                      {/* Name and Position Header - Stack on mobile, row on larger screens */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 lg:mb-6 gap-3">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-1">
                            {foundCandidate.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-green-900/50 px-3 py-1 rounded-full border border-green-700">
                              <span className="text-green-300 font-semibold text-sm sm:text-base">
                                {foundCandidate.nomination.position}
                              </span>
                            </div>
                            <div className="bg-blue-900/50 px-3 py-1 rounded-full border border-blue-700">
                              <span className="text-blue-300 font-semibold text-sm sm:text-base">
                                {foundCandidate.nomination.panel}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Academic Profile - Responsive Grid */}
                      <div className="mb-4 lg:mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-green-400 flex items-center gap-2">
                            <span className="text-yellow-400">▸</span> ACADEMIC
                            PROFILE
                          </h4>
                          <span className="text-green-600 text-xs bg-green-900/30 px-2 py-1 rounded self-start sm:self-auto">
                            {Object.keys(foundCandidate.academic_info).length}{" "}
                            RECORDS
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {Object.entries(foundCandidate.academic_info).map(
                            ([key, value], index) => (
                              <div
                                key={key}
                                className={`border border-green-800/50 rounded p-3 hover:border-green-500 hover:bg-green-900/20 transition-all cursor-help ${
                                  index === 0
                                    ? "sm:col-span-2 lg:col-span-3 bg-green-900/30"
                                    : ""
                                }`}
                                title={value}
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-green-500 text-xs font-semibold truncate">
                                    {key.toUpperCase().replace(/_/g, " ")}
                                  </span>
                                  {index === 0 && (
                                    <span className="text-yellow-400 text-xs flex-shrink-0 ml-2">
                                      PRIMARY
                                    </span>
                                  )}
                                </div>
                                <p className="text-green-300 text-sm mt-1 line-clamp-2 hover:line-clamp-none transition-all">
                                  {value}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Status & Actions Footer - Full width on mobile, bottom row on desktop */}
                    <div className="md:col-span-3 md:row-span-1 p-3 border-2 border-green-400/30 rounded-lg bg-black/50">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        {/* System Status - Full width on mobile, spans 2 columns on larger screens */}
                        <div className="sm:col-span-2">
                          <div className="text-green-500 text-xs mb-2">
                            SYSTEM STATUS
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-green-300 text-sm">DB</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-green-300 text-sm">
                                NET
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-green-300 text-sm">
                                SEC
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-green-300 text-sm">
                                API
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats - Stack in row on larger screens */}
                        <div className="flex justify-between sm:block text-center">
                          <div className="text-green-500 text-xs">ACCESS</div>
                          <div className="text-green-300 font-bold text-lg">
                            3
                          </div>
                        </div>

                        <div className="flex justify-between sm:block text-center">
                          <div className="text-green-500 text-xs">RECORD</div>
                          <div className="flex items-center gap-1 justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-green-300 font-bold">
                              CLEAN
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Empty State - Responsive */
                <div className="h-full flex flex-col items-center justify-center text-green-700 px-4">
                  <div className="text-5xl sm:text-6xl mb-4 animate-pulse">
                    🔍
                  </div>
                  <p className="text-lg sm:text-xl mb-2 font-semibold text-center">
                    NO CANDIDATE SELECTED
                  </p>
                  <p className="text-center text-green-600/80 mb-6 max-w-md">
                    Enter ballot number to initiate search
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-green-600/60 text-sm w-full max-w-md">
                    <div className="p-3 border border-green-800/50 rounded bg-black/30">
                      <div className="font-semibold mb-1">1. INPUT</div>
                      <div className="text-xs">Enter Ballot #</div>
                    </div>
                    <div className="p-3 border border-green-800/50 rounded bg-black/30">
                      <div className="font-semibold mb-1">2. SEARCH</div>
                      <div className="text-xs">Press Enter</div>
                    </div>
                    <div className="p-3 border border-green-800/50 rounded bg-black/30">
                      <div className="font-semibold mb-1">3. VIEW</div>
                      <div className="text-xs">Review Details</div>
                    </div>
                  </div>

                  {/* Mobile Instructions */}
                  <div className="mt-8 text-green-600/50 text-xs text-center block sm:hidden">
                    <p>
                      💡 <strong>Tip:</strong> Use portrait mode for best
                      experience
                    </p>
                    <p>Swipe horizontally to see all information</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All Candidates Quick View */}
        <div className="border-2 border-green-500/50 rounded-lg bg-black/70 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
          <div className="border-b border-green-700 p-3 bg-black/50 flex justify-between items-center">
            <h2 className="text-green-300 font-bold">ALL_CANDIDATES_INDEX</h2>
            <button
              onClick={() => {
                setShowAllCandidates(!showAllCandidates);
                playButtonSound();
              }}
              className="text-green-400 hover:text-green-300 text-sm hover:scale-105 transition-transform"
            >
              {showAllCandidates ? "▲ HIDE" : "▼ SHOW ALL"}
            </button>
          </div>

          {showAllCandidates && (
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {candidatesData.map((candidate) => (
                  <div
                    key={candidate.candidate_id}
                    className={`border ${
                      foundCandidate?.candidate_id === candidate.candidate_id
                        ? "border-green-400 bg-green-900/30"
                        : "border-green-800/50"
                    } rounded p-3 hover:border-green-500 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] bg-black/40 backdrop-blur-sm`}
                    onClick={() =>
                      quickSelectCandidate(candidate.nomination.ballot_no)
                    }
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-green-600/50">
                        <img
                          src={candidate.photo_url}
                          alt={candidate.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              candidate.name
                            )}&background=0f0&color=000&size=40`;
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-green-300 font-bold">
                          {candidate.name.split(" ")[0]}
                        </div>
                        <div className="text-green-500 text-xs">
                          {candidate.nomination.position}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-green-600 text-sm font-bold">
                        Ballot #{candidate.nomination.ballot_no}
                      </span>
                      <span className="text-green-400 text-xs">
                        {candidate.academic_info.faculty.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-green-700 text-sm border-t border-green-800 pt-4 backdrop-blur-sm bg-black/30 rounded-lg p-4">
          <p className="text-green-500">
            <span className="text-green-300">JAUCSU ELECTION SYSTEM 2025</span> • SECURE DATABASE ACCESS • ALL RIGHTS RESERVED WebDevWithRasel
          </p>
          <p className="mt-1 text-green-600">
            SYSTEM TIME: {new Date().toLocaleTimeString()} | LINES LOGGED:{" "}
            <span className="text-green-400">{terminalLines.length}</span> | GLOBAL NETWORK: <span className="text-green-400">ACTIVE</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes scan {
          0% {
            background-position: 0 -100px;
          }
          100% {
            background-position: 0 calc(100% + 100px);
          }
        }

        @keyframes matrixRain {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .terminal-scroll::-webkit-scrollbar {
          width: 8px;
        }

        .terminal-scroll::-webkit-scrollbar-track {
          background: rgba(0, 255, 0, 0.05);
        }

        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 0, 0.2);
          border-radius: 4px;
        }

        .terminal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 0, 0.3);
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }

        /* Glow effects */
        .shadow-glow {
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CandidateTracker;