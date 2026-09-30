// src/components/Card.tsx
import type { EmojiData } from '../services/emojiService'

interface CardProps {
  emoji: EmojiData;
}

function Card({ emoji }: CardProps) {
  return (
    <div className="card">
      <p className="emoji-symbol">{emoji.emoji}</p> 
      <p className="title">{emoji.title}</p>
      <p className="keywords">{emoji.keywords}</p>
    </div>
  );
}

export default Card;