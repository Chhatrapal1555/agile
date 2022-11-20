import { useState } from 'react';
import './style.css';

function Drawer() {
    const [draweropen, setDrawerOpen] = useState(false)
console.log(draweropen)

       
    
    return (
        <>
        <div className='drawer' style={{width: draweropen ? "170px": "96px"}}  >
            <div className='drawerTopNav' 
            onClick={()=>{
                setDrawerOpen(!draweropen)
            }} >  &#9776; </div>
            {!draweropen && <div style={{padding: '50px 5px 0px'}}>
                <text className='drawerOutline' > 1 </text>
            </div> }
        </div>


       {draweropen && <div className='sidenav'>
        <div className='openDrawerTopNav' onClick={()=>{
                setDrawerOpen(!draweropen)
            }} > Journey Board &nbsp;&nbsp; &#9776; </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '50px 5px 0px' }}>
            <a href="#">task heading 1</a>
            <a href="#">task heading 2</a>
            <a href="#">task heading 3</a>
            <a href="#">task heading 4</a>
            <a href="#">task heading 5</a>
            <a href="#">task heading 6</a>
            <a href="#">task heading 7</a>

        </div>
    </div>}
    </>
    );
}
export default Drawer;