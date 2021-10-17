import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";


export function ProgramPage(){
    return (
        <>
            <VikingBanner header="JavaZone Program 2021" subHeader="Find you favorite talks" />
            <CenterSection color="blue" header={<h1>Time, Date and Room schedule will be availbe soon</h1>}>
            </CenterSection>
        </>
    )
};