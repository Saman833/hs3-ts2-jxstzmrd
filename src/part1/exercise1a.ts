type User = { id: number; name: string };

function getUserWithCallback(
  id: number,
  callback: (error: Error | null, user?: User) => void
) {
  // TODO: simulate async work (e.g., setTimeout)
  // Return user if id === 1 else return error
  setTimeout(() => {
    if (id === 1) {
      callback(null, { id: 1, name: "Ada Lovelace" });
    } else {
      callback(new Error("User not found"));
    }
  }, 500);
}

getUserWithCallback(1, (err, user) => {
  if (err) console.error("Error:", err.message);
  else console.log("Got user:", user);
});
