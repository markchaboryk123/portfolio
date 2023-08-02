    import React from 'react';
    import styled from 'styled-components';

    const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
    max-height: 400px;
    `;

    const BlogPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    `;

    const BlogTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    `;

    const BlogContent = styled.p`
    font-size: 16px;
    `;

    function Blog() {
    const blogPosts = [
        {
        title: 'Blog Post 1',
        content:
            'This is the content of the first blog post. It could be a long text describing the topic in detail.',
        },
        {
        title: 'Blog Post 2',
        content:
            'This is the content of the second blog post. It could be a long text describing the topic in detail.',
        },
        {
        title: 'Blog Post 3',
        content:
            'This is the content of the third blog post. It could be a long text describing the topic in detail.',
        },
        // Add more blog posts as needed
    ];

    return (
        <BlogContainer>
        {blogPosts.map((post, index) => (
            <BlogPost key={index}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogContent>{post.content}</BlogContent>
            </BlogPost>
        ))}
        </BlogContainer>
    );
    }

    export default Blog;
