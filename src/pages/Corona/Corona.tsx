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
                        Following the latest updates from the government and the local authorities regarding the Omicron
                        variant of COVID-19 it’s no longer possible to carry out the conference as planned in Oslo
                        Spektrum. Unfortunately, with only a few days remaining, we have already committed and completed
                        many of the preparations.
                    </p>

                    <p>
                        This means there will be no physical event in Oslo Spektrum on December 7th to 9th, but we are
                        currently looking into what is feasible as an alternative solution.
                    </p>

                    <p>
                        We will continuously update this page with new information.
                    </p>

                    <p>
                        Official information from the government:
                    </p>
                    <p>
                        <InlineLink
                            url={"https://www.regjeringen.no/en/aktuelt/measures-are-being-introduced-to-delay-the-spread-of-the-omicron-variant-in-norway/id2890028/"}
                            color="pink"
                            external>
                            https://www.regjeringen.no/en/aktuelt/measures-are-being-introduced-to-delay-the-spread-of-the-omicron-variant-in-norway/id2890028/
                        </InlineLink>
                    </p>
                    <p>
                        <InlineLink url={"https://www.oslo.kommune.no/english/coronavirus/rules-and-advice/"}
                                    color="pink"
                                    external>
                            https://www.oslo.kommune.no/english/coronavirus/rules-and-advice/
                        </InlineLink>
                    </p>

                    <p>Last updated Oslo, 02.12.2021</p>

                </p>
            </Section>
        </>
    )
}
