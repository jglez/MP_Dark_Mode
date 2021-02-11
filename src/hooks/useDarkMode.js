// Import our custom hook
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [themeValue, setThemeValue] = useLocalStorage('darkMode')

  return [themeValue, setThemeValue]
}

export default useDarkMode