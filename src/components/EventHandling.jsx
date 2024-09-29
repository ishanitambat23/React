import "./EV.css";


export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey i am on click Event");
    }

    
    return(
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        </>
    );
};