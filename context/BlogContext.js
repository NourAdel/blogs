import React,{useState} from 'react'


const BlogContext = React.createContext();
export const BlogProvider = ({children}) => {
    const [posts, setPosts]=useState([])

    const addPost = () =>{
        setPosts([...posts, {title:`Blog Post #${posts.length+1}`}])
    };

    return (
        <BlogContext.Provider value={{data:posts,addPost}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;