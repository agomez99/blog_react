import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import DownvotesSection from '../components/DownvotesSection'
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
import  '../App.css';
const ArticlePage = ({ match }) => {


    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ downvotes:0, upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
        <h1>{article.title}</h1>
        <img src={article.image}/>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <div className="vote-btn">
        Like
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        <DownvotesSection articleName={name} downvotes={articleInfo.downvotes} setArticleInfo={setArticleInfo} />
        </div>
        <div className="btn-ctn">
        <h3>Share:</h3>
        <LinkedinIcon  size={50} round={true}/>
        <FacebookIcon size={50} round={true}/>
        <TwitterIcon size={50} round={true}/>
        <RedditIcon  size={50} round={true}/>
        </div>

  
        <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name}setArticleInfo={setArticleInfo} />
        <h3>More Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;