import { useContext } from "react"
import Laptops from "../main/laptop"
import { AppContext } from "../AppContext"
import { Route, Routes } from "react-router-dom";
import Monitor from "../main/monitor";


function ShopProducts() {

    const { laptops , monitors } = useContext(AppContext)
    const laptop = laptops.map((laptop) =>
        <Laptops laptop={laptop} />
    );
    const monitor = monitors.map((monitor)=>
        <Monitor monitor={monitor}/>
    )

    return (
        <>
            {monitor}
            {laptop}
        </>
    )
}


export default ShopProducts