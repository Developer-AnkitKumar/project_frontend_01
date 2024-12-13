import  React, {useState, useEffect}  from "react";
import { Container, PostForm } from "../component";
import  appwriteService  from "../appwrite/confg";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [posts, setPosts] = useState(null)
    const{slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate]) 
    return posts ?(
        <div className='py-8'>
        <Container>
            <PostForm posts={posts} />
        </Container>
    </div>
    ) : null
}

export default EditPost