import { GrClose } from "react-icons/gr";

export function SideBar({isMenuOpen,onCloseSideBar}) {
    return <section className="side-bar-container">

        {<ul className={`side-bar ${(isMenuOpen) ?  'open' : 'closed'}`}>
            <button onClick={onCloseSideBar}><GrClose/></button>
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Used inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadaster</a></li>
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Existing inventory</a></li>
        </ul>}

    </section>
}