import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/confg";
import { Container, PostCard } from "../component";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
            </Container>
        </div>
    );
}

export default Home;
