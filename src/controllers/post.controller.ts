import { Types } from "mongoose"

class PostController {
  async getPosts() {
    try {
      console.log()
    } catch (e) {
      console.log(e)
    }
  }

  async getPost(post_id: Types.ObjectId) {
    try {
      console.log(post_id)
    } catch (e) {
      console.log(e)
    }
  }

  async getComments(post_id: Types.ObjectId) {
    try {
      console.log(post_id)
    } catch (e) {
      console.log(e)
    }
  }

  async createPost(post) {
    try {
      console.log(post)
    } catch (e) {
      console.log(e)
    }
  }

  async updatePost(post) {
    try {
      console.log(post)
    } catch (e) {
      console.log(e)
    }
  }
}

export default new PostController()
