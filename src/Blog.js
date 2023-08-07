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
        title: 'A Few Thoughts On Software Development',
        content:
            'In the vast realm of software development, an exciting diversity of tech stacks await exploration. From the agility of MEAN and MERN to the timeless power of LAMP and the elegance of Django, each stack offers a distinct avenue for crafting innovative digital experiences. Embracing this variety unveils a thrilling journey where developers create, innovate, and shape the digital world.',
        },
        
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
