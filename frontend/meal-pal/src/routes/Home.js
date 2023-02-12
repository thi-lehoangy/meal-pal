import React from 'react';
import '../components/App.css';
function Home() {
    const handleClick = () => {
        window.location.href = "forms";
    }

    return (
      <header>
        <p>
          Weekly meal plans curated just for you.
        </p>
        <div>
          <button type="button" class = "button" onClick = {handleClick}> <h4 class = "button-font">GET STARTED</h4></button>
        </div>
      </header>
    )
}

export default Home;