import {Container, Row} from 'react-bootstrap';
import * as React from "react";
import '../styles/postStyle.css';
import { Link, useNavigate } from 'react-router-dom';

function Content({content, type}){
    if(type == 0){
        return(
            <div>
                <p className='contentPost'>{content}</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className='contentImageContainer'>
                    <img src={content} className='contentImage'></img>
                </div>
                <br></br><br></br>
            </div>
        )
    }
}

function PostBlock({id, subreddit, subredditImage, username, title, content, date, type}){
    const navigate = useNavigate();

    let url = '../timeline/comments/' + id;

    return(
        <Link to={url} style={{color: 'inherit', textDecoration: 'inherit' }}>
            <Container className='postBorder'>
                <div className='postMargin'>
                    <Container className='postDetails d-flex column'>
                        <div className='d-flex column align-items-center'>
                            <div className='subredditImageCont'>
                                <img className='subredditImage' src={subredditImage}></img>
                            </div>
                            <p className='subredditName' onClick={() => navigate('../login')}>r/{subreddit}</p>
                        </div>
                        <p className='userInfoPost'>Posted by u/{username} {date}</p>
                    </Container>
                    <h1 className='titlePost'>{title}</h1>
                    <Content content={content} type={type}/>
                    <Container className='d-flex flex-row' style={{padding: '0px'}}>
                        <div className='statPillVote'>
                            <div className='voteCont'>
                                <img className='upvoteImage' src='/timeline_assets/arrowup.png'></img>
                            </div>
                            <p className='voteCountDisplay'>12</p>
                            <div className='downvoteCont'>
                                <img className='downvoteImage' src='/timeline_assets/arrowdown.png'></img>
                            </div>
                        </div>

                        <div className='statPillComment'>
                            <div className='commentCont'>
                                <img className='commentImage' src='/timeline_assets/comment.png'></img>
                            </div>
                            <p className='commentCount'>57</p>
                        </div>
                    </Container>
                </div>
            </Container>
            <hr></hr>
        </Link>
    )
}


function Post({ post }) {
    return (
            post.map((x, index) => (
                <PostBlock key={x[0]} id={x[0]} subreddit={x[4]} subredditImage={x[5]} username={x[2]} title={x[6]} content={x[7]} date={x[8]} type={x[9]}/>
            ))
    );
}

export default Post;