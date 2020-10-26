
let state = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Damach" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Vasya" },
      { id: 6, name: "Voava" }

    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "I`m a hero" },
      { id: 3, message: "What a fack" },
    ],
  },

  postsPage: {
    postsData: [
      { id: 1, message: "Hi! How are you?", likeCount: 15 },
      { id: 2, message: "I`m fine", likeCount: 48 },
      { id: 3, message: "I read the book", likeCount: 21 },
      { id: 4, message: "Yo", likeCount: 8 },
    ]
  },
  sideBar: {
    NavBarData: [
      {path: "/profile", nameLink: "Profile"},
      {path: "/dialog", nameLink: "Massege"},
      {path: "/news", nameLink: "News"},
      {path: "/music", nameLink: "Music"},
      {path: "/settings", nameLink: "Settings"},
  
    ],
  },
  


}

export default state