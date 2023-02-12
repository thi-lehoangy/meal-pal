# run this in the terminal: 
# python -m pip install requests

import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

def week_meal_scrape(start):
    URL = "https://dining.unc.edu/locations/chase/?date=2023-02-"

    for i in range(0,7):
        day = start+i
        url = URL + str(day)
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
        curr_meal = ""
        # all elements in results
        for list_item in results:
            for link in list_item.find_all('a'):
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
        csv_name = str(day) + ".csv"
        df.to_csv(csv_name, index=False)
    # when connecting with backend, we realized it's easier to have 1 csv file
    # TODO: refactor code

    final_df = pd.DataFrame()
    for i in range(0,7):
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

    final_df.to_csv("final.csv")

# get the meals for week of Feb 19
week_meal_scrape(19)