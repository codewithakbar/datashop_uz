import Header from "./header/Header";
import Main from "./main/Main";

function WebMenu({laptops , monitors}) {
    return (
        <>
            <Header/>
            <Main laptops={laptops} monitors={monitors}/>
        </>
    )
}

export default WebMenu