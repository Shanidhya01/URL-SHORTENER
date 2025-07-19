// Utility function to validate URLs
export const validateURL = (url: string): boolean => {
  try {
    new URL(url) // Throws error if invalid
    return true
  } catch(error: any) {
    console.error(`URL validator did not validate the URL: ${error.message || error}`)
    return false
  }
}
