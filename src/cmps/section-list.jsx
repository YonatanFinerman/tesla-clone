import { SectionPreview } from "./section-preview"

export function SectionsList({sectionsInfo}){
    return <section className="section-list">
    {sectionsInfo.map(carSectionInfo=>{
        return <SectionPreview key={carSectionInfo.title} carSectionInfo={carSectionInfo}/>
    })}
    </section>
}