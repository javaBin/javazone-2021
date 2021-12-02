import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { FrontPage } from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import { InfoPage } from './pages/Info/Info';
import { TicketsPage } from './pages/Tickets/Tickets';
import { PartnersPage } from './pages/Partners/Partners';
import { AboutUsPage } from './pages/About/About';
import { CookieInfoPage } from './pages/CookieInfo/CookieInfo';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';
import { InlineLink } from './components/InlineLink/InlineLink';
import { NotFoundPage } from './pages/NotFound/NotFound';
import {VolunteersPage} from "./pages/Volunteers/Volunteers";
import {SpeakersPage} from "./pages/Speakers/Speakers";
import {MonetaryPolicyPage} from "./pages/Speakers/MonetaryPolicy";
import {SpeakerTipsPage} from "./pages/Speakers/Tips";
import {BuyTicketsPage} from "./pages/Tickets/BuyTicketsPage";
import {CoronaPage} from "./pages/Corona/Corona";
import {ProgramPage} from "./pages/Program/ProgramPage";
import {WorkshopPage} from "./pages/Workshop/WorkshopPage";
import {SessionPage} from "./pages/SessionPage/SessionPage";
import {FoodPage} from "./pages/Food/Food";

const routes: NavRoute[] = [
  {title: 'Info', url: '/info', show: true},
  // {title: 'Program', url: '/program', show: true},
  // {title: 'Program', url: '/program/:sessionId', show: false},
  // {title: 'Workshops', url: '/workshops', show: true},
  // {title: 'Workshops', url: '/workshops/:sessionId', show: false},
  // {title: 'Tickets', url: '/tickets', show: true},
  // {title: 'Tickets', url: '/tickets/buy', show: false},
  {title: 'Speakers', url: '/speakers', show: true},
  {title: 'Partners', url: '/partners', show: true},
  {title: 'Kids', url: '/kids', show: false},
  // {title: 'Frivillige', url: '/volunteers', show: true},
  {title: 'About', url: '/about', show: true},
  {title: 'Cookies', url: '/privacy-cookies', show: false},
  {title: 'Corona', url: '/corona', show: false},
  {title: 'Food menu', url: '/food', show: false},
  {title: 'Tips for Speakers', url: '/speakers/tips', show: false},
  {title: 'Monetary Policy', url: '/speakers/monetary-policy', show: false},
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-3676724-14');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <HashRouter basename="/">
      <>
        <Navigation sticky routes={routes} />
        <Route component={ScrollToTop}/>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/info" component={InfoPage} />
          <Route exact path="/program" component={ProgramPage} />
          <Route exact path="/program/:sessionId" component={SessionPage} />
          <Route exact path="/workshops" component={WorkshopPage} />
          <Route exact path="/workshops/:sessionId" component={SessionPage} />
          <Route exact path="/tickets" component={TicketsPage} />
          <Route exact path="/tickets/buy" component={BuyTicketsPage} />
          <Route exact path="/speakers" component={SpeakersPage} />
          <Route exact path="/speakers/tips" component={SpeakerTipsPage} />
          <Route exact path="/speakers/monetary-policy" component={MonetaryPolicyPage} />
          <Route exact path="/partners" component={PartnersPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/volunteers" component={VolunteersPage} />
          <Route exact path="/privacy-cookies" component={CookieInfoPage} />
          <Route exact path="/corona" component={CoronaPage} />
          <Route exact path="/food" component={FoodPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer routes={routes} />
        <CookieDisclaimer>
          We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink color="pink" url="/privacy-cookies">cookie information page.</InlineLink>
        </CookieDisclaimer>
      </>
    </HashRouter>
  );
}

export default App;
