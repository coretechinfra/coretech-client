import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({data, variant='md'}) => {
    return (
        <>
            <div className={`news-block ${variant==='sm' ? 'col-xl-2 col-lg-2 col-md-6' : 'col-xl-4 col-lg-6 col-md-6'}`}>
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><Link to={"/"+data?.slug || "#"}><img src={data?.heroImage} alt="" height={200}/></Link></figure>
                    </div>
                    <div className="content-box">
                        <span className="date">{moment(data?.createdAt).format('ll')}</span>
                        <span className="post-info"><i className="fa fa-user-circle"></i> by Admin</span>
                        <h5 className="title"><Link to={"/"+data?.slug || "#"}>{data?.title}</Link></h5>
                        <div className="text fw-light text-truncate">{data?.description}</div>
                        <Link to={"/"+data?.slug || "#"} className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard;