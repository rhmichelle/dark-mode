import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call 
        //localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // Initialization of storedValue
        // Check LocalStorage to see if the value(key) is already there. First callback function applies to first function call.
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }   else {
        // Set initialValue to Local Storage
        // SetItem must include the key, value PAIR
         (window.localStorage.setItem(key, JSON.stringify(initialValue)))
         return initialValue;
        }
    })
    const setValue = (value) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}

export default useLocalStorage;

// useLocalStorage hook gives you the ability to use a storedValue and Set a StoredValue
// This hook composes useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage
// So in the case of const [darkMode, setDarkMode] = useState(false);
// It would set the state for dakrMode, but also add it to localStorage