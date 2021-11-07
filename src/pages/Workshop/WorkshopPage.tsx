import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {Workshop} from "./Workshop";

export function WorkshopPage(){
    return (
        <>
            <VikingBanner header="JavaZone Workshops 2021" subHeader="Find you workshop" />
            <CenterSection color="blue" header={<h1>Workshops registrations opens 15. november at 12:00</h1>}>
                <Workshop/>
            </CenterSection>
        </>
    )
}
