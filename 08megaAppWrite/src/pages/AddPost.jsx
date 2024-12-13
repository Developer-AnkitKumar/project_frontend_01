import React from "react";
import { Container, PostForm } from '../component';

function AddPost() {
    return(
        <div className="w-full py-8">
            <Container>
                <PostForm/>
            </Container>
        </div>
    )
}

export default AddPost