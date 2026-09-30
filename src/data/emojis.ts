export interface EmojiItem {
  symbol: string;
  title: string;
  keywords: string[];
}

export const EMOJIS: EmojiItem[] = [
  { 
    symbol: '💯', 
    title: '100 Points', 
    keywords: ['hundred', 'points', 'symbol', 'wow', 'win', 'perfect', 'parties'] 
  },
  { 
    symbol: '', 
    title: 'Fire', 
    keywords: ['hot', 'flame', 'trending', 'lit', 'burning'] 
  },
  { 
    symbol: '❤️', 
    title: 'Red Heart', 
    keywords: ['love', 'like', 'valentine', 'heart', 'affection'] 
  },
  { 
    symbol: '😂', 
    title: 'Joy', 
    keywords: ['laugh', 'funny', 'lol', 'happy', 'smile'] 
  },
  { 
    symbol: '🎉', 
    title: 'Party Popper', 
    keywords: ['celebration', 'party', 'confetti', 'congrats'] 
  },
  { 
    symbol: '🚀', 
    title: 'Rocket', 
    keywords: ['launch', 'space', 'startup', 'fast', 'moon'] 
  },
];