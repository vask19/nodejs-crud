import Post from "./Post.js";

class PostService {

    async create(post) {
        return Post.create(post);
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Id cannot be null")
        }
        return Post.findById(id);
    }

    async getAll() {
        return Post.find();
    }

    async update(id, post) {
        if (!id) {
            throw new Error("Id cannot be null")
        }
        return Post.findByIdAndUpdate(id, post, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error("Id cannot be null")
        }
        return Post.findOneAndDelete(id);
    }
}

export default new PostService();