import React from "react";
import './Forms.css';
import Select from 'react-select'

function Forms() {
  const handleClick = () => {
    window.location.href = "/Forms";
  }

  const handleSubmit = (event) => {
    console.log("Success")
  }
  
  return (<div class = "form-page">
    <h1> Generate your personalised meal plan!</h1>
        <form>
    <div class = "form-item">
  <label>
    Name: &nbsp;
    <input type="text" name="name" />
  </label>
  </div>

  <div class = "form-item">
    What university do you currently attend?
    <br></br>
    <br></br>
  <Schools />

  </div>

  <div class = "form-item">
    What is your current meal plan? 
    <br></br>
    <br></br>
    <MealPlan />
  </div>

  <div class = "form-item">
    To help us build a menu inclusive of your dietary needs, please indicate any allergies/dietary restrictions you have.
    <br></br>
    <br></br>
    <DietNeeds />
  </div>

    <button class = "button" type="submit" value="Submit" onSubmit = {handleSubmit}> <h4 class = "button-font">SUBMIT</h4> </button>
    </form>
    </div>
    )
}

const options = [
  { value: 'unc', label: 'University of North Carolina' },
  { value: 'ncsu', label: 'North Carolina State University' },
  { value: 'duke', label: 'Duke University' }
]

const dietOptions = [
  { value: 'none', label: 'None' },
  { value: 'halal', label: 'Halal' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'local', label: 'Local' },
  { value: 'organic', label: 'Organic' },
  { value: 'smart-choice', label: 'Smart Choice'},
]

const options2 = [
  { value: 'block100', label: 'Block 100' },
  { value: 'block120', label: 'Block 120' },
  { value: 'block160', label: 'Block 160' },
  { value: 'block200', label: 'Block 200' },
]
const Schools = () => (
  <Select options={options} />
)


const MealPlan = () => (
  <Select options={options2} />
)

const DietNeeds = () => (
  <Select
  defaultValue={dietOptions[0]}
  isMulti
  options={dietOptions}
  className="basic-multi-select"
  classNamePrefix="select"
/>
)
export default Forms;