    import React from 'react';
    import styled from 'styled-components';


    // Styled component for the main container of the blog
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
    max-height: 700px;

    `;

// Styled component for each individual blog post
    const BlogPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    `;

// Styled component for the blog post title
    const BlogTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    `;

// Styled component for the content of the blog post
    const BlogContent = styled.p`
    font-size: 16px;
    `;
// Styled component for the top title of the blog
    const Top = styled.h1`
    align-self: flex-start; /* Align the top element to the left */
    font-weight: bold;
    font-size: 22px;
;
    `;

    function Blog() {
      
        // Array of blog posts
        const blogPosts = [
        {
        title: 'A Few Thoughts On Software Development #tech ',
        content:
            'In the vast realm of software development, an exciting diversity of tech stacks await exploration. From the agility of MEAN and MERN to the timeless power of LAMP and the elegance of Django, each stack offers a distinct avenue for crafting innovative digital experiences. Embracing this variety unveils a thrilling journey where developers create, innovate, and shape the digital world.',
        },
        {
        title: ' Is it cheap, or not... #investing',
        content:
            'The allure of valuation lies in its historical multiple, appearing cheap compared to peers. But is it truly "cheap"? Consider a company at $10 per share with $1 estimated earnings (10x). This seemingly affordable valuation becomes costly if earnings degrade to, say, $0.50, making the multiple 20x, not 10x – a significant difference. True allure emerges if earnings stabilize and even improve.',
        },

        {
            title: 'Managment and their impact on stock price volatility... #investing',
            content:
                'Varied management styles, some conservative in guidance, others notably optimistic, wield significant influence over volatility. The pivotal factor is earnings trajectory. If management leans promotional and consensus overextends, you risk holding an inflated stock under inflated leadership. The takeaway: scrutinize managements guidance.'
            },

        {
            title: 'I am intrested to see a complex and professionally deployed react application... #tech',
            content:
                'Amidst around 100 components, numerous props, and global variables, witnessing the deployment and architecture of a genuinely professional React application would offer valuable insights.'
            },
            
        
    ];

    return (
        <BlogContainer>
        <Top>A few of my mirandering thoughts...</Top>
        {/* Map through blogPosts array and render each post */}
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
