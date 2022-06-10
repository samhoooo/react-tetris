// Components
import React from "react";
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import {createStage} from '../gameHelper';

// Styled components
import {StyledTetrisWrapper, StyledTetris} from '../styles/StyledTetris';

// custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
    const [dropTime, setDropTime] = React.useState(null);
    const [gameOver, setgameOver] = React.useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    const movePlayer = posX => {
        updatePlayerPos({ x: posX, y: 0 });
    }

    const startGame = () => {
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false });
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver && e.keyCode) {
            if (e.keyCode === 37) {
                movePlayer(-1);
            } else if (e.keyCode === 39) {
                movePlayer(1);
            } else if (e.keyCode === 40) {
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={ e => move(e) }>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    { gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text="Score"></Display>
                            <Display text="Rows"></Display>
                            <Display text="Level"></Display>
                        </div>
                    )}
                    <StartButton onclick={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;