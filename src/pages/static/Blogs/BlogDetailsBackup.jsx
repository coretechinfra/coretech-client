import React, { useEffect, useState } from 'react';
import './BlogDetails.css';
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';

const data = {
    id: 1,
    category: 'News',
    subCategory: "Travel",
    title: "You got to cool that off. and hat's the double-truth",
    description: "Hung that found of the from diesel to the venerable, you what you spare at cleaning in coming was sign introduced attempt, then would was try make brown.",
    createdAt: "29.Nov.2018",
    author: "Kailash Nath",
    readTime: 4,
    content: [
        {
            element: "heroimage",
            imgSrc: "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/post-thum.jpg",
            tag: "Featured Stories",
            link: "#",
        },
        {
            element: "images",
            imgArr: [
                "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum1.jpg",
                "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum2.jpg",
            ],
        },
        {
            element: "main-content",
            contents: [
                {
                    heading: {},
                    paraArr: [
                        "tHe that after the in makes cleaning forget all intention at here, through had company here's its too at leaders, the a end or thousands the it explain floundering and on also that for after small is compared from with he sharpness origin; Is she was indeed, each if leastgoals.",
                        "goals a never them. They with are for sleep not and her the which feel communicated of early is really plans. What hesitated our halfdozen its the scarfs, heard peacefully, monitor people, the was him, a what you semantics, sinking harmonics. The mechanic. School. Much my himself the that used.The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.",
                        "The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web "
                    ],
                    list: [],
                },
                {
                    heading: {
                        tag: "h2",
                        title: "Additional Notes about the Restoration"
                    },
                    paraArr: [
                        "Beach Restoration Project Moving Forward: A $17 million beach restoration project, funded by the Mexican government, is currently underway. The project, which is expected to take about eight months to complete, will restore and augment beaches along the 7 1/2-mile stretch between Punta Cancun and Punta Nizuc.",
                        "It’s a Divers Paradise: Divers are enjoying less crowds, great conditions and personalized service now that those areas have re-opened.",
                        "Expedia.com Helping Get the Word Out: Expedia is working closely with travel industry partners in Cancun to create more awareness about the region as well as setting up smart business practices for local merchants that will keep more money in the local communities.",
                    ],
                    list: [],
                }
            ],
        },
        {
            element: "blockquote",
            quote: " Together third in third said, third open place moving i lesser itself bring wherein, female. Midst fruitful fourth air yielding fruitful.",
            author: "Santosh Kushwaha",
            authorTitle: "Cheif Technical Office, Conglobase",
        },
        {
            element: "secondary-content",
            heading: {},
            paraArr: [
                "A than in to so even of my times is front better on because the plans. The is perhaps for his own to was that that's it's less could sisters have in to thousand lamps. Research allow to respective to country, and been if low not, following he the odd the from essay up decided dressed out get from a parents' temple. Thing sufficient like. My a people got of a written distribution in the seven the in I back sentinels his parameters clarinet policeman, a could theory, the first or state no there achievements credit concepts the a and."
            ],
            list: [],
        },
    ],

};



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

        case "main-content":
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



const BlogDetailsBackup = () => {

    const [contentTemplate, setContentTemplate] = useState(``);

    const generateContent = (data) => {
        data?.content?.map((content, i) => {
            setContentTemplate((prev) => prev + getElement(content?.element));
        });
    }

    useEffect(() => {
      generateContent(data);
      console.log('generated content:' , contentTemplate);
    }, [data]);
    

    return (
        <>
            {/* <BreadCrumb2 heading={`You got to cool that off. and hat's the double-truth`}/> */}
            {/* <!-- blog banner area start from here --> */}
            <section class="single-blog-banner-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div class="single-blog-banner-wrapper">
                                <h5>{data?.category}</h5>
                                <h1>{data?.title}</h1>
                                <p>{data?.description}</p>
                                <div class="single-blog-social d-flex align-items-center justify-content-between">
                                    <p>{data?.createdAt} . {data?.readTime} min read . Written by {data?.author}</p>
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
                    <div class="row">
                        <div class="col-lg-10 m-auto">
                            <div class="post-thumb">
                                <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/post-thum.jpg" alt="" />
                                <a href="#">Featured Stories</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div class="post-full-content">
                                <p class="title-content">tHe that after the in makes cleaning forget all intention at here, through had company here's its too at leaders, the a end or thousands the it explain floundering and on also that for after small is compared from with he sharpness origin; Is she was indeed, each if leastgoals </p>
                                <p>goals a never them. They with are for sleep not and her the which feel communicated of early is really plans. What hesitated our halfdozen its the scarfs, heard peacefully, monitor people, the was him, a what you semantics, sinking harmonics. The mechanic. School. Much my himself the that used.The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.</p>
                                <p>The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web </p>
                                <h2>Additional Notes about the Restoration</h2>
                                <p>Beach Restoration Project Moving Forward: A $17 million beach restoration project, funded by the Mexican government, is currently underway. The project, which is expected to take about eight months to complete, will restore and augment beaches along the 7 1/2-mile stretch between Punta Cancun and Punta Nizuc.</p>
                                <p>It’s a Divers Paradise: Divers are enjoying less crowds, great conditions and personalized service now that those areas have re-opened.</p>
                                <p>Expedia.com Helping Get the Word Out: Expedia is working closely with travel industry partners in Cancun to create more awareness about the region as well as setting up smart business practices for local merchants that will keep more money in the local communities.</p>
                                <p>New jobs: Cancun has added 10,000 new jobs since the Hurricane</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 m-auto">
                            <div class="row">
                                <div class="col-md-6 mb-md-30">
                                    <div class="single-post-thumb">
                                        <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-md-30">
                                    <div class="single-post-thumb">
                                        <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/blog-thum2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <blockquote class="blockquote">
                                <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/cotation.svg" alt="" />
                                Together third in third said, third open place moving i lesser itself bring wherein, female. Midst fruitful fourth air yielding fruitful.</blockquote>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 m-auto pt-50 pb-100 pb-md-50">
                            <p>A than in to so even of my times is front better on because the plans. The is perhaps for his own to was that that's it's less could sisters have in to thousand lamps. Research allow to respective to country, and been if low not, following he the odd the from essay up decided dressed out get from a parents' temple. Thing sufficient like. My a people got of a written distribution in the seven the in I back sentinels his parameters clarinet policeman, a could theory, the first or state no there achievements credit concepts the a and.</p>
                        </div>
                    </div>
                    {/* <div class="row">
                        <div class="col-md-8 m-auto">
                            <div class="profile-area">
                                <div class="profile-img">
                                    <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/profile-img.jpg" alt="" />
                                </div>

                                <div class="blog-profile-content">
                                    <h3>Eiad Basha</h3>
                                    <p>Designer News is where the design community meets, apparently. On the platform, you can share and discover interesting content as well as start discussions and upvote good content.</p>
                                    <h4>Follow me :</h4>
                                    <div class="social-icon">
                                        <ul class="d-flex align-items-center">
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/facebook.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/instagram.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/twitter.svg" alt="" /></a></li>
                                            <li><a href="#"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/svg/youtube.svg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <!-- comment section start from here --> */}
            {/* <section class="comment-area pt-100 pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading text-center">
                                <h2>Leave a Comment</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div id="disqus_thread"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- Related post area start from here --> */}
            {/* <section class="related-post-area pb-100">
                <div class="container">
                    <div class="section-heading text-center">
                        <h2>Related Post</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 m-auto">
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 mb-md-50">
                                    <div class="related-post-card">
                                        <div class="related-post-card-img">
                                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/single-post1.jpg" alt="" />
                                        </div>
                                        <div class="related-post-card-content">
                                            <div class="rpc-content-timeline d-flex align-items-center justify-content-between">
                                                <h4><a href="tag-page.html">Technology</a></h4>
                                                <h5>Apr 30, 2019</h5>
                                            </div>
                                            <div class="rpc-content-title">
                                                <h2><a href="single-blog.html">video games playing with imagination</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-md-50">
                                    <div class="related-post-card">
                                        <div class="related-post-card-img">
                                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/single-post2.jpg" alt="" />
                                        </div>
                                        <div class="related-post-card-content">
                                            <div class="rpc-content-timeline d-flex align-items-center justify-content-between">
                                                <h4><a href="tag-page.html">Treavel</a></h4>
                                                <h5>Apr 30, 2019</h5>
                                            </div>
                                            <div class="rpc-content-title">
                                                <h2><a href="single-blog.html">Ingredients To Look For In Skin Care Products</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <div class="related-post-card">
                                        <div class="related-post-card-img">
                                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/single-blog/single-post6.jpg" alt="" />
                                        </div>
                                        <div class="related-post-card-content">
                                            <div class="rpc-content-timeline d-flex align-items-center justify-content-between">
                                                <h4><a href="tag-page.html">Treavel</a></h4>
                                                <h5>Apr 30, 2019</h5>
                                            </div>
                                            <div class="rpc-content-title">
                                                <h2><a href="single-left-sidebar.html">Ingredients To Look For In Skin Care Products</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="bg-silver-light">
                <div class="container pb-90">
                    <div class="sec-title text-center">
                        <span class="sub-title">News & Articles</span>
                        <h2>Related Posts</h2>
                    </div>
                    <div class="row">
                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/news-1.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">12 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/news-2.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">15 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/news-3.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">22 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlogDetailsBackup;