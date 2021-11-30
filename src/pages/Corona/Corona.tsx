import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';

export function CoronaPage() {
    return (
        <>
            <VikingBanner header="Information regarding Covid-19" subHeader=""/>
            <Section color="pink" header={<h1>Information</h1>}>
                <p>
                    Following the latest updates from the government and the local authorities
                    it will be possible for the conference to proceed as planned.
                    Here are some important details about the conference to help ensure an enjoyable and safe experience
                    for all participants.
                </p>
            </Section>
            <Section color="pink" header={<h1>Capacity Planning</h1>}>
                <p>
                    2021 will (as is to be expected) not be setting any records for maximum attendance. We have
                    deliberately reduced the total number of tickets over previous years to ensure that there is greater
                    free space and less crowding inside Spektrum.
                </p>
            </Section>
            <Section color="pink" header={<h1>Face Masks</h1>}>
                <p>We strongly recommend the use of a facemask for the duration of the conference. Extra facemasks will
                    be freely available for all participants throughout the event.
                </p>
            </Section>
            <Section color="pink" header={<h1>Hand sanitizer</h1>}>
                <p>
                    There will be multiple hand stations positioned around the Spektrum. Please make frequent use of
                    these.
                </p>
            </Section>
            <Section color="pink" header={<h1>Self Testing</h1>}>
                <p>
                    All our crew and personnel from our event partner will be self-tested prior to the event. We
                    encourage you to do the same.
                </p>
                <p>
                    <b>
                        If experience even minor symptoms or has been in close contact with an infected person, then we
                        encourage you stay home.
                    </b>
                </p>
            </Section>
        </>
    )
}
