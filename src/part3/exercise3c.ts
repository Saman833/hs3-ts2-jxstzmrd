import { fetchUser } from "../utils/fakeApi.js";

async function getAllUsers() {
  // TODO: fetch users in parallel with Promise.all
  const userIds = [1, 2];
  const users = await Promise.all(userIds.map(id => fetchUser(id)));
  return users;
}

getAllUsers().then(users => console.log(users.map(u => u.name)));
