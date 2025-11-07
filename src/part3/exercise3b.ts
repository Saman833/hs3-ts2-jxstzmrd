import { fetchUser } from "../utils/fakeApi.js";

async function safeFetch<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
  // TODO: Return tuple [data, error]
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
}

(async () => {
  const [user, userError] = await safeFetch(fetchUser(99)); // Non-existent user
  if (userError) console.error("Handled Error:", userError.message);
})();
