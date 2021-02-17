import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [darkModeIsOn, setDarkModeIsOn] = useLocalStorage('key');
    return [darkModeIsOn, setDarkModeIsOn];
}

export default useDarkMode;
