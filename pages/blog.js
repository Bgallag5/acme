import React from 'react';
import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BlogNav from '../components/Blog/BlogNav';
import FeaturedArticle from '../components/Blog/FeaturedArticle';
import MoreArticles from '../components/Blog/MoreArticles';


// import BlogHeader from '../assets/images/blog.jpg'

export default function Blog() {
  return (
    <div className="app__container h-auto">
      <div className="bg-white dark:bg-slate-900 h-auto relative">
        <Header className={'blog__header'} />
        <div className="page-content">
        <BlogNav />
        <FeaturedArticle />
        <MoreArticles />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
