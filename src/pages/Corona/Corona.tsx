import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import {InlineLink} from "../../components/InlineLink/InlineLink";

export function CoronaPage() {
    return (
        <>
            <VikingBanner header="Information regarding Covid-19" subHeader=""/>
            <Section color="pink" header={<h1>Information</h1>}>
                <p>
                    <p>
                        We have now updated the program. There are two days with talks (Wednesday and Thursday). The
                        workshops (which were scheduled on Tuesday) are cancelled.
                    </p>

                    <p>
                        All ticket holders will receive a mail on Tuesday evening with a description on how they can
                        stream
                        all the talks live.
                    </p>

                    <p>
                        Attend JavaZone live:
                    </p>
                    <p>
                        According to the new restrictions we are allowed to have a limited number of participants
                        physically
                        in Spektrum. This number is far lower than the total number of tickets sold, so we have come up
                        with
                        a compromise: Anyone with a valid JavaZone ticket can register for one section that they would
                        like
                        to attend and we will allocate the tickets by lottery.
                    </p>

                    <p>
                        You register by entering your name and email (These must match the name and email of your
                        ticket).
                        You must choose one of the following sections:
                    </p>

                    <ul>
                        <li>Wednesday: 09:10-12:50</li>
                        <li>Wednesday: 13:10-16:50</li>
                        <li>Thursday: 09:10-12:50</li>
                        <li>Thursday: 13:10-16:50</li>
                    </ul>

                    <p>If you register several times, we will use your last registered choice as your wish.</p>

                    <p>
                        Register here: <InlineLink external={true} color="pink"
                                                   url="https://forms.gle/WW5qfN9q9sPHoGo58">https://forms.gle/WW5qfN9q9sPHoGo58</InlineLink>
                    </p>

                    <p>
                        This registration will remain open until Tuesday at noon (12:00 CET)
                    </p>

                    <p>
                        Tuesday afternoon we will inform the lucky attendees who may join us physically in Oslo
                        Spektrum. If
                        you receive this notification by email then you may come to Oslo Spektrum at the given time and
                        choose the live talks you wish to attend. Food and (non-alcoholic) drink will be provided. But
                        there
                        will not be an expo area with partners as usual this year
                    </p>

                    <p>
                        We are aware that this was not the version of JavaZone that neither you nor we wished for, but
                        we
                        believe that this will provide a JavaZone experience that we can vouch for.
                    </p>

                    <p>
                        We will continue to update the web pages with new information in the coming days.
                    </p>

                    <p>Last updated <b>05.12.2021</b></p>
                </p>
            </Section>
        </>
    )
}
