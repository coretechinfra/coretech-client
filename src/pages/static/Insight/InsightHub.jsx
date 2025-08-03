import React, { useEffect, useState } from "react";
import InsightHero from "../Sections/InsightHero";
import { Link } from "react-router-dom";
import PostSection from "../Sections/PostSection";
import { useGlobalContext } from "../../../global/context";

const InsightHub = () => {
  const { api } = useGlobalContext();
  const [blogs, setBlogs] = useState();
  const [news, setNews] = useState();
  const [caseStudies, setCaseStudies] = useState();
  const [articles, setArticles] = useState();
  const [featuredInsights, setFeaturedInsights] = useState();
  // const featuredInsights = [
  //   {
  //     id: 1,
  //     title: "Exploring the Future of AI",
  //     description:
  //       "An in-depth look at the advancements and implications of artificial intelligence.",
  //     imageUrl:
  //       "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "The Rise of Sustainable Energy",
  //     description: "How renewable energy sources are shaping our future.",
  //     imageUrl:
  //       "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "The Impact of Blockchain Technology",
  //     description: "Understanding the potential and challenges of blockchain.",
  //     imageUrl:
  //       "https://cdn.pixabay.com/photo/2024/05/18/12/09/leaves-8770209_1280.jpg",
  //   },
  // ];

  const getFeaturedInsights = async () => {
    try {
      const res = await api.post(`/api/post/featured-insights`);
      if (res?.status === 200) {
        console.log(res);
        setFeaturedInsights(res?.data?.featuredPost);
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
    getFeaturedInsights();
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
      <InsightHero title="Insights" featuredPosts={featuredInsights} />
      <section className="container insights ">
        <div className="row">
          <div className="col col-4">
            <h4 className="mb-4">Trending insights</h4>
            <hr />
              <Link className="">
                <h5>Blogs</h5>
                <p className="text">Find the trending blogs</p>
              </Link>
              <hr />
              <Link>
                <h5>Articles</h5>
                <p className="text">Find the trending blogs</p>
              </Link>
              <hr />
              <Link>
                <h5>News</h5>
                <p className="text">Find the trending blogs</p>
              </Link>
              <hr />
              <Link>
                <h5>Case Studies</h5>
                <p className="text">Find the trending blogs</p>
              </Link>
          </div>
          <div className="col col-8">
          <InsightHero title="Insights" featuredPosts={featuredInsights} contentStyle={{padding: '4rem'}} insightSettings={{fade: false, description: false}} />
          </div>
        </div>
      </section>
      <PostSection data={blogs} title="Latest blogs" />
      <PostSection data={articles} title="Latest articles" />
      <PostSection data={news} title="Latest news" />
      <PostSection data={caseStudies} title="Latest case studies" />
    </>
  );
};

export default InsightHub;
