// Returns a friendly greeting. Kept deliberately small so a test can pass,
// then be made to fail on demand for the Chapter 6 red/green CI loop.
export function greet(name) {
  if (!name || String(name).trim() === "") {
    return "Hello, there!";
  }
  return "Hello, " + name + "!";
}
