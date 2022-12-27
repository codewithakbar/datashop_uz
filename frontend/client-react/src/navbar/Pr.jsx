import {Link} from 'react-router-dom'


function Pr({setSt ,st , addCategory , setAddLaptop}) {


    if (st == 'laptop') {
        return (
            <div className="prMenu">
                <Link to='/shop'>
                    <h1 onClick={addCategory}>Ноутбуки</h1>
                </Link>
                <ul>
                    <Link to='/shop' onClick={addCategory}>  <li>Hp</li></Link>    
                    <Link to='/shop' onClick={addCategory}><li>Asus</li></Link>
                    <Link to='/shop' onClick={addCategory}><li>Acer</li></Link>
                    <Link to='/shop' onClick={addCategory}> <li>MSI</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'phone') {
        return (
            <div className="prMenu">
                <Link to='/shop' onClick={addCategory}>
                    <h1>Смартфоны</h1>
                </Link>
                <ul>
                    <Link to='/shop' onClick={addCategory}> <li>Samsung</li></Link>
                    <Link to='/shop' onClick={addCategory}>   <li>Apple</li></Link>
                    <Link to='/shop' onClick={addCategory}>   <li>Xiomi</li></Link>
                    <Link to='/shop' onClick={addCategory}>    <li>Vivo</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'monitor') {
        return (
            <div className="prMenu">
                <Link to='/shop' onClick={addCategory}>
                    <h1>Мониторы</h1>
                </Link>
                <ul>
                    <Link to='/shop' onClick={addCategory}><li>Gigabyte</li></Link>
                    <Link to='/shop' onClick={addCategory}><li>Asus</li></Link>
                    <Link to='/shop' onClick={addCategory}><li>Samsung</li></Link>
                    <Link to='/shop' onClick={addCategory}><li>LG</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'acsesuar') {
        return (
            <div className="prMenu">
                <Link to='/shop' onClick={addCategory}>
                    <h1>Аксессуары</h1>
                </Link>
                <ul>
                    <Link to='/shop' onClick={addCategory}><li>Earphone</li></Link>
                    <Link to='/shop' onClick={addCategory}><li>Microphone</li></Link>
                </ul>
            </div>
        )   
    }
}

export default Pr