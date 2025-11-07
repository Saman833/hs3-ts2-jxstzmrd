export type User = { id: number; name: string };
export type Post = { id: number; userId: number; title: string };

const users: User[] = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
];

const posts: Post[] = [
  { id: 1, userId: 1, title: "The Analytical Engine" },
  { id: 2, userId: 2, title: "COBOL and You" },
];

export function fetchUser(id: number, delay = 500): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      user ? resolve(user) : reject(new Error("User not found"));
    }, delay);
  });
}

export function fetchPostsByUser(userId: number, delay = 600): Promise<Post[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(posts.filter(p => p.userId === userId));
    }, delay);
  });
}

