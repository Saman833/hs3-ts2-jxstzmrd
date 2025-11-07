type User = { id: number; name: string };

function getUserPromise(id: number): Promise<User> {
  // TODO: Return a Promise that resolves or rejects after a timeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Ada Lovelace" });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
}

getUserPromise(1)
  .then(user => console.log("Got user:", user))
  .catch(err => console.error("Error:", err.message));
