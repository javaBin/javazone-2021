import {VikingBanner} from "../../components/PageBanner/PageBanner";
import React from "react";
import {Program} from "./Program";
import {CenterSection} from "../../components/CenterSection/CenterSection";

export function ProgramPage(){
    return (
        <>
            <VikingBanner header="JavaZone Program 2021" subHeader="Find you favorite talks" />
            <CenterSection color="blue">
                <Program/>
            </CenterSection>
        </>
    )
}
