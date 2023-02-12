import React from 'react';
// import companyLogo from './src/logo.png';

function Home() {
    const handleClick = () => {
        window.location.href = "/";
    }

    return (
      <header className="App-header">
        {/* <img src={"frontend/src/logo.png"} alt="React Image" />
        <img src={companyLogo} alt="didn't work"/> */}
        <div class="adjust-line-height">
            <img src="/logo2.jpg" alt="Meal Pal Inc. logo"/>
        </div>
        <div class="adjust-line-height">
            <p id="otherWords">
              Weekly Meal Plans Curated Just For You.
            </p>
        </div>
        
      
        <div>
          <button type="button" class = "button" onClick = {handleClick}> <h4 class = "button-font">GET STARTED</h4></button>
        </div>
      </header>
    )
}

export default Home;