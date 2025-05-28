import React from "react";
import "./blog.css";
import placeholder from "../assets/placeholder.png";
import blog1_software from "../assets/Software_Subteam_blog1.png"

// Sample blog data - replace with your actual blog posts
const blogPosts = [
    {
        id: 1,
        date: "04/27/2025",
        title: "Blog Article Title",
        description: "The Simulations subteam was able to successfully implement an underwater camera " +
        "in Gazebo simulator with DAVE plugins. Though the result may look simple, we had to get through " +
        "many, many issues including mystery bugs relating to the DAVE underwater camera plugin. After many " +
        "hours of work, we identified what was wrong with the plugin, which was an incorrect image encoding. "+
        "The camera itself relied on 'rgb-8' while the underwater plugin returned its image in 'bgr-8' " +
        "encoding, causing the image to not render. After figuring that out, we ran into an additional " +
        "issue with the plugin successfully building, yet resulting in no change when running the " +
        "simulation. This was finally solved by deleting the built plugin's object file from the " +
        "'build' and 'install' folders in the ros2 workspace. The photo you see displays the camera " +
        "placed underwater, as well as the image it captures, complete with a foggy, blue hue to mimic " +
        "real life underwater imagery.",
        image: blog1_software
    },
    {
        id: 2,
        date: "02/02/2025",
        title: "Blog Article Title",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. We plan on establishing UCSD as a top competitor at Robosub. With your help, we can make it happen!",
        image: placeholder
    },
    {
        id: 3,
        date: "02/02/2025",
        title: "Blog Article Title",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. We plan on establishing UCSD as a top competitor at Robosub. With your help, we can make it happen!",
        image: placeholder
    },
    {
        id: 4,
        date: "02/02/2025",
        title: "Blog Article Title",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. We plan on establishing UCSD as a top competitor at Robosub. With your help, we can make it happen!",
        image: placeholder
    },
    {
        id: 5,
        date: "02/02/2025",
        title: "Blog Article Title",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. We plan on establishing UCSD as a top competitor at Robosub. With your help, we can make it happen!",
        image: placeholder
    },
    {
        id: 6,
        date: "02/02/2025",
        title: "Blog Article Title",
        description: "Triton Robosub leverages UCSD's strength in robotics, engineering, and oceanography. We plan on establishing UCSD as a top competitor at Robosub. With your help, we can make it happen!",
        image: placeholder
    }
];

function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-hero">
                <h1 className="oxanium-semibold">Our Blog</h1>
                <p className="blinker-regular">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum
                    dignissim quisque sit porta magna nullam facilisis ultrices.
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
                            <button className="read-more-btn blinker-regular">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
