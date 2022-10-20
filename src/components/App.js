import React, {useEffect, useState} from 'react';
import '@styles/App.css';
import ListOfCities from '@src/listOfCities.json';
import Search from '@components/Search';
import LoadingAnimation from '@components/LoadingAnimation';
import APIkey from '@root/APIkey.js';

function App() {
    const [loadingAnimation, setLoadingAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingAnimation(false);
        }, 1500);
    });


    return loadingAnimation ? <LoadingAnimation/> : <Search data={ListOfCities} APIkey={APIkey}/>;
}

export default App;
