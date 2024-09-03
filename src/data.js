const data = [
    {
        id: 1,
       title: ' What is JSX?',
       info:'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
      },
   {
     id: 2,
    title: 'Why is there a need for using keys in Lists?',
    info:'',
   },
   {
    id: 3,
   title: 'What is a state in React?',
   info:'The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.',
  },
  {
    id: 4,
   title: 'What is the use of render() in React?',
   info:'It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.If you need to render more than one element, all of the elements must be inside one parent tag like <div>, <form>.',
  },
  {
    id: 5,
   title: 'What are props in React?',
   info:'Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.',
  },
  {
    id: 6,
   title: 'Explain the lifecycle methods of components.',
   info:'getInitialState(): This is executed before the creation of the component.componentDidMount(): Is executed when the component gets rendered and placed on the DOM.shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.componentDidUpdate(): Is invoked immediately after rendering takes place.componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently.',
  },
  
]

export default data;