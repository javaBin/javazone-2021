import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {InlineLink} from "../../components/InlineLink/InlineLink";

export function CoronaPage() {
    return (
        <>
            <VikingBanner header="Information about JavaZone in context of COVID-19" subHeader=""/>
            <Section color="pink" header={<h1>Information</h1>}>
                <p>
                    Due to the COVID-19 outbreak we have decided to postpone the physical JavaZone 2020 until December 8-9th 2021.
                </p>
            </Section>
            <CenterSection color="pink" header={<h1>Frequently asked questions (FAQ)</h1>}/>
            <Section color="pink" header={<h1>So I have already bought a ticket for Javazone 2020, is it still valid?</h1>}>
                <p>
                    Yes, of course. Your ticket is valid for the conference in December 2021.
                </p>
            </Section>
            <Section color="pink" header={<h1>I already have a ticket, but I cannot attend, can I get a refund?</h1>}>
                <p>
                    Sure. Just send a mail to <InlineLink color="pink" external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> and we will refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees). The refund offer is valid until June 1st 2021.
                </p>
            </Section>
            <Section color="pink" header={<h1>What will the format of the conference in December be?</h1>}>
                <p>
                    This will be the traditional JavaZone experience. We will host it in Oslo Spektrum. There will be food and coffee and other beverages as usual. Oslo Spektrum is a huge venue and we are confident that we will be able to arrange JavaZone in a safe manner and comply to the rules and recommendations from the authorities.
                </p>
            </Section>
        </>
    )
}
