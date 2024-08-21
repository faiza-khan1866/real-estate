import React, { useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import configureStore from "./components/reducers/configure-store";
import DotLoader from "react-spinners/DotLoader";
import ScrollToTop from "./ScrollToTop";

const HomePage = lazy(() => import("./components/pages/Homepage"));
const About = lazy(() => import("./components/pages/About"));
const Service = lazy(() => import("./components/pages/Service"));
const AgentRegistration = lazy(() =>
  import("./components/pages/AgentRegistration")
);
const SearchList = lazy(() => import("./components/pages/SearchList"));
const Faqs = lazy(() => import("./components/pages/Faqs"));
const News = lazy(() => import("./components/pages/News"));
const NewsDetails = lazy(() => import("./components/pages/NewsDetails"));
const Contact = lazy(() => import("./components/pages/contact"));
const Properties = lazy(() => import("./components/pages/Properties"));
const Investment = lazy(() => import("./components/pages/Investment"));
const Careers = lazy(() => import("./components/pages/Careers"));
const Testimonial = lazy(() => import("./components/pages/Testimonial"));
const PropertyInner = lazy(() => import("./components/pages/PropertyInner"));
const Gallery = lazy(() => import("./components/pages/Gallery"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const Terms = lazy(() => import("./components/pages/Terms"));
const Error = lazy(() => import("./components/error"));

const store = configureStore();

const Root = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    // setTimeout(() => setLoading(false), 500);
    const minscript = document.createElement("noscript");
    const iframeMin = document.createElement("iframe");
    iframeMin.style.cssText = "display: none; visibility: hidden";
    iframeMin.src = "https://www.googletagmanager.com/ns.html?id=GTM-5VTJRLG";
    iframeMin.height = "0";
    iframeMin.width = "0";

    minscript.appendChild(iframeMin);
    setTimeout(() => {
      document.body.appendChild(minscript);
    }, 8000);
  }, []);

  return (
    <Suspense
      fallback={
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "rgba(33, 97, 79, 0.8)",
          }}
        >
          <DotLoader color={"#215c4f"} size={100} />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about-us" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/testimonials" component={Testimonial} />
            <Route path="/service" component={Service} />
            <Route path="/residential" exact render={() => <Properties />} />
            <Route path="/commercial" exact render={() => <Properties />} />
            <Route path="/industrial" exact render={() => <Properties />} />
            <Route path="/properties" exact render={() => <Properties />} />
            <Route
              path="/fetch-properties"
              exact
              render={() => <Properties />}
            />
            <Route path="/registration" component={AgentRegistration} />
            <Route path="/faqs" component={Faqs} />
            <Route path="/news" component={News} />
            <Route path="/news-inner/:id" component={NewsDetails} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/investment" component={Investment} />
            <Route path="/search-list" component={SearchList} />
            <Route
              path="/properties/:category/:ptype/:id"
              component={PropertyInner}
            />
            <Route path="/Gallery/:id" component={Gallery} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-services" component={Terms} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </Suspense>
  );
};

export default Root;

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("realdeal")
);
