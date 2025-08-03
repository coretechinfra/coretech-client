import React, { useEffect, useState } from "react";
import BreadCrumb2 from "../../../components/BreadCrumb/BreadCrumb2";
import PostCard from "../../../components/Post/PostCard";
import { useGlobalContext } from "../../../global/context";
import "./Articles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostSection from "../Sections/PostSection";
import InsightHero from "../Sections/InsightHero";

const Articles = () => {
  const { api } = useGlobalContext();
  const [blogs, setBlogs] = useState();
  const [news, setNews] = useState();
  const [caseStudies, setCaseStudies] = useState();
  const [articles, setArticles] = useState();
  const [featuredArticles, setFeaturedArticles] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

    const getFeaturedArticles = async () => {
    try {
      const res = await api.post(`/api/post/featured`, {postType: 'article'});
      if (res?.status === 200) {
        console.log(res);
        setFeaturedArticles(res?.data?.featuredPost);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const getBlogs = async () => {
    try {
      const res = await api.get(`/api/post/blogs`);
      if (res?.status === 200) {
        console.log(res);
        setBlogs(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const getNews = async () => {
    try {
      const res = await api.get(`/api/post/news`);
      if (res?.status === 200) {
        console.log(res);
        setNews(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const getArticles = async () => {
    try {
      const res = await api.get(`/api/post/articles`);
      if (res?.status === 200) {
        console.log(res);
        setArticles(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const getCaseStudies = async () => {
    try {
      const res = await api.get(`/api/post/case-studies`);
      if (res?.status === 200) {
        console.log(res);
        setCaseStudies(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  useEffect(() => {
    getFeaturedArticles();
    getArticles();
    getBlogs();
    getCaseStudies();
    getNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InsightHero title="Featured Articles" featuredPosts={featuredArticles} />
      <PostSection data={articles} title="Latest articles" />
      <PostSection data={blogs} title="Popular articles" />
    </>
  );
};

export default Articles;
