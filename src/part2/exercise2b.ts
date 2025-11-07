import { fetchUser, fetchPostsByUser } from "../utils/fakeApi.js";

fetchUser(1)
  // TODO: chain to fetchPostsByUser
  .then(user => {
    return fetchPostsByUser(user.id).then(posts => {
      return { user, posts };
    });
  })
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
