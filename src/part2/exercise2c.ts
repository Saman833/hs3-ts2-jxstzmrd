import { fetchUser } from "../utils/fakeApi.js";

const userIds = [1, 2];

Promise.all(userIds.map(fetchUser))
  .then(users => console.log("All users:", users.map(u => u.name)))
  .catch(console.error);

// BONUS: Try Promise.race to see which user resolves first
Promise.race([
  fetchUser(1, 800),
  fetchUser(2, 300),
])
  .then(user => console.log("First user to resolve:", user.name))
  .catch(error => console.error("Error:", error.message));
