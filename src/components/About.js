import food from '../Images/burger-image.png';
import User from './User';
import UserClass from './UserClass';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-left">
				<h1>
					Welcome to <br /> The world of <br />{' '}
					<span>Tasty & Fresh Food</span>
				</h1>
				<h4>
					"You deserve a good mealtime!"
				</h4>
			</div>
			<div className="about-right">
				<img src={food} alt="Food Image" />
			</div>
			{/* <User name={"Deepansh Gupta function"} />
			<UserClass name={"Deepansh Gupta class"} /> */}
		</div>
	);
};

export default About;
