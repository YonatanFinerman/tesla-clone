import { RiArrowDownSLine } from "react-icons/ri";

export function SectionPreview({ carSectionInfo }) {

    const { title, description, imgUrl, btn1Txt, btn2Txt } = carSectionInfo

    return <section className="home-hero" style={{ backgroundImage: `url(${require(`../assets/img/${imgUrl}.jpg`)})` }}>
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>

        <div>
            <div className="btn-group">
                <button className="custom-order-btn">{btn1Txt}</button>
                {(btn2Txt) && <button className="inventory-btn">{btn2Txt}</button>}
            </div>
            {(title === 'Model S') && <div className="down-btn" ><RiArrowDownSLine /></div>}

        </div>
    </section>
}