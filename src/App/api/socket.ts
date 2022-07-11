const socketUrl = "ws://localhost:8080";
export let messagesSocket = new WebSocket(socketUrl);

// Listen connection events.
messagesSocket.onopen = (ev:Event) => {
    console.log('Socket opened: ', ev);
};
messagesSocket.onmessage = (m:MessageEvent<any>) => {
    let message = JSON.parse(m.data);
    console.log('Message: ', message);
};
messagesSocket.onclose = (ev:CloseEvent) => {
    console.log('Socket closed: ', ev);
};
