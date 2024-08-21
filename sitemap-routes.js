import React, { Component } from "react";
import { Route, Switch } from "react-router";

const routes = [
  {
    name: "Home",
    path: "/",
    isPrivate: false,
    exact: true,
  },
  {
    name: "About",
    path: "/about-us",
    isPrivate: false,
    exact: true,
  },
  {
    name: "properties",
    path: "/properties",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Residential",
    path: "/residential",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Commercial",
    path: "/commercial",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Industrial",
    path: "/industrial",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Service",
    path: "/service",
    isPrivate: false,
    exact: true,
  },
  {
    name: "News",
    path: "/news",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact-us",
    isPrivate: false,
    exact: true,
  },
  {
    name: "RegisterAsAnAgent",
    path: "/registration",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Careers",
    path: "/careers",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Faqs",
    path: "/faqs",
    isPrivate: false,
    exact: true,
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    isPrivate: true,
    exact: true,
  },
  {
    name: "TermsServices",
    path: "terms-services",
    isPrivate: true,
    exact: true,
  },

  {
    name: "PrivacyPolicy",
    path: "/privacy-policy",
    isPrivate: false,
    exact: true,
    show: false,
  },

  {
    name: "PrivacyPolicy",
    path: "/privacy-policy",
    isPrivate: false,
    exact: true,
    show: false,
  },
  {
    name: "ResidentialInnerPage",
    path: "/properties/residential/:type/:slug",
    isPrivate: false,
    exact: true,
    show: false,
  },

  {
    name: "CommercialInnerPage",
    path: "/properties/commercial/:type/:slug",
    isPrivate: false,
    exact: true,
    show: false,
  },

  {
    name: "IndustrialInnerPage",
    path: "/properties/industrial/:type/:slug",
    isPrivate: false,
    exact: true,
    show: false,
  },

  {
    name: "Sitemap",
    path: "/sitemap",
    isPrivate: false,
    exact: true,
    show: false,
  },
];

export default (
  <Switch>
    {routes.map((route) => {
      return <Route path={route.path} key={route.path} />;
    })}
  </Switch>
);
