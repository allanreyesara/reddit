import React from "react";

export function Posts(props){
    return(
        <article>
            <a href={ "https://www.reddit.com" + props.post.permalink } target="_blank">
                <h3>{ props.post.title }</h3>
            </a>   
            
        </article>
    )
}

