import { useState } from 'react';
import Square  from '../Square';
import './gamegrid.css';

const GameGrid = ({
    width,
}) => {
    const calculateWinner = squares => {
        const winningPos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winningPos.length; i++) {
            const [a, b, c] = winningPos[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
    }
    const isBoardFull = squares => {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null){
                return false;
            }
        }
        return true;
    }
    const getStatus = () => {
        if (winner) {
            return `Winner:  ${winner}`;
        } else if (isBoardFull(squares)) {
            return 'Draw';
        } else {
            return `Next player:  ${nextSymbol}`;
        }
    }

    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);
    const winner = calculateWinner(squares);
    const nextSymbol = isXNext ? 'X' : 'O';
    const playgame = (squares, i) => {
        if(squares[i] !=null || winner != null) return;
        const nextSquares = [ ...squares];
        nextSquares[i] = nextSymbol;
        setSquares(nextSquares);
        setIsXNext(!isXNext);
    }
    const restartGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    }
    const renderCell = i => {    
        return (
            <Square
                value = {squares[i]}
                onClick = {() => playgame(squares, i)}
            />  
        )
    }
    const createGrid = () => {
        const arr = Array.from(Array(9).keys());
            return arr.map(el => {
                return renderCell(el);
            })
    }
   
    return (
        <div className="container">
            <div className = 'grid'>
                {createGrid()}
            </div>
            <h2>{getStatus()}</h2>
            <button
                className ="restart"
                onClick = {restartGame}
            >
                Restart
            </button>
        </div>
    )
}
export default GameGrid;