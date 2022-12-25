import {Link} from 'react-router-dom'


function Pr({setSt ,st , addCategory , AddLaptop , AddMonitor , AddAksesuar , AddSmartfon}) {

    // onqiliq bolgan produqtni shopa chiqarib barishina javob bardi
    function LaptopAdd() {
        addCategory()
        AddLaptop()
    }
    function MonitorAdd() {
        addCategory()
        AddMonitor()
    }                                        // onqiliq bolgan produqtni shopa chiqarib barishina javob bardi
    function SmartfonAdd() {        
        addCategory()
        AddSmartfon()
    }
    function AksesuarAdd() {
        addCategory()
        AddAksesuar()
    }

    // onqiliq bolgan produqtni shopa chiqarib barishina javob bardi

    if (st == 'laptop') {
        return (
            <div className="prMenu">
                <Link to='/shop' onClick={LaptopAdd}>
                    <h1>Ноутбуки</h1>
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
                <Link to='/shop' onClick={SmartfonAdd}>
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
                <Link to='/shop' onClick={MonitorAdd}>
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
                <Link to='/shop' onClick={AksesuarAdd}>
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