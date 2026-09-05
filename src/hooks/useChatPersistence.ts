import { useEffect, useCallback, useRef } from 'react';

// Types
export type ChatMessage = {
  id: string;
  type: 'bot' | 'user';
  content: string;
};

type ChatState = {
  messages: ChatMessage[];
  currentNodeId: string;
  isOpen: boolean;
  lastVisit: number;
};

const STORAGE_KEY = 'dadik-chatbot-state';
const STALE_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours in ms

// Check if we're in browser
const isBrowser = typeof window !== 'undefined';

export const useChatPersistence = () => {
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load state from localStorage
  const loadState = useCallback((): ChatState | null => {
    if (!isBrowser) return null;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;

      const state: ChatState = JSON.parse(stored);
      
      // Check if conversation is stale (older than 24 hours)
      const now = Date.now();
      if (now - state.lastVisit > STALE_THRESHOLD) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return state;
    } catch {
      return null;
    }
  }, []);

  // Save state to localStorage (debounced)
  const saveState = useCallback((state: Omit<ChatState, 'lastVisit'>) => {
    if (!isBrowser) return;

    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Debounce save by 500ms
    saveTimeoutRef.current = setTimeout(() => {
      try {
        const stateWithTimestamp: ChatState = {
          ...state,
          lastVisit: Date.now()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateWithTimestamp));
      } catch {
        // localStorage might be full or disabled
        console.warn('Failed to save chat state');
      }
    }, 500);
  }, []);

  // Clear persisted state
  const clearState = useCallback(() => {
    if (!isBrowser) return;
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    loadState,
    saveState,
    clearState
  };
};
