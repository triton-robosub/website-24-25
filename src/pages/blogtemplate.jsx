// src/pages/BlogTemplate.jsx (or wherever your blogtemplate.jsx is)
import React, { useEffect, useState } from 'react';
import './blogtemplate.css'; // CSS for this specific template
import { Link, useParams } from 'react-router-dom';
import placeholderImage from '../assets/vehicle.png'; // Default placeholder for post.imageSrc
import { allBlogPostsData } from './blog'; // Import the data from blog.jsx

function BlogTemplate() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchedPost = allBlogPostsData[id];
        const timer = setTimeout(() => {
            if (fetchedPost) {
                setPost(fetchedPost);
            } else {
                console.error(`Blog post with id "${id}" not found.`);
                setPost(null);
            }
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className="blog-page">
                <main className="blog-content" style={{ textAlign: 'center', padding: '50px' }}>
                    <h2 className="blog-title oxanium-semibold">Loading Post...</h2>
                </main>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-page">
                <main className="blog-content" style={{ textAlign: 'center' }}>
                    <h2 className="blog-title oxanium-semibold">Post Not Found</h2>
                    <p className="blinker-regular">Sorry, we couldn't find the blog post (ID: {id}).</p>
                    <Link to="/blog" className="go-back blinker-regular" style={{ display: 'inline-block', marginTop: '20px' }}>
                        ← Go Back to Blog List
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <div className="blog-page"> {/* Overall container with background */}
            {/* Header - This matches the top hero image in your target design */}
            <header className="blog-header">
                <div className="header-overlay">
                    <h1 className="header-title oxanium-semibold">{post.headerTitle || "Our Blog"}</h1>
                    <p className="header-subtitle blinker-regular">
                        {post.headerSubtitle || "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum dignissim quisque sit porta magna nullam facilisis ultrices."}
                    </p>
                </div>
            </header>

            {/* Main Content Area - This is the white box in your target design */}
            <main className="blog-content">
                <Link to="/blog" className="go-back blinker-regular">← Go Back</Link>

                <p className="published-date blinker-regular">Published {post.date || post.publishedDate || "02/04/2025"}</p>

                <h2 className="blog-title oxanium-semibold">{post.title || "Blog Title Goes Here"}</h2>

                <p className="blog-author blinker-regular">
                    By: <span>{post.author || "Name of Author"}</span>
                </p>

                <p className="blog-intro blinker-regular">
                    {post.intro || post.description || "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum dignissim quisque sit porta magna nullam facilisis ultrices."}
                </p>

                {/* Featured image for the blog post - the light blue placeholder in your target */}
                <div className="blog-image">
                    <img src={post.image || post.imageSrc || placeholderImage} alt={post.imageAlt || post.title || "Blog visual"} />
                </div>

                {/* Main body text */}
                <div className="blog-text blinker-regular">
                    {post.paragraphs && post.paragraphs.length > 0 ? (
                        post.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    ) : (
                        <>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum dignissim quisque sit porta magna nullam facilisis ultrices.Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                            <p>Dictum dignissim quisque sit porta magna nullam facilisis ultrices. Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum dignissim quisque sit porta magna nullam facilisis ultrices.Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                        </>
                    )}
                </div>
            </main>
            {/* The wavy blue design element is usually part of the page background or a separate component below main, often before the footer.
                If it's part of blogtemplate.css, it should be styled there.
                If it's a separate footer-like component, it would be outside this BlogTemplate's direct render,
                or you'd add a specific div here and style it.
                The current blogtemplate.css doesn't explicitly include that wave, assuming it might be a global footer style.
            */}
        </div>
    );
}

export default BlogTemplate;