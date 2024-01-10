//this component is created to demonstrate lazy loading/code splitting/code chunking/dynamic bundling/on demand loading of components - app optimisation
//so when our website is loaded, all the code except grocery will be there in the js file. Grocery code will only come up when we click on grocery link.

const Grocery = () => {
    return (
        <div className="grocery-container">
            <h1>This is a grocery page with lots of child components!</h1>
        </div>
    )
}

export default Grocery;