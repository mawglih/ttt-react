import GameGrid from './components/GameGrid';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <h1> Tic Tac Toe </h1> 
            <div className="container">
                <GameGrid 
                    width = {3}
                />
            </div>
        </div>
    );
}

export default App;