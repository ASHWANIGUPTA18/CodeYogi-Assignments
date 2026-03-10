// Mock auth API. Replace with real HTTP calls when backend is ready.
export async function loginApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ token: "mock-token-123" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 400);
  });
}

export async function signUpApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ token: "mock-token-123" });
      } else {
        reject(new Error("Signup failed"));
      }
    }, 400);
  });
}
