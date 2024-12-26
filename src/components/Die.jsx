/* eslint-disable react/prop-types */
const Die = ({ value, onClick, isHeld, isWon }) => {
	return (
		<button
			disabled={isWon}
			aria-label={`Die , value=${value}, ${isHeld ? 'held' : 'not-held'}`}
			className={`die ${isHeld ? 'active' : ''} ${isWon ? 'jump' : ''}`}
			onClick={onClick}
			aria-pressed={isHeld}
		>
			{value}
		</button>
	);
};

export default Die;
