import React from 'react'
import UserPostItem from './UserPostItem'

export default function UserPosts(props) {
  return (
    <section className="fotos" aria-label="postagens">
      {props.posts.map(post => (<UserPostItem
            key={post.id}
            postId={post.id}
            image={post.image}
        />))}
</section>
  )
}
