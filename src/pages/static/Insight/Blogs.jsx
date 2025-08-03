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

const Blogs = () => {
  const { api } = useGlobalContext();
  const [blogs, setBlogs] = useState();
  const [popularBlogs, setPopularBlogs ] = useState();
  const [news, setNews] = useState();
  const [caseStudies, setCaseStudies] = useState();
  const [articles, setArticles] = useState();
  const [featuredBlogs, setFeaturedBlogs] = useState();
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

  const getFeaturedBlogs = async () => {
    try {
      const res = await api.post(`/api/post/featured`, {postType: 'blog'});
      if (res?.status === 200) {
        console.log(res);
        setFeaturedBlogs(res?.data?.featuredPost);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const featuredArticles = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      description:
        "An in-depth look at the advancements and implications of artificial intelligence.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
    },
    {
      id: 2,
      title: "The Rise of Sustainable Energy",
      description: "How renewable energy sources are shaping our future.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
    },
    {
      id: 3,
      title: "The Impact of Blockchain Technology",
      description: "Understanding the potential and challenges of blockchain.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
    },
  ];

  // const getBlogs = async () => {
  //   try {
  //     const res = await api.get(`/api/post/blogs`);
  //     if (res?.status === 200) {
  //       console.log(res);
  //       setBlogs(res?.data);
  //     }
  //   } catch (error) {
  //     console.log("Error fetching post", error);
  //   }
  // };

  const getLatestBlogs = async () => {
    try {
      const res = await api.get(`/api/post/latest?type=blog`);
      if (res?.status === 200) {
        console.log(res);
        setBlogs(res?.data);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  const getPopularBlogs = async () => {
    try {
      const res = await api.get(`/api/post/popular?type=blog`);
      if (res?.status === 200) {
        console.log(res);
        setPopularBlogs(res?.data?.popularPosts);
      }
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  // const getNews = async () => {
  //   try {
  //     const res = await api.get(`/api/post/news`);
  //     if (res?.status === 200) {
  //       console.log(res);
  //       setNews(res?.data);
  //     }
  //   } catch (error) {
  //     console.log("Error fetching post", error);
  //   }
  // };

  // const getArticles = async () => {
  //   try {
  //     const res = await api.get(`/api/post/articles`);
  //     if (res?.status === 200) {
  //       console.log(res);
  //       setArticles(res?.data);
  //     }
  //   } catch (error) {
  //     console.log("Error fetching post", error);
  //   }
  // };

  // const getCaseStudies = async () => {
  //   try {
  //     const res = await api.get(`/api/post/case-studies`);
  //     if (res?.status === 200) {
  //       console.log(res);
  //       setCaseStudies(res?.data);
  //     }
  //   } catch (error) {
  //     console.log("Error fetching post", error);
  //   }
  // };

  useEffect(() => {
    getFeaturedBlogs();
    // getArticles();
    // getBlogs();
    getLatestBlogs();
    getPopularBlogs();
    // getCaseStudies();
    // getNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InsightHero title="Featured Blogs" featuredPosts={featuredBlogs} />
      <PostSection data={blogs} title="Latest blogs" />
      <PostSection data={popularBlogs} title="Popular blogs" />
    </>
  );
};

export default Blogs;
