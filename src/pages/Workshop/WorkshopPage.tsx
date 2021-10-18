import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {Workshop} from "./Workshop";

export function WorkshopPage(){
    return (
        <>
            <VikingBanner header="JavaZone Workshops 2021" subHeader="Find you workshop" />
            <CenterSection color="blue" header={<h1>Time, Date and Room schedule will be availbe soon</h1>}>
                <p>
                    The workshops are included in your ticket, but we have a limited number of seats.
                    The registration details will be made available in December.
                </p>
                <Workshop/>
            </CenterSection>
        </>
    )
}