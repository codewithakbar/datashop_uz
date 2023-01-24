import { useState } from "react"




function KorzinkaProduct({ Delete , addKorzin}) {

    const [count, setCount] = useState(1)
    function CountPlus() {
        setCount(count + 1)
    }
    function CountMinus() {
        setCount(count - 1)
        if (count == 0) {
            setCount(0)
        }
    }

    return (
        <>
            {

                <div className="Kproduct">
                    <div className="KproductInfo">
                        <div className="KproductImg">
                            <img src={addKorzin.img} alt="" />
                        </div>
                        <div className="productInfo">
                            <span className='productInfo1'>HP Victus 15 RTX 3050...</span>
                            <span className='productInfo2'>Ноутбук</span>
                            <span className='resPrise'>6 800 000 СУМ</span>
                            <span className='productInfo3' onClick={() => Delete(addKorzin.id)}>Удалить</span>
                        </div>
                    </div>
                    <div className="KproductEnd">
                        <div className="KproductCount">
                            <button onClick={CountMinus}>-</button>
                            <span>{count}</span>
                            <button onClick={CountPlus}>+</button>
                        </div>
                        <div className="KproductPrice">
                            <span>6 800 000 СУМ</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default KorzinkaProduct