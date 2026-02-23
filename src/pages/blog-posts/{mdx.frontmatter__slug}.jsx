import * as React from "react";

const PostPage = (props) => {
    console.log(props);
    return (
        <>
            {props.children}
        </>
    )
}

export default PostPage;