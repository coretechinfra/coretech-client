import React from "react";
import PostCard from "../../../components/Post/PostCard";

const PostSection = ({data, title}) => {
  return (
    <>
      {
        data?.length ?
        <section>
        <div class="container pb-90">
          <div class="sec-title">
            {/* <span class="sub-title">All Blogs</span> */}
            <h2 className="">{title? title : 'Posts'}</h2>
          </div>
          <div class="row">
            {data?.map((post, i) => (
              <PostCard data={post} key={i} />
            ))}
          </div>
        </div>
      </section> : null
      }
    </>
  );
};

export default PostSection;
