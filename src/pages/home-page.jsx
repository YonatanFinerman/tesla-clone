import { SectionsList } from "../cmps/section-list"

const sectionsInfo = [{title:'Model S',description:'Order online for touchless delivery',
imgUrl:'model-l.jpg',btn1Txt:'Custom order',btn2Txt:'Existing inventory'},
{title:'Model l',description:'Order online for touchless delivery',
imgUrl:'model-s.jpg',btn1Txt:'Custom order',btn2Txt:'Existing inventory'},
{title:'Model S',description:'Order online for touchless delivery',
imgUrl:'model-s.jpg',btn1Txt:'Custom order',btn2Txt:'Existing inventory'}]

export function HomePage(){
    return <section className="home-page">

        <SectionsList sectionsInfo={sectionsInfo}/>
      
    </section>
}