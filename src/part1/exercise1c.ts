// Exercise 1C – Parallel Callbacks
// Goal: Show difficulty in managing parallel operations with callbacks.
// Fetch two users at the same time and log both names.
// Hint: You'll need to manually track completion of both.

import { fetchUser, User } from "../utils/fakeApi.js";

function getTwoUsersCallback(
  userId1: number,
  userId2: number,
  callback: (error: Error | null, users?: [User, User]) => void
) {
  let user1: User | null = null;
  let user2: User | null = null;
  let error1: Error | null = null;
  let error2: Error | null = null;
  let completed = 0;

  function checkCompletion() {
    completed++;
    if (completed === 2) {
      if (error1 || error2) {
        callback(error1 || error2!);
      } else if (user1 && user2) {
        callback(null, [user1, user2]);
      }
    }
  }

  fetchUser(userId1)
    .then(user => {
      user1 = user;
      checkCompletion();
    })
    .catch(err => {
      error1 = err;
      checkCompletion();
    });

  fetchUser(userId2)
    .then(user => {
      user2 = user;
      checkCompletion();
    })
    .catch(err => {
      error2 = err;
      checkCompletion();
    });
}

getTwoUsersCallback(1, 2, (err, users) => {
  if (err) return console.error("Error:", err.message);
  console.log("Both users:", users?.map(u => u.name));
});
