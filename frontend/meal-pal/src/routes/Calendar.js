import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import styled from "styled-components";

function CalendarCell(props) {
  return <div>{props.itemName}</div>;
}

function createCalendarCells(item, date, mealTime) {
  if (item.date == date) {
    if (item.mealTime == mealTime) {
      return (
        <div>
          <CalendarCell key={item.key} itemName={item.itemName} />
        </div>
      );
    }
  }
}

function WeekendCalendar(props) {
  const date = props.date;
  return (
    <div>
      <p>Continental</p>
      {props.posts.map((item) =>
        createCalendarCells(item, date, "continental")
      )}
      <p>Brunch</p>
      {props.posts.map((item) => createCalendarCells(item, date, "brunch"))}
      <p>Lite Lunch</p>
      {props.posts.map((item) => createCalendarCells(item, date, "liteLunch"))}
      <p>Dinner</p>
      {props.posts.map((item) => createCalendarCells(item, date, "dinner"))}
    </div>
  );
}

function CalendarNavigation() {
    return <div>
        <p>Pick a date this week to see food menu</p>
        <a href="./calendar/19">19</a><br/>
        <a href="./calendar/20">20</a><br/>
        <a href="./calendar/21">21</a><br/>
        <a href="./calendar/22">22</a><br/>
        <a href="./calendar/23">23</a><br/>
    </div>
}

function Calendar() {
  let params = useLocation().pathname.split("/")
  let date = params[params.length - 1]
//   const date = query.get(dateParam);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/getItems");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <p>{date}</p>
      <WeekendCalendar posts={posts} date={date} />
    </div>
  );
}

export default Calendar;
export { CalendarNavigation }
