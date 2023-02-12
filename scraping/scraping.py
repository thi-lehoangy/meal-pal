# run this in the terminal: 
# python -m pip install requests

import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

LENOIR_URL = "https://dining.unc.edu/locations/top-of-lenoir/?date=2023-02-"
CHASE_URL = "https://dining.unc.edu/locations/chase/?date=2023-02-"
CHOLANAD_URL = "https://dining.unc.edu/locations/cholanad/?date=2023-02-"
ITALIAN_URL = "https://dining.unc.edu/locations/italian-pizzeria-iii-3/?date=2023-02-"
BANDIDOS_URL = "https://dining.unc.edu/locations/bandidos-3/?date=2023-02-"

def week_meal_scrape(start, givenUrl, end):

    for i in range(0,end):
        day = start+i
        url = givenUrl + str(day)
        page = requests.get(url)

        soup = BeautifulSoup(page.content, "html.parser")
        results = soup.find_all("li", class_="menu-item-li")

        df = pd.DataFrame()

        item_list = []
        # 0: continental, 1: brunch, 2: lite_lunch, 3: dinner
        time_meal = []
        vegan = []
        vegetarian = []
        smartChoice = []
        local = []
        organic = []
        madeWithoutGluten = []
        halal = []
        count_item = 0
        # all elements in results
        for list_item in results:
            for link in list_item.find_all('a'):
                # TODO: find meal type in a scalable way
                item_list.append(link.get_text())
                # time_meal.append(curr_meal)
                time_meal.append(count_item)
                class_name = link['class']
                vegan.append(int('prop-vegan' in class_name))
                vegetarian.append(int('prop-vegetarian' in class_name))
                smartChoice.append(int('prop-smart_choice' in class_name))
                local.append(int('prop-local' in class_name))
                organic.append(int('prop-organic' in class_name))
                madeWithoutGluten.append(int('prop-made_without_gluten' in class_name))
                halal.append(int('prop-halal' in class_name))
            # hard coded - TODO: find an efficient way of distinguishing time of meals
            if (link.get_text() == 'Gatorade Orange'):
                count_item += 1
        
        date = [day] * len(item_list)
        df['date'] = date
        df['itemName'] = item_list
        df['mealTime'] = time_meal
        df['vegan'] = vegan
        df['vegetarian'] = vegetarian
        df['smartChoice'] = smartChoice
        df['local'] = local
        df['organic'] = organic
        df['madeWithoutGluten'] = madeWithoutGluten
        df['halal'] = halal
        
        if (givenUrl == LENOIR_URL):
            df['location'] = ["Lenoir"] * len(item_list)
        elif (givenUrl == CHASE_URL):
            df['location'] = ["Chase"] * len(item_list)
        # TODO: add more dining locations
        csv_name = str(day) + ".csv"
        df.to_csv(csv_name, index=False)
    # when connecting with backend, we realized it's easier to have 1 csv file
    # TODO: refactor code

    final_df = pd.DataFrame()
    for i in range(0,end):
        day = start+i
        csv_name = str(day) + ".csv"
        curr_df = pd.read_csv(csv_name) 
        final_df = pd.concat([final_df, curr_df], axis=0, ignore_index=True)
    final_df['itemName'] = final_df.itemName.astype('string')
    final_df['mealTime'] = final_df.mealTime.astype('string')

    # TODO: make this scalable - be able to identify weekends and weekdays using pandas
    # weekends meal types
    final_df['mealTime'] = np.where((((final_df["date"] == 19) | (final_df["date"] == 25)) & (final_df["mealTime"] == "0")), "continental", final_df['mealTime'])
    final_df['mealTime'] = np.where((((final_df["date"] == 19) | (final_df["date"] == 25)) & (final_df["mealTime"] == "1")), "brunch", final_df['mealTime'])
    final_df['mealTime'] = np.where((((final_df["date"] == 19) | (final_df["date"] == 25)) & (final_df["mealTime"] == "2")), "liteLunch", final_df['mealTime'])
    final_df['mealTime'] = np.where((((final_df["date"] == 19) | (final_df["date"] == 25)) & (final_df["mealTime"] == "3")), "dinner", final_df['mealTime'])

    # weekdays meal types
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "0")), "continental", final_df['mealTime'])
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "1")), "brunch", final_df['mealTime'])
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "2")), "liteLunch", final_df['mealTime'])
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "3")), "dinner", final_df['mealTime'])
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "4")), "lateDinner", final_df['mealTime'])
    final_df['mealTime'] = np.where(((final_df["date"] != 19) & (final_df["date"] != 25) & (final_df["mealTime"] == "5")), "lateNight", final_df['mealTime'])

    removed_items = ['100% Orange Juice', 'Grape Jelly', 'Ketchup', 'Chocolate Soymilk', 'Hazelnut Creamer', 'Strawberry Cream Cheese', 'Original Creamer', 'Diet Mountain Dew', 'Strawberry Kiwi Juice', 'Southern Unsweet Tea', 'Maola Skim Milk', 'Gatorade Orange', 'Yellow Mustard', 'Sierra Mist', 'Southern Sweet Tea', 'Gatorade Fruit Punch', 'Housemade Veggie Cream Cheese', 'Mayonnaise', 'Maola 2% Reduced Fat Milk', 'Root Beer', 'Chives and Onion Cream Cheese', 'Diet Pepsi', 'Margarine', 'Schweppes Ginger Ale', 'Strawberry Jelly', 'Dr. Pepper', 'Maola 1% Chocolate Milk', '100% Apple Juice', 'Tropicana Lemonade', '100% Cranberry Juice', 'Sunkist Orange', 'Vanilla Soymilk', 'SoBe Lifewater Pomegranate', 'Diet Dr. Pepper', 'Plain Cream Cheese Spread', 'Creamy Peanut Butter', 'Texas Pete Hot Sauce', 'Mountain Dew', 'Pepsi', 'Seasonal Apple Cider', "Larry's Decaf Coffee ", 'Cheerwine', 'Oil and Vinegar', 'Maola Whole Milk', 'Tropicana Fruit Punch', "Larry's Coffee ", 'Seasonal Hot Cocoa', 'French Vanilla Creamer', 'Sriracha Sauce ']
    removed_df = final_df[~final_df['itemName'].isin(removed_items)]    
    return removed_df

# get the meals for week of Feb 19
lenoir = week_meal_scrape(19, LENOIR_URL, 7)
chase = week_meal_scrape(19, CHASE_URL, 7)
# TODO: add more dining options
# cholanad = week_meal_scrape(20, CHOLANAD_URL, 6)
# italian = week_meal_scrape(20, ITALIAN_URL, 6)
# bandidos = week_meal_scrape(23, BANDIDOS_URL, 1)
# combined_df = pd.concat([lenoir, chase, cholanad, italian, bandidos], axis=0, ignore_index=True)
combined_df = pd.concat([lenoir, chase], axis=0, ignore_index=True)
combined_df['date'] = combined_df.date.astype('int')
combined_df = combined_df.sort_values(by=['date'])
combined_df.to_csv("combined.csv", index=False)
