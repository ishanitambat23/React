//OR
//return React.createElement("h1",null,"Hello world!"); //basically babel converts above code in this format

## todo
//? Each JSX expression must have one parent element,which means if you try to return multiple elements,React will throw an error.

//? Every JSX tag needs to be closed. You can self-closing tags for elements that don't have children, e.g., <img src="url" /> self close void elements.


## React conditional rendering
  // 2: But this violates DRY (Do not repeat yourself)
  // 3: Sometimes you might have very complex if conditions, for that there are some
  //4: solutions solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.One another benefit is also that, you can also pass some dynamic values as function parameter



React does not render `false`, `null`, `undefined` , or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

- ***`0`*** is rendered in the DOM because it is considered a
valid React node. This means that if `0` is the result
expression, it will appear in your UI.
- **Empty strings** (`""`) are also considered valid
and are rendered as well.

//*1. Variables
//You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//*2. Expressions
//JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

//*2. Function Calls
//Functions, especially those that return JSX, can be invoked directly within your JSX.

## ImportExport

Default Export: A file can have only one default export.
Default Import: When importing a default export, you can name the import whatever you like.

Named Export:
A file can have multiple named exports.
Each named export must be explicitly exported.

Named Import:
When importing named exports, the import names must match the export names exactly.
Named imports must be enclosed in curly braces.

Inline styles are applied directly to the HTML elements via the style attribute. This
approach uses JavaScript objects to define the CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written
in camelCase instead of the traditional CSS kebab-case.

const style = {
backgroundColor: 'blue',
fontSize: '16px',
}

# 2. Units

For most numeric values, you need to specify units as a string (e.g., '16px'). Some
properties, like zIndex, can take numeric values directly.

const style = {
padding: '10px',
zIndex: 1,
}

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to
performance issues because a new object is created on every
render. To avoid this, define styles outside of the render
method or as constants.

const buttonStyle = {
backgroundColor: 'blue',
color: 'white',
};

# CSS conditional styling in React Js
you can use ternary operators to add conditional styling to your css.

# Applying Padding in Tailwind

Here are both approaches:

## Extended Spacing Scale:

If you've extended the spacing scale, you can use the custom
classes:

<div class="py-32 px-12">Content</div>

## Arbitrary Values:

You can use arbitrary values directly:

## <div class="py-[3.2rem] px-[1.2rem]">Content</div>

#Why React?

- It's because those are normal variables and React. js doesn't know that it's going to
be changed.
- And that react should respond or update DOM based on that.
- Those values are already rendered on DOM, there is no way they will be re-rendered.
- For that React.js provides a function called "useState"
- This type of function which starts with "use" is called hook.
- This is a special function which has some features provided by react.js
- we will learn about other hooks in future.

# Toggle Switch Component

A toggle switch component is a simple yet useful UI element that allows users to switch between two states, typically "on" and "off". It can be used for a variety of purposes such as enabling/disabling features, toggling visibility, and more.

**Features:**

- A switch that toggles between on and off states.
- Change the appearance based on the current state (e.g., different colors for on and off).
- Display the current state (e.g., "On" or "Off").

**Key Concepts:**

- Toggling state with `useState`: Use React's `useState` hook to manage the state of the toggle switch.
- Conditional styling based on state: Apply different styles depending on whether the switch is on or off.
- Event handling for the toggle action: Handle the click event to change the state of the switch.

**Detailed Explanation:**

- **State Management:** We'll use the `useState` hook to manage whether the switch is on or off.
- **Styling:** We'll use conditional styling to change the appearance of the switch based on its state.
- **Event Handling:** We'll handle the click event to toggle the state of the switch.

# Part 1: Simple Todo List in React

**Title:** Creating a Simple Todo List in React with Best Practices

**Overview:** In this video, we'll start with the basics of building a simple Todo List in React. We'll focus on setting up the project, creating components, and managing state effectively.

**What We Will Do Today:**

- Set up the React project.
- Create the main Todo component.
- Build the TodoForm component for adding tasks.
- Use the `useState` hook to manage the list of tasks.
- Implement basic form validation to ensure tasks are not empty.
- Discuss best practices for component structure and state management.

**Important Points to Keep in Mind:**

- Ensure your component structure is clean and maintainable.
- Use controlled components for form inputs to handle state correctly.
- Keep functions simple and focused on a single task.

# Part 2: Adding a Real-Time Clock to Display the Current Date and Time

**Title:** Enhancing Our Todo List with a Real-Time Clock

**Overview:** In this part, we'll integrate a real-time clock into our Todo List application. This feature will display the current date and time, updating every second to help users manage tasks efficiently.

**What We Will Do Today:**

- Create the TodoDate component to show the current date and time.
- Use `useEffect` and `useState` hooks to manage the clock's functionality.
- Format the date and time for user-friendly display.
- Integrate the TodoDate component into our main TodoApp.
- Style the clock to fit seamlessly with our application's design.

**Steps:**

- **Create the TodoDate Component:**
  - Define the TodoDate component using functional component syntax.
  - Initialize `useState` for dateTime to store the current date and time.

- **Update the Date and Time:**
  - Use `useEffect` to set up an interval that updates dateTime every second.
  - Inside the interval, create a Date object to get current date and time.
  - Format using `toLocaleDateString` and `toLocaleTimeString`.
  - Update dateTime state with formatted date and time.

- **Clean Up the Interval:**
  - Ensure interval cleanup in `useEffect` return function to prevent memory leaks.

- **Integrate TodoDate into TodoApp:**
  - Import and include TodoDate component in the header of TodoApp.

- **Style the Clock:**
  - Apply CSS to style the clock (date-time class) for clarity and readability.

**Important Points to Keep in Mind:**

- Use `useEffect` cleanup to clear intervals.
- Format date and time for user readability.
- Ensure clock styling matches application design.

**Why Use `useEffect` for Cleanup:**

When using `setInterval` directly without cleanup, intervals continue running even after the component is unmounted, leading to memory leaks. React's `useEffect` hook with a cleanup function ensures that the interval is cleared when the component is unmounted, preventing memory leaks.

# Part 3: Adding Delete Task and Clear All Task Functionality

**Title:** Adding Date, Delete and Clear All Functionality to React Todo List

**Overview:** In this video, we'll enhance our Todo List by adding functionality to delete individual tasks and clear all tasks at once.

**What We Will Do Today:**

- Implement a delete button for each task to remove it from the list.
- Create a clear all button to remove all tasks at once.
- Update the state and re-render the list after deletion.
- Discuss user experience and the importance of confirmation dialogs for destructive actions (optional).

**Important Points to Keep in Mind:**

- Ensure that each task has a unique key for efficient rendering.
- Handle state updates carefully to avoid unintended side effects.
- Consider edge cases, such as trying to delete a task from an empty list.

# Part 4: Enhancing React Todo List with Reusable Components and Separation of Concerns

**Title:** Implementing Reusable Components and Separation of Concerns for Efficient Todo List Management in React

**Overview:** In this session, we'll optimize our Todo List application by refactoring it into reusable components and emphasizing separation of concerns. We'll integrate components for adding tasks (TodoForm), displaying tasks (TodoLists), and managing date/time display (TodoDate) to enhance code clarity and maintainability.

**What We Will Do Today:**

- Refactor existing code to create reusable components:
  - Implement TodoForm component for adding tasks.
  - Create TodoLists component for displaying tasks and managing their actions.
  - Integrate TodoDate component for real-time date and time display.
  - Utilize props to establish communication between components.

- Explore efficient state management techniques:
  - Utilize `useState` hook for managing task data within the Todo component.
  - Implement functions for adding, deleting, and clearing tasks.

- Emphasize separation of concerns:
  - Ensure each component handles specific functionalities independently.
  - Maintain clarity and reusability by separating UI logic from data management.

**Key Focus Areas:**

- Designing components to enhance reusability and simplify future modifications.
- Implementing clear boundaries between components to improve code maintainability.
- Demonstrating practical strategies for effective state management and component communication in React applications.

**Next Steps:**

By the end of this session, you'll have a robust Todo List application leveraging reusable components and separation of concerns, demonstrating best practices for scalable React application development.

# Part 5: Best Ways to Pass Keys and Mark Tasks as Complete/Incomplete

**Title:** Using Keys Efficiently and Toggling Task Completion in React

**Overview:** In this video, we'll dive into the best practices for using keys in React and add functionality to mark tasks as complete or incomplete.

**What We Will Do Today:**

- Discuss the importance of unique keys in React and how to generate them.
- Show the best practices for passing keys, using objects for task data.
- Implement the functionality to mark tasks as complete or incomplete.
- Update the state to reflect task completion and re-render the list.

**Important Points to Keep in Mind:**

- Keys should be unique and stable. Avoid using indices as keys.
- Use objects to store task data, including properties like id, content, and checked.
- Ensure the UI reflects the completion state of each task (e.g., strikethrough for completed tasks).

# Part 6: Adding Local Storage Functionality to Persist Data

**Title:** Persisting Todo List Data with Local Storage in React

**Overview:** In this video, we'll add local storage functionality to our Todo List, ensuring that tasks persist even after a page refresh.

**What We Will Do Today:**

- Implement local storage to save and retrieve task data.
- Update the state with data from local storage on component mount.
- Ensure tasks are saved to local storage whenever the state changes.
- Discuss the importance of stringifying data for local storage.

**Important Points to Keep in Mind:**

- Local storage stores data as strings. Use `JSON.stringify` to save data and `JSON.parse` to retrieve it.
- Handle cases where local storage is empty or data is corrupted.
- Use `useEffect` to synchronize state with local storage on mount and state changes.

# Part 7: Hosting the Todo List on Free and Paid Servers

**Title:** Hosting Your React Todo List on Free and Paid Servers

**Overview:** In this final video, we'll explore how to host our React Todo List application on both free and paid servers.

**What We Will Do Today:**

- Discuss the differences between free and paid hosting options.
- Walk through the process of deploying the app on a free server (e.g., GitHub Pages, Netlify).
- Show how to deploy the app on a paid server (e.g., Heroku, AWS).
- Ensure the app is properly configured for deployment, including handling environment variables and build processes.

**Important Points to Keep in Mind:**

- Ensure all necessary build steps are completed before deployment.
- Check that the app is configured to handle routing correctly in a deployed environment.
- Consider security and performance aspects, such as HTTPS and caching, when deploying to production.

# Rule 1 - Only Call Hooks at the Top Level & Never Inside Conditions or Loops

**Incorrect:**

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    const [text, setText] = useState(""); // This is incorrect
  }

  // More component logic...
}

**correct**
function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText]
}
