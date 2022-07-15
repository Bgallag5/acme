import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";

export default function home() {
  return (
    <div className="app__container h-auto">
      <div className="bg-white dark:bg-slate-900 h-auto relative">
        <Header className={'main__header'} />
        <div className="page-content">
          <Intro />
          <About />
          <RecentArticles />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
