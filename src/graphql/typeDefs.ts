import { gql } from 'apollo-server'

export const typeDefs = gql`
  type User {
    _id: String
  }

  type Comment {
    user_id: User!
    comment_id: String
    body: String!
  }

  type Post {
    user_id: User!
    post_id: String
    body: String!
    likes: Int
    comments: [Comment]
  }

  extend type Query {
    getPosts: [Post!]
    getPost(post_id: String): Post!
    getComments(post_id: String): [Comment!]
  }

  input PostCreateInput {
    user_id: String
    body: String!
  }
    
  input CommentInput {
    user_id: String!
    comment_id: String
    body: String!
  } 

  input PostUpdateInput {
    body: String
    likes: Int
    comments: CommentInput
  }

  extend type Mutation {
    createPost(post: PostCreateInput): Post!
    updatePost(post_update: PostUpdateInput): Post!
  }
`
