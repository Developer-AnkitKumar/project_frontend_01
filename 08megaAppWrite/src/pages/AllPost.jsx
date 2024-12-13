import React, { useEffect, useState } from "react";
import { Container, PostCard } from '../component';
import  appwriteServise  from '../appwrite/confg';


function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {}, [])
    appwriteServise.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents);
        }
    })
    return(
        <div className="w-full py-8">
            <Container>
            <div className="flex flex-wrap">
                {posts.map(() => {
                    <div key={posts.$id} className='p-2 w-1/4'>
                    <PostCard {...posts} />
                </div>
                })}
            </div>
            </Container>
        </div>
    )
}

export default AllPost