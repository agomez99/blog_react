import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList'
const ArticlesListPage = () => (

    <>
        <h1 className="article-head">Articles List</h1>
        <ArticlesList  articles = {articleContent}/>
    </>
)

export default ArticlesListPage;