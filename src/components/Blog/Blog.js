import React, { useEffect, useState } from 'react';
import BlogTile from './BlogTile';

const Blog = () => {
     // const mediumUrl = "https://medium.com/feed/@joshuagauthreaux"
     const rss2json = " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sumaiya-naw252";
     const [myBlog, setMyBlog] = useState([]);
 
     useEffect(() => {
         fetch(rss2json)
             .then(res => res.json())
             .then(data => {
                 setMyBlog(data)
                 console.log(data)
             })
     }, [rss2json]);

     function displayBlogs() {
        // console.log(myBlog)
        return myBlog.items && myBlog.items.map(blog => {
            return blog.categories.length > 0 && <BlogTile key={blog.pubDate} blogData={blog} />
        })
    }

    return (
        <div id="blog" className ='mt-3 ' style={{height:'500px', textAlign:'center', border:'1px solid grey'}}>
        <h1 className="underline-small">Blogs</h1>
        <div className ='Blogs'>
        {displayBlogs()}
        </div>
    
    </div> 
            
    
    );
};

export default Blog;