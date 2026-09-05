'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Moon, Sun, MessageCircle, Minimize2 } from 'lucide-react';
import Image from 'next/image';
import { getNode, type ConversationOption } from '@/data/chatbotConversation';
import { useChatPersistence, type ChatMessage } from '@/hooks/useChatPersistence';

// Animation variants
const chatWindowVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20,
    originX: 1,
    originY: 1
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 400, 
      damping: 25 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20, 
    transition: { duration: 0.2 } 
  }
};

const fabVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const optionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.2 }
  })
};

// Helper to parse markdown-like bold text
const parseContent = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const [hasRestoredSession, setHasRestoredSession] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);
  const isFirstRender = useRef(true);

  const { loadState, saveState, clearState } = useChatPersistence();

  // Load persisted state on mount
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      const savedState = loadState();
      
      if (savedState && savedState.messages.length > 0) {
        setMessages(savedState.messages);
        setCurrentNodeId(savedState.currentNodeId);
        setIsOpen(savedState.isOpen);
        setHasRestoredSession(true);
        hasInitialized.current = true;
      }
    }
  }, [loadState]);

  // Save state when it changes
  useEffect(() => {
    if (!isFirstRender.current && hasInitialized.current) {
      saveState({
        messages,
        currentNodeId,
        isOpen
      });
    }
  }, [messages, currentNodeId, isOpen, saveState]);

  // Load dark mode preference on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('chatbot-dark-mode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  // Save dark mode preference when it changes
  useEffect(() => {
    localStorage.setItem('chatbot-dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  // Initialize welcome messages when chat opens for first time
  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      hasInitialized.current = true;
      const welcomeNode = getNode('welcome');
      addBotMessages(welcomeNode.messages);
    }
  }, [isOpen]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-popup for first-time visitors after 5 seconds
  useEffect(() => {
    const hasSeenAutoPopup = localStorage.getItem('chatbot-auto-popup-shown');
    const savedState = loadState();
    
    // Only auto-popup if:
    // - User hasn't seen auto-popup before
    // - Chat is not already open
    // - No previous conversation exists
    if (!hasSeenAutoPopup && !isOpen && (!savedState || savedState.messages.length === 0)) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('chatbot-auto-popup-shown', 'true');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  const addBotMessages = async (botMessages: string[]) => {
    setIsTyping(true);
    
    for (let i = 0; i < botMessages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, i === 0 ? 300 : 600));
      
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}-${i}`,
          type: 'bot',
          content: botMessages[i]
        }
      ]);
    }
    
    setIsTyping(false);
  };

  const handleOptionClick = async (option: ConversationOption) => {
    // Handle CTA actions - open links before showing messages
    if (option.nextId === 'action-whatsapp') {
      window.open('https://wa.me/6281999900900', '_blank');
    } else if (option.nextId === 'action-email') {
      window.open('mailto:dadikwah75@gmail.com', '_blank');
    } 
    // Brand Tools actions
    else if (option.nextId === 'action-inspection') {
      window.open('https://drive.google.com/file/d/1yxQbBPyxf0DeqtDBVtQgmhsSKZHaG4Og/view?usp=sharing', '_blank');
    } else if (option.nextId === 'action-checkup') {
      window.open('https://docs.google.com/forms/d/1IpAGuvIX-5RN4y2aFa8G-UbdIz3J14or09TXovOtFjU/edit', '_blank');
    } else if (option.nextId === 'action-tracking') {
      window.open('https://drive.google.com/file/d/15Y0EiBmUiyh0x9_6JCyO-5r5cMnyE-Lh/view?usp=sharing', '_blank');
    }
    // Social media actions
    else if (option.nextId === 'action-youtube') {
      window.open('https://www.youtube.com/@DadikwahyuChang', '_blank');
    } else if (option.nextId === 'action-instagram') {
      window.open('https://www.instagram.com/dadikwahyuchangutero/', '_blank');
    } else if (option.nextId === 'action-tiktok') {
      window.open('https://www.tiktok.com/@dadikwahyuchang', '_blank');
    }

    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        type: 'user',
        content: option.label
      }
    ]);

    // Get next node and add bot messages
    const nextNode = getNode(option.nextId);
    setCurrentNodeId(option.nextId);
    
    await addBotMessages(nextNode.messages);
  };

  const handleNewConversation = useCallback(() => {
    clearState();
    setMessages([]);
    setCurrentNodeId('welcome');
    setHasRestoredSession(false);
    hasInitialized.current = false;
    
    // Trigger welcome messages
    setTimeout(() => {
      hasInitialized.current = true;
      const welcomeNode = getNode('welcome');
      addBotMessages(welcomeNode.messages);
    }, 100);
  }, [clearState]);

  const toggleChat = () => setIsOpen(!isOpen);

  const minimizeChat = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const restoreChatLauncher = () => setIsMinimized(false);

  const currentNode = getNode(currentNodeId);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] max-h-[70vh] rounded-2xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-100'
            }`}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/photos/3%20pak%20dadik.png"
                    alt="Dadik Wahyu Chang"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="!text-white font-semibold text-sm">Dadik Wahyu Chang</h3>
                  <p className="text-white/70 text-xs">Brand & Identity Strategist Partner</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* New Conversation Button */}
                <button
                  onClick={handleNewConversation}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="New conversation"
                  title="Mulai percakapan baru"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                </button>
                {/* Dark Mode Toggle Button */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  title={isDarkMode ? 'Mode terang' : 'Mode gelap'}
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-white" />
                  ) : (
                    <Moon className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={minimizeChat}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Restored Session Notice */}
            {hasRestoredSession && messages.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={`px-4 py-2 text-xs text-center border-b transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-400 border-gray-700' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'
                }`}
              >
                Melanjutkan percakapan sebelumnya
              </motion.div>
            )}

            {/* Messages Container */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <Image
                          src="/images/photos/3%20pak%20dadik.png"
                          alt="Dadik Wahyu Chang"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div 
                      className={`rounded-2xl px-4 py-3 max-w-[80%] transition-colors duration-300 ${
                        msg.type === 'bot' 
                          ? isDarkMode
                            ? 'bg-gray-700 rounded-tl-sm shadow-sm'
                            : 'bg-white rounded-tl-sm shadow-sm'
                          : 'bg-primary text-white rounded-tr-sm'
                      }`}
                    >
                      <p className={`text-sm ${
                        msg.type === 'bot' 
                          ? isDarkMode ? 'text-gray-100' : 'text-gray-700'
                          : 'text-white'
                      }`}>
                        {parseContent(msg.content)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/photos/3%20pak%20dadik.png"
                      alt="Dadik Wahyu Chang"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <div className="flex gap-1">
                      <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '0ms' }} />
                      <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '150ms' }} />
                      <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Options */}
            {!isTyping && currentNode.options && currentNode.options.length > 0 && (
              <div className={`p-4 border-t shrink-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <div className="flex flex-wrap gap-2">
                  {currentNode.options.map((option, index) => (
                    <motion.button
                      key={option.nextId}
                      custom={index}
                      variants={optionVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleOptionClick(option)}
                      className={`px-4 py-2 text-sm font-medium rounded-full border-2 border-primary transition-colors ${
                        isDarkMode 
                          ? 'text-primary hover:bg-primary hover:text-white' 
                          : 'text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      {/* <motion.button
        onClick={toggleChat}
        variants={fabVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          isOpen 
            ? 'bg-gray-700 shadow-gray-700/30' 
            : 'bg-primary shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button> */}

      {/* Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-[90] flex items-center gap-4">
        {isMinimized ? (
          <motion.button
            onClick={restoreChatLauncher}
            variants={fabVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40"
            aria-label="Buka kembali chat"
            title="Buka kembali chat"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        ) : (
          <>
        {/* Label Tulisan */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 hidden md:block"
            >
              <p className="text-sm font-semibold text-gray-700">Hello..👋</p>
              <p className="text-xs text-gray-500">Butuh bantuan untuk membangun brand legendaris?</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tombol Utama */}
        <div className="relative">
          {!isOpen && (
            <button
              onClick={minimizeChat}
              className="absolute -top-1 -right-1 z-10 w-9 h-9 rounded-full bg-white text-primary shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Minimalkan chat"
              title="Minimalkan chat"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          )}
          <motion.button
            onClick={toggleChat}
            variants={fabVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className={`rounded-full flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'w-12 h-12 bg-primary shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
                : 'w-40 h-40 bg-transparent'
            }`}
          >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="photo"
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img 
                  src="/images/photos/3%20pak%20dadik.png"
                  alt="Admin" 
                  className="w-full h-full object-cover"
                />
                {/* Opsi: Tulisan di dalam lingkaran (bawah foto) */}
                <div className="absolute bottom-0 w-full bg-primary px-4 py-2 rounded-full backdrop-blur-sm py-1">
                  <p className="text-[10px] text-white text-center font-medium">Chat Me</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.button>
        </div>
          </>
        )}
      </div>
    </div>
  );
};
