export const asyncFn = (payload) => new Promise((res) => {
  setTimeout(() => {
    res(payload)
  }, 2000)
});