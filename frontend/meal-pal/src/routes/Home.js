import React from 'react';

function Home() {
    const handleClick = () => {
        window.location.href = "/Forms";
    }

    return (
    <header className="App-header">
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