import { useState, useMemo } from 'react'
import Card from './components/Card'
import { EMOJIS } from './data/emojis'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const filteredEmojis = useMemo(() => {
    if (!input.trim()) return EMOJIS;
    
    const lowerInput = input.toLowerCase();
    return EMOJIS.filter((emoji) =>
      emoji.keywords.some((keyword) => keyword.includes(lowerInput))
    );
  }, [input]);

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p className="desc">Find emoji by keywords</p>
        
        <input
          placeholder="Enter here..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Search emojis"
        />
      </header>

      <main>
        <div className="container">
          {filteredEmojis.length > 0 ? (
            filteredEmojis.map((emoji) => (
              <Card key={emoji.title} emoji={emoji} />
            ))
          ) : (
            <p className="no-results">No emojis found for "{input}"</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;