import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

  // Whatever this callback function returns is what gets set as storedValue
  const [storedValue, setStoredValue] = useState(() => {
    // Retrieve key from localStorage
    const item = localStorage.getItem(key)

    // Parse and return passed in key, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    // This key is the first argument passed into the hook
    // We save the key to localStorage
    localStorage.setItem(key, JSON.stringify(value))

    // Save state
    setStoredValue(value)
  }

  return [storedValue, setValue]
}

export default useLocalStorage