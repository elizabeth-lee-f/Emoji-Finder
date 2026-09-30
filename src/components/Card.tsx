import type { EmojiItem } from '../data/emojis'

interface CardProps {
  emoji: EmojiItem;
}

function Card({ emoji }: CardProps) {
  return (
    <div className="card">
      <p className="emoji">{emoji.symbol}</p>
      <p className="title">{emoji.title}</p>
      <p className="keywords">{emoji.keywords.join(', ')}</p>
    </div>
  );
}

export default Card;