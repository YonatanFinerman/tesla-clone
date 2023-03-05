import { SectionsList } from "../cmps/section-list"

const sectionsInfo = [{
    title: 'Model S', description: 'Order online for touchless delivery',
    imgUrl: 'model-s', btn1Txt: 'Custom order', btn2Txt: 'Existing inventory'
},
{
    title: 'Model Y', description: 'Order online for touchless delivery',
    imgUrl: 'model-y', btn1Txt: 'Custom order', btn2Txt: 'Existing inventory'
},
{
    title: 'Model 3', description: 'Order online for touchless delivery',
    imgUrl: 'model-3', btn1Txt: 'Custom order', btn2Txt: 'Existing inventory',
},
{
    title: 'Model X', description: 'Order online for touchless delivery',
    imgUrl: 'model-x', btn1Txt: 'Custom order', btn2Txt: 'Existing inventory',
},
{
    title: 'Lowest cost solar panels in america', description: 'Money-back guarantee',
    imgUrl: 'solar-panel', btn1Txt: 'Order now', btn2Txt: 'Learn more',
},
{
    title: 'Solar for new roofs', description: 'Solar roof costs less than a new roof plus solar panels',
    imgUrl: 'solar-roof', btn1Txt: 'Order now', btn2Txt: 'Learn more',
},
{
    title: 'Accessories', description: '',
    imgUrl: 'accessories', btn1Txt: 'Shop now',
},
]

export function HomePage() {
    return <section className="home-page">

        <SectionsList sectionsInfo={sectionsInfo} />

    </section>
}