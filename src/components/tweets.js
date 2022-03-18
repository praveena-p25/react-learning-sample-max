import React from 'react';
import Tweet from './tweet';
const Tweets = () => {
    const filter='filter';

    return(
        <Tweet myself={filter}/>
    );
}

export default Tweets