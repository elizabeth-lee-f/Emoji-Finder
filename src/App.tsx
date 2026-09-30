import { useState, useEffect, useMemo } from 'react'
import Card from './components/Card'
import { emojiService, type EmojiData } from './services/emojiService' 
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [allEmojis, setAllEmojis] = useState<EmojiData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    emojiService.getAll()
      .then(data => setAllEmojis(data))
      .catch(() => setError('Не удалось загрузить эмодзи'))
      .finally(() => setLoading(false))
  }, [])

  const filteredEmojis = useMemo(() => {
    if (!input.trim()) return allEmojis;
    const lowerInput = input.toLowerCase();
    
    return allEmojis.filter(item => 
      item.title.toLowerCase().includes(lowerInput) || 
      item.keywords.toLowerCase().includes(lowerInput)
    );
  }, [input, allEmojis]);

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p className="desc">Интеграция с API</p>
        <input
          placeholder="Поиск..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </header>

      <main>
        <div className="container">
          {filteredEmojis.length > 0 ? (
            filteredEmojis.map((item, idx) => (
              <Card key={idx} emoji={item} />
            ))
          ) : (
            <p className="no-results">Ничего не найдено</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App