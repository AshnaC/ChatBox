import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";

class App extends Component {
    componentDidMount() {
        // this.socket = socketIOClient("http://127.0.0.1:3000");
        this.socket = socketIOClient("");
        this.socket.on("message", message => {
            console.log(message);
        });
    }
    render() {
        return (
            <div className="App">
                <h1> Hello, World </h1>
                <button onClick={this.emitMessages}>Send Message</button>
            </div>
        );
    }

    emitMessages = () => {
        this.socket.emit("sendMessage", "Message from client");
    };
}

export default App;
