import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

let publicUrl = process.env.PUBLIC_URL;

let navigationmenu = [
  {
    id: 1,
    linkText: "About Us",
    url: "about-us",
    bgColor: "#215C4F",
    backgroundImage: "url(https://makeen.b-cdn.net/HomePage/about-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/about-nav.jpg)'
  },
  {
    id: 2,
    linkText: "Services",
    bgColor: "#BA945C",
    url: "service",
    backgroundImage: "url(https://makeen.b-cdn.net/HomePage/services-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/services-nav.jpg)'
  },
  {
    id: 3,
    linkText: "News",
    bgColor: "#215C4F",
    url: "news",
    backgroundImage: "url(https://makeen.b-cdn.net/HomePage/news-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/news-nav.jpg)'
  },
  {
    id: 4,
    linkText: "Residential",
    bgColor: "#67AC9D",
    url: "residential",
    backgroundImage:
      "url(https://makeen.b-cdn.net/HomePage/residential-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/residential-nav.jpg)'
  },
  {
    id: 5,
    linkText: "Commercial",
    bgColor: "#E3B775",
    url: "commercial",
    backgroundImage:
      "url(https://makeen.b-cdn.net/HomePage/commercial-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/commercial-nav.jpg)'
  },
  {
    id: 6,
    linkText: "Industrial",
    bgColor: "#FF6E6E",
    url: "industrial",
    backgroundImage:
      "url(https://makeen.b-cdn.net/HomePage/industrial-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/industrial-nav.jpg)'
  },
  {
    id: 7,
    linkText: "Investment",
    bgColor: "#215C4F",
    url: "investment",
    backgroundImage: "url(https://makeen.b-cdn.net/HomePage/career-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/career-nav.jpg)'
  },
  {
    id: 8,
    linkText: "Agents",
    bgColor: "#BA945C",
    url: "registration",
    backgroundImage: "url(https://makeen.b-cdn.net/HomePage/agents-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/agents-nav.jpg)'
  },
  {
    id: 9,
    linkText: "Contact Us",
    bgColor: "#215C4F",
    url: "contact-us",
    backgroundImage:
      "url(https://makeen.b-cdn.net/HomePage/contact-us-nav.jpg)",
    // backgroundImage: 'url(' + publicUrl + '/assets/img/bg-img/contact-us-nav.jpg)'
  },
];

export default function HomeMenu() {
  const classes = useStyles();

  const handleChange = (id) => {
    let obj = navigationmenu.filter((item) => item.id === id);
    console.log("clicked", obj);
  };

  return (
    <Grid container className="home-menu-wrapper">
      <Grid item xs={12}>
        <Grid container className="paper-wrapper">
          {navigationmenu.map((item, id) => (
            <Grid
              key={item.id}
              item
              style={{
                backgroundImage: item.backgroundImage,
                backgroundSize: "cover",
              }}
            >
              <Link to={`/${item.url}`}>
                <Paper
                  className="menu-name"
                  id={`paper${item.id}`}
                  style={{ backgroundColor: item.bgColor }}
                  key={id}
                  onClick={() => {
                    handleChange(item.id);
                  }}
                >
                  {item.linkText}
                </Paper>{" "}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
