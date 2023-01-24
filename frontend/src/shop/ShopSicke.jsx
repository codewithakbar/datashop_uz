import Laptops from "../main/laptop";


function ShopSicke({laptops}) {
    return (
        <>
            {
                laptops.map(laptop => (
                    <Laptops laptop={laptop} />
                ))
            }
        </>
    )
}

export default ShopSicke