# Meal Pal

## Navigation
To run the app: 
- Clone the project: `git clone https://github.com/thi-lehoangy/meal-pal.git`
- Navigate to branch `form-kavya`: `git switch form-kavya`
- Start the server:
    - Move to the backend directory: `cd backend`
    - Install all dependencies: `npm i` 
    - Run the server: `npm start`
    - The server will be running at URL `http://localhost:3000`
        - Test routes: 
            - `/getItems` to get all food items for the next 7 days, filtered by dietary restrictions (vegan, vegetarian)
            - `/getItems/:mealTime` (eg. `getItems/brunch`) to get all food items for the next 7 days, filtered by meal time of the day
- Start the client:
    - Move to the frontend directory (from the backend): `cd ../frontend/meal-pal`
    - Install all dependencies: `npm i`
    - Run the client: `npm start`
    - The client will open in the browser. If the terminal shows a message saying port is already taken (like by the server) then type `y` and you'll be navigated to the a new port
        - Test routes:  
            - `/` to navigate to the main page (default)
            - `/form`to navigate to a form that takes user information and dietary restrictions
            - `calendar-nav` to get the navigation links of all data sorted by dates
            - `calendar/:date` to get the menu for a specific date
            - `test-calender` to get the testing UI of the calendar