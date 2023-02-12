import React, { useEffect, useState } from "react";
// import styled from "styled-components";

const Calendar = () => {

    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'http://localhost:3000/getItems'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };
      fetchPost();
   }, []);

    return (
        <div>
            {posts.map(posts => <div>{posts.date}</div>)}
        </div>
    );
};
export default Calendar;