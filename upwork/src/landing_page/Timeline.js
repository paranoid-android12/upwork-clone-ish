import TopNav from './components/NavbarTop';
import {Col, Row, Image, Button, Container, Sidebar} from 'react-bootstrap';
import Post from './components/Post';
import Suggest from './components/SubredditSuggestion';
import ImageCard from './components/ImageCarousel';
import Side from './components/SideBar';
import axios from 'axios';
import './styles/postStyle.css';
import { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Timeline(){
    const navigate = useNavigate();
    // if(document.cookie == ''){
    //     navigate('../Login')
    // }
    const url = 'http://localhost:8080/upwork_server/root.php'
    const [post, setPost] = useState([]);

    const postHook = () => {
        axios.get(url, {params: {'function': 'fetchPost'}})
        .then(response => {
            setPost(response.data);
        });
    }
      
    useEffect(postHook, [])

    return(
        <div>
            <TopNav/>
            <Container>
                <Row>
                    <Side/>
                    <Col className='timelineCont flex-row col-12 col-lg-10'>
                        <br></br>
                        <div className="overflow-container">
                            <ImageCard/>
                        </div>
                        <Row>
                            <Col className='col-12 col-lg-8'>
                                <br></br>
                                <Container>
                                    <Row>
                                        <Link className='createButton' to='../Timeline/Forum'>Create Post</Link>
                                    </Row>
                                </Container>
                                <br></br>
                                <Post post={post}/>
                            </Col>
                            <Col className='suggestMainBox col-4 d-none d-lg-block'>
                                <br></br>
                                <Suggest/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Timeline;