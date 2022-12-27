import Header from "./header/Header";
import Main from "./main/Main";

function WebMenu({laptops}) {
    return (
        <>
            <Header/>
            <Main laptops={laptops}/>
        </>
    )
}

export default WebMenu