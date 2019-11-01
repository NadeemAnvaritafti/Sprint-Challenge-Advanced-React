- [ ] Why would you use class component over function components (removing hooks from the question)?

One of the main reasons why we would use Class components over Functional components is because of legacy data -- there are still companies that have old code using Class components, so it is imperative to understand the syntax in order to change/update the code.  Also, Class components give us access to various React Lifecycle methods.


- [ ] Name three lifecycle methods and their purposes.

render: tells React to return some piece of the DOM; virtual DOM then handles process of mounting those pieces

componentDidMount: this is called after a component has mounted; where we call setState to force a re-render; typically holds the portion of our code used for fetching data from an API

componentDidUpdate: invoked after updating occurs; we can operate on the DOM when the component has been updated; typically a good place to call setState with a condition (such as an if else statement)


- [ ] What is the purpose of a custom hook?

Custom hooks allow us to hold stateful logic in one function and re-use it over and over again throughout our components


- [ ] Why is it important to test our apps?

Testing our apps is important to prevent bugs down the road that may take a lot of time to debug. Testing allows us to trust the code works as intended and also acts as a safety net when refactoring our code.