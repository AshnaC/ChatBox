import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "./socket";

function App() {
    const [message, setMessage] = React.useState("");

    useEffect(() => {
        socket.on("message", message => {
            console.log(message);
        });
    }, []);

    const onMessageChange = e => {
        setMessage(e.target.value);
    };

    const emitMessages = () => {
        socket.emit("sendMessage", message);
    };

    return (
        <div className="App">
            <h1> Hello, World </h1>
            <input onChange={onMessageChange}></input>
            <button onClick={emitMessages}>Send Message</button>
        </div>
    );
}

export default App;
