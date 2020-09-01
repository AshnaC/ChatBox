//From Socket.io client lib
const socket = io();

// document.getElementById("inc").addEventListener("click", () => {
//     console.log("clicked Increment button");
//     socket.emit("increment");
// });

// socket.on("countUpdated", count => {
//     console.log("Count updated", count);
// });

socket.on("message", message => {
    console.log(message);
});

document.getElementById("msg_form").addEventListener("submit", e => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    socket.emit("sendMessage", message);
});

document.getElementById("loc_send").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            socket.emit("sendLocation", { latitude, longitude });
        });
    }
});
