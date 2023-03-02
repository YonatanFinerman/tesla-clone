import { RiArrowDownSLine } from "react-icons/ri";
export function HomeHero() {
    return <section className="home-hero">
        <header>
            <h1>Model S</h1>
            <p>Order online for touchless delivery</p>
        </header>

        <div>
            <div className="btn-group">
                <button className="custom-order-btn">Custom order</button>
                <button className="inventory-btn">Existing inventory</button>
            </div>
            <div className="down-btn"><RiArrowDownSLine  /></div>
            
        </div>
    </section>
}