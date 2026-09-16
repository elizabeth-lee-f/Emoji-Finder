import './App.css'

function App() {

  const [input, setInpet] = useState('');



  return (
    <>
    <header>
      <h1>Emoji Finder</h1>

      <p className ="desc">
        Find emoji by keywords
      </p>

      <input placeholder="Enter here..."
      type='text'
      value={input}
      onInput={(e) => { setInput(e.target.value)}}
      />
    </header>

    <main>

      

      <div className='card'>
        <p className='Emoji'>100</p>
        <p className='title'>100</p>
        <p className='keywords'>Hundred, points, symbol, wow, win, perfect, parties</p> 
      </div>

      <div className='card'>
        <p className='Emoji'>100</p>
        <p className='title'>100</p>
        <p className='keywords'>Hundred, points, symbol, wow, win, perfect, parties</p> 
      </div>

      <div className='card'>
        <p className='Emoji'>100</p>
        <p className='title'>100</p>
        <p className='keywords'>Hundred, points, symbol, wow, win, perfect, parties</p> 
      </div>

    </main>
    </>
)
}
export default App
