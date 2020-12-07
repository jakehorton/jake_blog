import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx

    return (
      <section class="blog-post">
        <div class="wrapper">
        <div>
          <div>
            <h1 class="heading--xl">Merry Christmas!</h1>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
