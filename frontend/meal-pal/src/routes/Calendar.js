import React, { useEffect, useState } from "react";
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
    const date = props.date
  return (
    <div>
      <p>Continental</p>
      {props.posts.map((item) => createCalendarCells(item, date, "continental"))}
      <p>Brunch</p>
      {props.posts.map((item) => createCalendarCells(item, date, "brunch"))}
      <p>Lite Lunch</p>
      {props.posts.map((item) => createCalendarCells(item, date, "liteLunch"))}
      <p>Dinner</p>
      {props.posts.map((item) => createCalendarCells(item, date, "dinner"))}
    </div>
  );
}

function Calendar() {
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

  return <div>
    <p>19</p>
    <WeekendCalendar posts={posts} date="19" />
    <p>20</p>
    <WeekendCalendar posts={posts} date="20" />
    <p>21</p>
    <WeekendCalendar posts={posts} date="21" />
    </div>;
}

export default Calendar;
