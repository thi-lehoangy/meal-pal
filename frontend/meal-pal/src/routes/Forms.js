import React from "react";

function Forms() {
  const handleClick = () => {
    window.location.href = "/Forms";
  }

  const handleSubmit = (event) => {
    console.log("Success")
  }
  
  return (<div>
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <div>
  <label>
    What university do you attend?
    <select>
        <option value="UNC">UNC</option>
        <option value="DUKE">DUKE</option>
        <option value="NC STATE">NC STATE</option>
      </select>
  </label>

  </div>

  <div>
  <label>
    What is your current meal plan? 
    <select>
        <option value="BLOCK100">BLOCK100</option>
        <option value="BLOCK120">BLOCK120</option>
        <option value="BLOCK160">BLOCK160</option>
        <option value="BLOCK200">BLOCK200</option>
      </select>
  </label>

  </div>

  <div>
  <label>
  To help us build a menu inclusive of your dietary needs, please indicate any allergies/dietary restrictions you have 
    <select>
        <option value="None">None</option>
        <option value="Halal">Halal</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Local">Local</option>
        <option value="Organic">Organic</option>
        <option value="Smart-Choice">Smart Choice</option>
      </select>
  </label>

  </div>

    <button class = "button" type="submit" value="Submit" onSubmit = {handleSubmit}> Submit </button>
    </form>
    </div>
    )
}

export default Forms;