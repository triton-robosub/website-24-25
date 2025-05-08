import React from "react";
import "./blog.css"; // Your existing CSS
import placeholder from "../assets/vehicle.png"; // Your placeholder
import { Link } from "react-router-dom"; // Import Link

// Sample blog data - This should ideally come from a CMS or API in a real app
// For now, ensure each post has a unique 'id' that can be used in the URL
const blogPosts = [
    {
        id: "1", // Use string IDs for consistency with URL params
        date: "02/02/2025",
        title: "Exploring the Depths: Our Latest AUV Tech",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. Dive into the latest advancements powering our AUV for the upcoming RoboSub competition.",
        image: placeholder, // Replace with actual images
        // For BlogTemplate:
        headerTitle: "Our AUV Technology",
        headerSubtitle: "A deep dive into the innovations behind our autonomous underwater vehicle.",
        author: "The Triton Robosub Team",
        intro: "Discover the cutting-edge technology and meticulous engineering that go into making our AUV a formidable competitor in the RoboSub challenge.",
        paragraphs: [
            "Our AUV's perception system relies on a combination of high-resolution sonar and multiple underwater cameras, processed by advanced machine learning algorithms to navigate complex underwater environments and identify competition tasks.",
            "The propulsion system features six vectored thrusters, providing exceptional maneuverability in all six degrees of freedom, crucial for precise task execution. Power management is optimized for endurance, allowing for extended mission times.",
            "Software is the brain of our AUV. Developed using ROS (Robot Operating System), our software stack includes modules for mission planning, sensor fusion, control systems, and inter-vehicle communication, enabling full autonomy."
        ],
        imageAlt: "Close-up of AUV's sensor array"
    },
    {
        id: "2",
        date: "01/15/2025",
        title: "Team Spotlight: The Minds Behind the Machine",
        description: "Meet the dedicated students and mentors who form the backbone of Triton Robosub. Learn about their roles, motivations, and the collaborative spirit that drives our success.",
        image: placeholder, // Replace with actual images
        // For BlogTemplate:
        headerTitle: "Meet the Innovators",
        headerSubtitle: "An introduction to the passionate members of Triton Robosub.",
        author: "Marketing Team",
        intro: "Our team is a diverse group of undergraduate students from various engineering disciplines, united by a passion for robotics and underwater exploration. Get to know the people who bring our AUV to life.",
        paragraphs: [
            "The Mechanical Team is responsible for the AUV's physical design, structural integrity, and waterproofing. They work with CAD software, 3D printing, and composite materials to create a robust and hydrodynamic vehicle.",
            "Our Electrical Team designs and implements all the power distribution, sensor integration, and custom printed circuit boards (PCBs) that keep the AUV running smoothly and reliably under pressure.",
            "The Software Team develops the complex algorithms for autonomous navigation, computer vision for object detection, and the overall mission logic that allows our AUV to perform tasks without human intervention."
        ],
        imageAlt: "Triton Robosub team members working on the AUV"
    },
         // START OF THE EXAMPLE BLOG POST DATA
    {
        // --- Data for the Blog Listing Page (blog.jsx) ---
        id: "sample-post", // Unique ID for this post. The URL will be /blog/sample-post
        date: "May 07, 2025", // Today's date or the publication date
        title: "A Day in the Life: Building an AUV", // Catchy title for the blog list
        description: "Ever wondered what goes into creating an Autonomous Underwater Vehicle? Follow along for a typical day with the Triton Robosub team.", // Short summary for the blog list
        image: placeholder, // Image for the blog list card (e.g., placeholder or samplePostHeroImage)
        imageAlt: "Triton Robosub team members working on the AUV",

        // --- Full Content for the Blog Post Page (blogtemplate.jsx) ---
        headerTitle: "Our Blog: A Deep Dive into AUV Development", // Title for the hero section of the blog post page
        headerSubtitle: "Follow the journey of the Triton Robosub team as we design, build, and test our advanced Autonomous Underwater Vehicle. This is where innovation meets the ocean.", // Subtitle for the hero section

        // Actual content of the blog post:
        author: "The Triton Robosub Communications Team",
        // 'date' from above will be reused by BlogTemplate for "Published [date]"

        intro: "Welcome to the Triton Robosub blog! This is your an inside look into the dedication, challenges, and triumphs of building a state-of-the-art Autonomous Underwater Vehicle (AUV). In this inaugural post, we want to give you a feel for what a 'typical' day looks like for our hardworking student members.", // The introductory paragraph(s)

        // Optional: If you want a different, larger image specifically for the content body of BlogTemplate.
        // If not provided, BlogTemplate might use 'image' from above or a default.
        // For the enhanced BlogTemplate, 'image' is used if 'contentImage' is not specified.
        // contentImage: samplePostContentImage,
        // contentImageAlt: "Detailed shot of AUV components",

        paragraphs: [ // An array of strings, where each string is a paragraph of the main article
            "A day for a Triton Robosub member is a blend of intense focus and collaborative energy. Mornings often start with sub-team meetings. The mechanical team might be reviewing CAD designs for a new manipulator arm, while the electrical team solders components onto a custom PCB, and the software team debugs navigation algorithms.",
            "Access to UCSD's exceptional lab facilities, like the Kastner Lab (CSE 2127), is crucial. Here, physical assembly takes place, software is tested on the actual vehicle, and a lot of head-scratching and 'aha!' moments occur. You'll often find students huddled around a workbench, wires and tools scattered, deeply engrossed in problem-solving.",
            "Lunch breaks are quick, often involving excited chatter about a breakthrough or a particularly stubborn bug. The afternoon might involve pool testing if the AUV is ready for it, or more focused design and development work. Documentation, a vital but less glamorous part, also gets its share of attention.",
            "Our advisor, (e.g., Professor Kastner), provides invaluable guidance, challenging our assumptions and pushing us towards innovative solutions. These interactions are key to our learning and growth.",
            "As the day winds down, there's a sense of accomplishment, even if not everything went according to plan. Every small step forward, every problem solved, brings us closer to our competition goals. Stay tuned to this blog for more updates on specific projects, technical deep dives, and team member spotlights!"
        ]
    }
    // END OF THE EXAMPLE BLOG POST DATA
];



// Store all blog data in a way that BlogTemplate can access it
// In a real app, BlogTemplate would fetch its own data using the ID
export const allBlogPostsData = blogPosts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
}, {});


function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-hero">
                <h1 className="oxanium-semibold">Our Blog</h1>
                <p className="blinker-regular">
                    Stay updated with the latest news, developments, and insights from the Triton Robosub team.
                </p>
            </div>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <div className="blog-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-content">
                            <span className="blog-date blinker-regular">{post.date}</span>
                            <h2 className="blog-title oxanium-semibold">{post.title}</h2>
                            <p className="blog-description blinker-regular">{post.description}</p>
                            {/* Link to the BlogTemplate page for this specific post */}
                            <Link to={`/blog/${post.id}`} className="read-more-btn blinker-regular">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;