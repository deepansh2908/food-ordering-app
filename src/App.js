import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import useOnlineStatus from './utils/useOnlineStatus';
//import Grocery from './components/Grocery';
import { lazy, Suspense } from 'react';

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component

console.log(<Body />)

const Grocery = lazy(() => {
	return import('./components/Grocery')
})

const AppLayout = () => {
	//using custom hook to get online status of user
	const onlineStatus = useOnlineStatus();
	if (onlineStatus == false)
		return (
			<h1>
				Looks like you are offline! Please check your internet
				connection and retry.
			</h1>
		);
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
	{
		path: '/', // show path for routing
		element: <AppLayout />, // show component for particular path
		children: [
			// show children component for routing
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
		],
		errorElement: <Error />, // show error component for path is different
	},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter





// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // creating element using React.createElement
// const reactHeading = React.createElement(
// 	'h1',
// 	{ id: 'reactHeading' },
// 	'element created using React.createElement'
// );

// //creating a react element using jsx
// const jsxHeading = (
//     <h1 id="jsxHeading">This is a jsx heading</h1>
// )

// //this is a react functional component (starts with capital) -> it returns a piece of jsx code OR it returns a React element
// const HeadingComponent = () => {
// 	return (
// 		<div>
// 			<h1 className='heading1'>This is a h1 tag functional component</h1>
// 			<h2 className='heading2'>This is a h2 tag inside function</h2>
// 		</div>
// 	);
// };

// console.log(HeadingComponent);
// console.log(jsxHeading); //this is a JS object
// console.log(reactHeading); //this is also a JS object

// const root = ReactDOM.createRoot(document.getElementById('root'));
// //rendering a react element in root
// root.render(jsxHeading);

// //rendering a react functional component inside root
// root.render(<HeadingComponent />)
