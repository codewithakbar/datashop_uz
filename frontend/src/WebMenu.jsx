import Header from "./header/Header";
import Main from "./main/Main";

function WebMenu({laptops , monitors , add ,baseURL}) {
    return (
        <>
            <Header/>
            <Main baseURL={baseURL} laptops={laptops} monitors={monitors} add={add} />
        </>
    )
}

export default WebMenu