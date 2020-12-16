const router = require("express").Router();
const Post = require("../models/blog");

router.post("/", async (req, res) => {
  const { title, createdAt, tags, html } = req.body;

  const newPost = new Post({
    title,
    createdAt,
    tags,
    html,
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
    console.log(savedPost);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});
// router.delete("/posts/:id", async (req, res) => {
//   const post = await Post.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Post has been deleted!"))
//     .catch(() => res.json({ msg: "Could not find post to delete." }));
// });
module.exports = router;
