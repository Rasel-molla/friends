import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const {friendId} = useParams();
const [ friend,setFriend] = useState({});


    useEffect (() =>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
   fetch(url)
   .then(res => res.json())
   .then(data => setFriend(data));
    })
    return (
        <div>
            <h3>This is fnd.. {friendId}.</h3>
   <h1>{friend.name}</h1>
   <h2>Name:{friend.name}</h2>
            <p>email:{friend.email}</p>
        </div>
    );
};

export default FriendDetail;