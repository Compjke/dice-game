import { useEffect, useRef, useState } from 'react';
import Die from './components/Die';
import { generateDiesArray } from './components/utils';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function App() {
	const [dies, setDies] = useState(() => generateDiesArray());
	const { width, height } = useWindowSize();
	const btnRef = useRef(null);
	const isWon = dies.every(
		(dice) => dice.isHeld && dice.number === dies[0].number
	);
	useEffect(() => {
		if (isWon) {
			btnRef.current.focus();
		}
	}, [isWon]);

	const rollDice = () => {
		if (isWon) {
			setDies(generateDiesArray());
		}
		setDies((prev) =>
			prev.map((die) =>
				die.isHeld ? die : { ...die, number: Math.ceil(Math.random() * 6) }
			)
		);
	};

	const handleClickDie = (id) => {
		setDies((prev) =>
			prev.map((el) =>
				el.id === id
					? {
							...el,
							isHeld: !el.isHeld,
					  }
					: el
			)
		);
	};

	return (
		<main>
			<h1 className='title'>Tenzies</h1>
			<p className='instructions'>
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<div className='dices'>
				{dies.map((el) => (
					<Die
						isWon={isWon}
						key={el.id}
						isHeld={el.isHeld}
						onClick={() => handleClickDie(el.id)}
						value={el.number}
					/>
				))}
			</div>

			<button
				className={`reroll ${isWon && 'focusedForNewGame'}`}
				onClick={rollDice}
				ref={btnRef}
			>
				{isWon ? 'Start new game' : 'Roll'}
			</button>

			{isWon && <ReactConfetti width={width} height={height} />}
		</main>
	);
}

export default App;
