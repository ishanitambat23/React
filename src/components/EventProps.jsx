export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const HandleHover = ()=> {
        alert(`Hey thanks for hovering me`);
    };
    
    return(
        <>
        <WelcomeUser onClick = {()=> HandleWelcomeUser("Pratu")}
            onMouseEnter = {HandleHover}/>
        </>
    );
};

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log(`Hey user, I am greeting`);
        onClick();
    };
    return(
        <>
        <button onClick = {onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};