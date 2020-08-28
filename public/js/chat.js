//From Socket.io client lib
const socket = io();

document.getElementById("inc").addEventListener("click", () => {
    console.log("clicked Increment button");
    socket.emit("increment");
});

socket.on("countUpdated", count => {
    console.log("Count updated", count);
});
