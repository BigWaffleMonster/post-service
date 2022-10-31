export const resolvers = {
  Query: {
    async getPost(_, { id }) {
      const todo = id

      return todo
    },

    async getPosts() {
      const posts = ''

      return posts
    },

    async getComments(_, { post_id }) {
      const comments = []

      return comments
    },

  },

  Mutation: {
    async createPost(_, { post }) {
      const new_post = ''
      return new_post
    },

    async updatePost(_, { post }) {
      const updatedPost = ''

      return updatedPost
    }
  }
}
