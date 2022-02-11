import React, { useState, useEffect } from 'react'


const FactorialComponent = () => {
	const [number, setNumber] = useState(0)
	const [factorial, setFactorial] = useState(0);
	const CalculusFactorial = (num) => {
		let str = '';
		let arr = [];
		let StrElement = num;

		for (let i = num; i > 0; i--) {
		  arr.push(i);
		}

		const filterArr = arr.map((element, index, array) => { 
			if ((index + 1) !== number) {
				return StrElement = StrElement * array[index + 1] 
			} else {
				return 0
			}
		});
		return filterArr[number - 2];
	}

	useEffect(() => {
		const result = CalculusFactorial(number)
		setFactorial(result)
	}, [number])

	return(
		<>
			<h2>Factorial is: {factorial}</h2>
			<input 
				type="number"
				value={number} 
				onChange={(_)=> { 
					setNumber(_.target.value) 
				}}
			/>
		</>
	)
}

export default FactorialComponent;
