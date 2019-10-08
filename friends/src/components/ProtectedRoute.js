import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import NewFriend from "./FriendCard";



function Protected() {
  const [friends, setFriends] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      });
  }, []);


  return (
    <>
      
      {friends ? (
        
        friends.map(friend => (
          
          <div className="Friendo">

            <h3>Friend Name: {friend.name}</h3>
          
            <h3>Friend Email: {friend.email}</h3>
          
            <h3>Friend Age: {friend.age}</h3>
          
          </div>
        ))
      ) : (
        <h1> Loading....</h1>
      )}
      <NewFriend setFriends={setFriends} />
    </>
  );
}

export default Protected;