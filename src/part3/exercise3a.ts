import { fetchUser, fetchPostsByUser } from "../utils/fakeApi.js";

async function getUserAndPosts(userId: number) {
  // TODO: use await to fetch user then posts
  // Return an object { user, posts }
  const user = await fetchUser(userId);
  const posts = await fetchPostsByUser(user.id);
  return { user, posts };
}

(async () => {
  try {
    const result = await getUserAndPosts(1);
    console.log("User:", result.user.name);
    console.log("Posts:", result.posts.map(p => p.title));
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
})();
