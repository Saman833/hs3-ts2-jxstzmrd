import { fetchUser, fetchPostsByUser } from "../utils/fakeApi.js";

function getUserAndPostsCallback(
  userId: number,
  callback: (error: Error | null, result?: { user: any; posts: any[] }) => void
) {
  // TODO: fetch user, then fetch posts by that user
  fetchUser(userId)
    .then(user => {
      fetchPostsByUser(user.id)
        .then(posts => {
          callback(null, { user, posts });
        })
        .catch(error => {
          callback(error);
        });
    })
    .catch(error => {
      callback(error);
    });
}

getUserAndPostsCallback(1, (err, result) => {
  if (err) return console.error("Error:", err.message);
  console.log("User:", result?.user.name);
  console.log("Posts:", result?.posts.map(p => p.title));
});
