import {useState, useEffect} from 'react';

export const useDarkMode = () => {
    const [mode, setMode] = useState(false);

    useEffect( () => {
        const body = document.querySelector('body');

        mode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    
    }, [mode])

    return [mode, setMode];
}