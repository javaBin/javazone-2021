import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';

export function CoronaPage() {
    return (
        <>
            <VikingBanner header="Information regarding Covid-19" subHeader=""/>
            <Section color="pink" header={<h1>Information</h1>}>
                <p>
                    <p>
                        We have set up a plan for JavaZone that is acceptable regarding the latest restrictions. There
                        will be a two days conference with talks on Wednesday & Thursday. The entire program will be
                        streamed, and will be accessible for ticket holders. All attendees that are registered in our
                        ticket system will receive an email with login credentials.
                    </p>
                    <p>
                        Most of the talks will be recorded and streamed live from Oslo Spektrum. Those speakers who will
                        not be able to meet at the venue will pre-record their talks and we will stream them alongside
                        the live stream.
                    </p>
                    <p>
                        A revised program will be published this weekend.
                    </p>

                    <p><b>Attend JavaZone live:</b></p>
                    <p>
                        According to the new restrictions we are allowed to have a limited number of participants
                        physically in Spektrum. This number is far lower than the total number of tickets sold, so we
                        have come up with a compromise: The two days of conference will be divided into four slots
                        Wednesday morning, Wednesday afternoon, Thursday morning and Thursday afternoon. Anyone with a
                        valid JavaZone ticket can register for one slot that they would like to attend and we will
                        allocate the tickets by lottery.
                    </p>

                    <p>
                        The registration for these slots will open on Monday morning. By midday Tuesday we will inform
                        the lucky attendees who may join us physically in Oslo Spektrum. If you receive this
                        notification then you may come to the Oslo Spektrum at the given time and choose the live talks
                        you wish to attend. Food and (non-alcoholic) drink will be provided. But there will not be an
                        expo area with partners as usual this year
                    </p>

                    <p>
                        We are aware that this was not the version of JavaZone that neither you nor we wished for, but
                        we believe that this will totally provide a JavaZone experience that we can vouch for.
                    </p>
                    <p>
                        We will continue to update the web pages with new information in the coming days.
                    </p>
                    <p>Last updated Oslo, 03.12.2021</p>

                </p>
            </Section>
        </>
    )
}
