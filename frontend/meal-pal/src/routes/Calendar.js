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
  return (
    <div>
      <p>Continental</p>
      {props.posts.map((item) => createCalendarCells(item, "19", "continental"))}
      <p>Brunch</p>
      {props.posts.map((item) => createCalendarCells(item, "19", "brunch"))}
      <p>Lite Lunch</p>
      {props.posts.map((item) => createCalendarCells(item, "19", "liteLunch"))}
      <p>Dinner</p>
      {props.posts.map((item) => createCalendarCells(item, "19", "dinner"))}
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

  return <div><WeekendCalendar posts={posts} /></div>;
}

export default Calendar;
