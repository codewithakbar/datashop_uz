import {Link} from 'react-router-dom'


function Pr({setSt ,st}) {
    if (st == 'laptop') {
        return (
            <div className="prMenu">
                <Link to='/shop'>
                    <h1>Ноутбуки</h1>
                </Link>
                <ul>
                    <Link to='/shop'>  <li>Hp</li></Link>    
                    <Link to='/shop'><li>Asus</li></Link>
                    <Link to='/shop'><li>Acer</li></Link>
                    <Link to='/shop'> <li>MSI</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'phone') {
        return (
            <div className="prMenu">
                <Link to='/shop'>
                    <h1>Смартфоны</h1>
                </Link>
                <ul>
                    <Link to='/shop'> <li>Samsung</li></Link>
                    <Link to='/shop'>   <li>Apple</li></Link>
                    <Link to='/shop'>   <li>Xiomi</li></Link>
                    <Link to='/shop'>    <li>Vivo</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'monitor') {
        return (
            <div className="prMenu">
                <Link to='/shop'>
                    <h1>Мониторы</h1>
                </Link>
                <ul>
                    <Link to='/shop'><li>Gigabyte</li></Link>
                    <Link to='/shop'><li>Asus</li></Link>
                    <Link to='/shop'><li>Samsung</li></Link>
                    <Link to='/shop'><li>LG</li></Link>
                </ul>
            </div>
        )   
    }
    if (st == 'acsesuar') {
        return (
            <div className="prMenu">
                <Link to='/shop'>
                    <h1>Аксессуары</h1>
                </Link>
                <ul>
                    <Link to='/shop'><li>Earphone</li></Link>
                    <Link to='/shop'><li>Microphone</li></Link>
                </ul>
            </div>
        )   
    }
}

export default Pr