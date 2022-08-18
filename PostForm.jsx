import { useRef } from 'react';

const PostForm = () => {
    const photoRef = useRef()
    const titleRef = useRef()
    const usernameRef = useRef()
    const location = useRef()
    const yearsOld = useRef()


    function addPost() {
        const post = {
            photo: photoRef.current.value,
            title: titleRef.current.value,
            username: usernameRef.current.value,
            location: location.current.value,
            yearsOld: yearsOld.current.value
        }
    }

    return (
        <div className='d-flex flex-column' >
            <input type="image" placeholder="photo"/>
            <input type="text" placeholder="title"/>

            <input type="text" placeholder="username"/>

            <input type="text" placeholder="title"/>
            <input type="text" placeholder="location"/>
            <input type="number" placeholder="yearsOld"/>

            <button onClick={addPost}>Create Post</button>

        </div>
    )
}

export default PostForm;