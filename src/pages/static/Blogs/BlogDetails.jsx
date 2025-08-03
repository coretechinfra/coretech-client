import React, { useEffect, useState } from 'react';
import './BlogDetails.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useGlobalContext } from '../../../global/context';
import moment from 'moment';
import PostCard from '../../../components/Post/PostCard';

// const sampledata = {
//     id: 1,
//     category: 'News',
//     subCategory: "Travel",
//     title: "You got to cool that off. and hat's the double-truth",
//     description: "Hung that found of the from diesel to the venerable, you what you spare at cleaning in coming was sign introduced attempt, then would was try make brown.",
//     createdAt: "29.Nov.2018",
//     author: "Kailash Nath",
//     readTime: 4,
//     content: [
//         {
//             element: "heroimage",
//             imgSrc: "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/post-thum.jpg",
//             tag: "Featured Stories",
//             link: "#",
//         },

//         {
//             element: "main-content",
//             contents: [
//                 {
//                     heading: {},
//                     paraArr: [
//                         "tHe that after the in makes cleaning forget all intention at here, through had company here's its too at leaders, the a end or thousands the it explain floundering and on also that for after small is compared from with he sharpness origin; Is she was indeed, each if leastgoals.",
//                         "goals a never them. They with are for sleep not and her the which feel communicated of early is really plans. What hesitated our halfdozen its the scarfs, heard peacefully, monitor people, the was him, a what you semantics, sinking harmonics. The mechanic. School. Much my himself the that used.The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.",
//                         "The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web "
//                     ],
//                     list: [],
//                 },
//                 {
//                     heading: {
//                         tag: "h2",
//                         title: "Additional Notes about the Restoration"
//                     },
//                     paraArr: [
//                         "Beach Restoration Project Moving Forward: A $17 million beach restoration project, funded by the Mexican government, is currently underway. The project, which is expected to take about eight months to complete, will restore and augment beaches along the 7 1/2-mile stretch between Punta Cancun and Punta Nizuc.",
//                         "It’s a Divers Paradise: Divers are enjoying less crowds, great conditions and personalized service now that those areas have re-opened.",
//                         "Expedia.com Helping Get the Word Out: Expedia is working closely with travel industry partners in Cancun to create more awareness about the region as well as setting up smart business practices for local merchants that will keep more money in the local communities.",
//                     ],
//                     list: [],
//                 }
//             ],
//         },
//         {
//             element: "images",
//             imgArr: [
//                 "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum1.jpg",
//                 "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum2.jpg",
//             ],
//         },
//         {
//             element: "blockquote",
//             quote: " Together third in third said, third open place moving i lesser itself bring wherein, female. Midst fruitful fourth air yielding fruitful.",
//             author: "Santosh Kushwaha",
//             authorTitle: "Cheif Technical Office, Conglobase",
//         },
//         {
//             element: "secondary-content",
//             heading: {},
//             paraArr: [
//                 "A than in to so even of my times is front better on because the plans. The is perhaps for his own to was that that's it's less could sisters have in to thousand lamps. Research allow to respective to country, and been if low not, following he the odd the from essay up decided dressed out get from a parents' temple. Thing sufficient like. My a people got of a written distribution in the seven the in I back sentinels his parameters clarinet policeman, a could theory, the first or state no there achievements credit concepts the a and."
//             ],
//             list: [],
//         },

//     ],

// };



const getElement = (element, elementData) => {

    switch (element) {
        case "heroimage":
            return <div class="row">
                <div class="col-lg-10 m-auto">
                    <div class="post-thumb">
                        <img src={elementData?.imgSrc} alt={elementData?.tag} />
                        <a href={elementData?.link}>{elementData?.tag}</a>
                    </div>
                </div>
            </div>;

        case "images":
            return <div class="row">
                <div class="col-lg-10 m-auto">
                    <div class="row">
                        {
                            elementData?.imgArr?.map((imgSrc, i) => (
                                <div class="col-md-6 mb-md-30" key={i}>
                                    <div class="single-post-thumb">
                                        <img src={imgSrc} alt={"blog-image" + i} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>;

            // case "main-content":
            return (
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <div class="post-full-content">
                            {
                                elementData?.contents?.map((content, i) => {
                                    let mainContent = "";
                                    if (content?.heading?.tag) {
                                        mainContent = `<${content?.heading?.tag}> ${content?.heading?.title} </${content?.heading?.tag}>`
                                    }
                                    if (content?.paraArr?.length) {
                                        content?.paraArr?.map((para, i) => {
                                            mainContent = mainContent + `<p  key="${i}">${para}</p>`
                                        })
                                    }
                                    return mainContent;
                                })
                            }

                        </div>
                    </div>
                </div>
            );

        case "main-content":
            return (
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="post-full-content">
                            {elementData?.contents?.map((content, i) => (
                                <React.Fragment key={i}>
                                    {content.heading && content.heading.tag && React.createElement(content.heading.tag, {}, content.heading.title)}
                                    {content.paraArr?.map((para, j) => (
                                        <p key={j}>{
                                            para?.split(':').length ?
                                            <>{para}</> : <>
                                            <b>{para?.split(':')[0]?.replace(/[-*]/g, '')} :</b>{para?.split(':')[1]?.replace("**", '')}</>
                                        }</p>
                                    ))}
                                   <ol>
                                   {content.list?.map((item, k) => (
                                        <li key={k}><b>{item?.split(':')[0].replace(/[-*]/g,'')} :</b>{item?.split(':')[1].replace('**', '')}</li>
                                    ))}
                                   </ol>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case "blockquote":
            return (
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <blockquote class="blockquote">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/cotation.svg" alt="" />
                            {elementData?.quote}</blockquote>
                    </div>
                </div>
            );

        case "secondary-content":
            return (
                <div class="row">
                    <div class="col-lg-8 m-auto pt-50 pb-100 pb-md-50">

                        {elementData?.paraArr?.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            );

        default:
            break;
    }
}



const BlogDetails = () => {
    const { slug } = useParams();
    const { api } = useGlobalContext();
    const [contentTemplate, setContentTemplate] = useState(``);
    const [data, setData] = useState();
    const [relatedPosts, setRelatedPosts] = useState();
    const navigate = useNavigate();

    const generateContent = (data) => {
        return data?.content?.map((content, i) => {
            return getElement(content?.element, content);
        });
    }

    const getPostBySlug = async () => {
        try {
            const res = await api.get(`/api/post/${slug}`);
            if (res?.status === 200) {
                console.log(res);
                setData(res?.data?.post);
                getRelatedPosts(res?.data?.post?._id);
            }

        } catch (error) {
            console.log("Error fetching post", error);
            navigate("404");
        }
    }

    const getRelatedPosts = async (id) => {
        try {
            const res = await api.get(`/api/post/related/${id}`);
            if (res?.status === 200) {
                console.log(res);
                setRelatedPosts(res?.data?.relatedPosts);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    useEffect(() => {
        const content = generateContent(data);
        setContentTemplate(content);
        console.log("Param:", slug);

    }, [data]);

    useEffect(() => {
        getPostBySlug();
        window.scrollTo(0, 0)
    }, [slug]);


    return (
        <>

            {/* <!-- blog banner area start from here --> */}
            <section class="single-blog-banner-area mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div class="single-blog-banner-wrapper">
                                <Link to={`/${data?.postType}s`}><h4 className='d-flex align-items-center mb-3 border-bottom py-3'><FaRegArrowAltCircleLeft className='me-2' /> All {data?.postType}s</h4></Link>
                                <h5>{data?.category}</h5>
                                <h1>{data?.title}</h1>
                                <p>{data?.description}</p>
                                <div class="single-blog-social d-flex align-items-center justify-content-between">
                                    <p>{moment(data?.createdAt).format("ll")} . {data?.readTime} min read . Written by {data?.author}</p>
                                    <div class="social-icon">
                                        <ul class="d-flex align-items-center justify-content-between">
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/facebook.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/instagram.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/twitter.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/youtube.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--single-blog content area start from here--> */}
            <div class="single-blog-full-content">
                <div class="container">
                    {
                        contentTemplate
                    }
                </div>
            </div>


            {
                relatedPosts?.length ?
                    <section class="bg-silver-light">
                        <div class="container pb-90">
                            <div class="sec-title text-center">
                                <span class="sub-title">News & Articles</span>
                                <h2>Related Posts</h2>
                            </div>
                            <div class="row">
                                {
                                    relatedPosts?.map((post, i) => (
                                        <PostCard data={post} key={i} />
                                    ))
                                }
                            </div>

                        </div>
                    </section> : null
            }
        </>
    )
}

export default BlogDetails