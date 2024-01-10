import { useState } from 'react';

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count1, setCOunt1] = useState(1);
	return (
		<div>
            <h1>Count: {count}</h1>
            <h1>Count1 : {count1}</h1>
			<h2>Namaste React</h2>
			<h3>{props.name}</h3>
			<h4>deepansh2908@gmail.com</h4>
		</div>
	);
};

export default User;
