import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/usePosts"
import PostContainer from '../components/postContainer'

const BlogPage = () => {
  const posts = usePosts({ type: 'date-ascending' })

  return (
    <Layout title="Blog" >
      <SEO title="Blog" />
      <PostContainer posts={posts} />
    </Layout>
  )
}

export default BlogPage
