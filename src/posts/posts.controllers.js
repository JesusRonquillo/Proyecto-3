const Posts = require("../models/posts.models");
const findAllPosts = async () => {
    //? Your code here:
    const data = await Posts.findAll({
        atributes: ["id", "content", "userName"],
    });
    return data;
};

const findPostById = async (id) => {
    //? Your code here:
    const data = await Posts.findOne({
        where: {
            id: id,
        },
    });
    return data;
};

const createPost = async (prodObj) => {
    //? Your code here:
    const newPost = {
        content: prodObj.content,
        userName: prodObj.userName,
        isPublished: prodObj.isPublished,
    };
    const data = await Posts.create(newPost);
    return data;
};

const updatePost = async (id, productObj) => {
    //? Your code here:
    const data = await Posts.update(productObj, {
        where: {
            id: id,
        },
    });
    return data;
};

const deletePost = async (id) => {
    //? Your code here:
    data = await Posts.destroy({
        where: {
            id: id,
        },
    });
    return data;
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
};
