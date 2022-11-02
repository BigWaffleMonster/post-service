import postController from '../controllers/post.controller'

export const resolvers = {
  Query: {
    async getPost(_, { id }) {
      const post = postController.getPost(id)

      return post
    },


    // async getUserPosts()

    async getPosts() {
      const posts = postController.getPosts()

      return posts
    },

    async getComments(_, { post_id }) {
      const comments = postController.getComments(post_id)

      return comments
    },

  },

  Mutation: {
    async createPost(_, { post }) {
      const new_post = postController.createPost(post)
      return new_post
    },

    async updatePost(_, { post_update }) {
      const updatedPost = postController.updatePost(post_update)

      return updatedPost
    }
  }
}
