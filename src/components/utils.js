import { nanoid } from 'nanoid';
export const generateDiesArray = (length = 10, maxValue = 6) => {
	console.log('Called generate');
	const dies = [];

	for (let i = 0; i < length; i++) {
		const randomNumber = Math.ceil(Math.random() * maxValue);
		dies.push({
			id: nanoid(),
			number: randomNumber,
			isHeld: false,
		});
	}

	return dies;
};
