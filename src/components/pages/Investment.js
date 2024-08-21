import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import InvestmentDataContainer from "../section-components/investment/investmentDataContainer";
import InvestmentForm from "../section-components/investment/investmentForm";

const Investment = () => {
  return (
    <>
      <Helmet>
        <title>Investment</title>
        <meta name="description" content="Investment" />
      </Helmet>
      <Navbar />
      <PageHeader
        headertitle="Investment"
        background="/assets/img/bg-img/industrial-nav.jpg"
      />
      <InvestmentDataContainer />
      <InvestmentForm />
      <Footer />
    </>
  );
};

export default Investment;
