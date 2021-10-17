import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {Workshop} from "./Workshop";

export function WorkshopPage(){
    return (
        <>
            <VikingBanner header="JavaZone Workshops 2021" subHeader="Find you workshop" />
            <CenterSection color="blue" header={<h2>Time, Date and Room schedule will be availbe soon</h2>}>
                <Workshop/>
            </CenterSection>
        </>
    )
}