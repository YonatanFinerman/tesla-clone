import { RiArrowDownSLine } from "react-icons/ri";
export function SectionPreview({ carSectionInfo }) {

    const { title, description, imgUrl, btn1Txt, btn2Txt } = carSectionInfo

    return <section className="home-hero">
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>

        <div>
            <div className="btn-group">
                <button className="custom-order-btn">{btn1Txt}</button>
                <button className="inventory-btn">{btn2Txt}</button>
            </div>
            {(title === 'Model S') && <div className="down-btn"><RiArrowDownSLine /></div>}

        </div>
    </section>
}