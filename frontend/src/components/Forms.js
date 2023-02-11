import React from "react";

function Forms() {
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
        <option value="Nut Allergy">Nut Allergy</option>
        <option value="Gluten-Free">Gluten-Free</option>
        <option value="Dairy-Free">Dairy-Free</option>
        <option value="Egg Allergy">Egg Allergy</option>
      </select>
  </label>

  </div>

  <form>
      
    </form>
 

  <input type="submit" value="Submit" />
</form>
    </div>
    )
}

export default Forms;