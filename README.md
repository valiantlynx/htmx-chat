# PocketBase? x htmx x python AI Chat App

A simple chat application built with HTMx, JavaScript, and the PocketBase API, styled using Tailwind CSS. there is a python AI chatbot listening as well.
I was initially just testing to see if i could make a simple chat app using only htmx to send requests directly to and from pocketbase. this would mean my whole project would be one html file and the pocketbase admin ui. i worked on it for 30 min. 
the problem i pocketbase send json back but htmx expects html. though i was able to get the ai to send back html
if someone is intrested in the same thing as me here. get in contact with me here. i'll gladly work with you. 
thesre is the current one:
![image](https://github.com/valiantlynx/htmx-chat/assets/86688436/d3c45b12-87b3-43df-879b-92b8bd33fc9d)

edit: i was able to get the json to display as html. but i still need to figure out how to send json to pocketbase. i've removed the ai for now. i'll add it back later. now this whole project is just one html file and the pocketbase admin ui. Anyone can send pull requests. i'll merge them as long as they are good.

## Table of Contents

- [Features](#features)
- [Demo](https://valiantlynx.github.io/htmx-chat/)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Progress](#progress)
  
## Features

- Send and receive chat messages.
- Real-time chat updates using htmx.
- Stylish and responsive UI with Tailwind CSS.
- Messages are stored and retrieved using the PocketBase API.
- Easily customizable and extendable.

## Demo

You can try out a live demo of the chat app [here](https://valiantlynx.github.io/htmx-chat/).

## Progress

i've been able to show the messages returned from pocketbase(as json) into the chat and looks good.
i will return the ai to listen to the chats and answer. 

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/valiantlynx/htmx-chat.git
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

## License
This project is licensed under the MIT License - do what the fuck you want. just give me credit.


## for cloning into monorepo
```bash
git subtree add --prefix=apps/htmx-chat https://github.com/valiantlynx/htmx-chat.git main --squash
git subtree pull --prefix=apps/htmx-chat https://github.com/valiantlynx/htmx-chat.git main --squash
git subtree push --prefix=apps/htmx-chat https://github.com/valiantlynx/htmx-chat.git main
```
