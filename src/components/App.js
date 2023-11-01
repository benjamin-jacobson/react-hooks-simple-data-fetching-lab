// create your App component here
import React, { useEffect, useState} from 'react';

function App () {
    const [image,setImage] = useState("")
    const [isLoaded,setIsLoaded] = useState(false);

    const theUrl = 'https://dog.ceo/api/breeds/image/random'
    useEffect(
        () => {
            fetch(theUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setImage(data.message) // the .message since is the key
                setIsLoaded(true);
            })
        }, []
    );


    if (!isLoaded) return <p>Loading...</p>

    return <img src={image} alt="A Random Dog" width="500" height="600"/>
};

export default App;