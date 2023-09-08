# PocketBase x htmx Chat App

A simple chat application built with HTMx, JavaScript, and the PocketBase API, styled using Tailwind CSS.
I was initially just testing to see if i could make a simple chat app using only htmx to sned requests directly to and from pocketbase. this would mean my whole project would be one html file and the pocketbase admin ui. i worked on it for 30 min. 
the problem i pocketbase send json back but htmx expects html.
i removed the htmx code and just did it in js. 
if someone is intrested in the same thing as me here. get in contact with me here. i'll gladly work with you. 
thesre is the current one:
![image](https://github.com/valiantlynx/htmx-chat/assets/86688436/d3c45b12-87b3-43df-879b-92b8bd33fc9d)


## Table of Contents

- [Features](#features)
- [Demo](https://valiantlynx.github.io/htmx-chat/)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Send and receive chat messages.
- Real-time chat updates using htmx.
- Stylish and responsive UI with Tailwind CSS.
- Messages are stored and retrieved using the PocketBase API.
- Easily customizable and extendable.

## Demo

You can try out a live demo of the chat app [here](https://valiantlynx.github.io/htmx-chat/).

## Installation

1. Clone this repository to your local machine:

```bash
git clone [https://github.com/your-username/chat-app.git](https://github.com/valiantlynx/htmx-chat.git)
```
2. Navigate to the project directory:
```bash
cd chat-app

```
3. Open the index.html file in your web browser or serve it using a local development server.

## usage
1. Open the chat app in your web browser.

2. Enter your message in the input field and click the "Send" button to send a message.

3. Received messages will be displayed in the chat container.

4. Messages are stored and retrieved using the PocketBase API. You can replace the API endpoints in the chat.js file with your own endpoints.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

```bash
   git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:

```bash
git commit -m "Add your feature description"
```

4. Push your changes to your forked repository:
```bash
git push origin feature/your-feature-name
```
5. Create a pull request from your forked repository to the main project repository.
Please make sure to follow the project's code of conduct and contribute in a respectful and constructive manner.



