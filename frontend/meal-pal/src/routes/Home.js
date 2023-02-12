import React from 'react';
import '../components/App.css';
// import companyLogo from './src/logo.png';

function Home() {
    const handleClick = () => {
        window.location.href = "forms";
    }

    return (
      <header className="App-header">
        {/* <img src={"frontend/src/logo.png"} alt="React Image" />
        <img src={companyLogo} alt="didn't work"/> */}
        <div>
            <img src="/logo2.jpg" alt="Meal Pal Inc. logo"/>
        </div>
        <div>
            <h1 class="otherWords">
              Weekly Meal Plans Curated Just For You.
            </h1>
        </div>
        
      
        <div>
          <button type="button" class = "button" onClick = {handleClick}> <h4 class = "button-font">GET STARTED</h4></button>
        </div>
      </header>
    )
}

export default Home;