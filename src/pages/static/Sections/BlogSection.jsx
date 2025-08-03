import React, { useEffect, useState } from 'react'
import PostCard from '../../../components/Post/PostCard';
import { useGlobalContext } from '../../../global/context';

const BlogSection = ({ title, subTitle }) => {
    const [posts, setPosts] = useState([]);
    const { api } = useGlobalContext();

    const getBlogs = async () => {
        try {
            const res = await api.get(`/api/post/latest?type=blog`);
            if (res?.status === 200) {
                console.log(res);
                setPosts(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            <section class="news-section bg-light">
                <div class="bg bg-pattern-5"></div>
                <div class="container pb-90">
                    <div class="sec-title text-center text-white">
                        <span class="sub-title">{subTitle}</span>
                        <h2 className='text-white'>{title}</h2>
                    </div>
                    <div class="row">
                        {
                            posts?.map((post, i) => (
                                <PostCard data={post} key={i} />
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlogSection;