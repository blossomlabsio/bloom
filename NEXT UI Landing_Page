import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CalendlyButton from "components/CustomButtons/CalendlyButton.js";

import {
  container,
  raisedDiv,
  heroTitle,
  heroDescription,
} from "assets/jss/nextjs-material-kit.js";

// Sections for this page
import ProblemSection from "pages-sections/ProblemSection.js";
import ProductSection from "pages-sections/ProductSection.js";
import TechSection from "pages-sections/TechSection.js";
import ContactSection from "pages-sections/ContactSection.js";
import BlogSection from "pages-sections/BlogSection.js";
import SEO from "components/SEO/SEO.js";

import matter from "gray-matter";

const dashboardRoutes = [];

const useStyles = makeStyles({
  raisedDiv,
  container,
  heroTitle,
  heroDescription,
});

export default function LandingPage({ props, posts }) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="top">
      <SEO title="Home" description="" />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Title"
        rightLinks={<HeaderLinks noHome />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black",
        }}
        {...rest}
      />
      <Parallax
        responsive
        filterLight
        image={"/images/backgrounds/Speedline.svg"}
        image_alt=""
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.heroTitle}>
                Shockingly-cool hero title
              </h1>
              <p className={classes.heroDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <CalendlyButton
                url="https://calendly.com/[your-url]/30min" //TODO enter your orgname in the calendly link
                text="Your button text here"
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.raisedDiv}>
        <div className={classes.container}>
          <ProblemSection />
          <ProductSection />
        </div>
        <TechSection />
        <div className={classes.container}>
          <ContactSection />
        </div>
        <BlogSection posts={posts} />
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`);

  const posts = files
    .map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/${filename}`)
        .toString();

      const { data } = matter(markdownWithMetadata);

      // Convert post date to format: Month day, Year
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = data.date.toLocaleDateString("en-US", options);

      const frontmatter = {
        ...data,
        date: formattedDate,
      };

      return {
        slug: filename.replace(".md", ""),
        frontmatter,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return {
    props: {
      posts,
    },
  };
}
