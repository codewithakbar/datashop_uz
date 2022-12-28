import Header from "./header/Header";
import Main from "./main/Main";

function WebMenu({laptops , monitors , add}) {
    return (
        <>
            <Header/>
            <Main laptops={laptops} monitors={monitors} add={add} />
        </>
    )
}

export default WebMenu