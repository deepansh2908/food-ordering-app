import React from 'react';

class UserClass extends React.Component {
    // whenever UserClass is instantiated, this constructor is called
    //constructor is the best place to receive props and to initialise state variables
    constructor(props) {
        // receive props
		super(props);

        //initialise state variables. this.state is a object of all state variables
        this.state = {
            count: 0,
        }
	}
	render() {
		return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    // this.setState takes in an object of state variables to update them
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Click Me!</button>
				<h2>Namaste React</h2>
				<h3>{this.props.name}</h3>
				<h4>deepansh2908@gmail.com</h4>
			</div>
		);
	}
}

export default UserClass;
