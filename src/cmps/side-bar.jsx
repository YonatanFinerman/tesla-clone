import { GrClose } from "react-icons/gr";

export function SideBar({isMenuOpen,onCloseSideBar,cars}) {
    return <section className="side-bar-container">

        {<ul className={`side-bar ${(isMenuOpen) ?  'open' : 'closed'}`}>
            <button onClick={onCloseSideBar}><GrClose/></button>
            {cars.map((car,idx)=>{
                return  <li key={idx}><a href="#">{car}</a></li>
            })}
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Used inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadaster</a></li>
        </ul>}

    </section>
}