package main

import (
  "log"
  "net/http"
  "websocket"
  "time"
)

var upgrader = websocket.Upgrader{}

func main() {
  //Handle and serve dist folder
  fs := http.FileServer(http.Dir("dist"))
  http.Handle("/", fs)

  //send Message data as JSON in a struct
  http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		var conn, _ = upgrader.Upgrade(w, r, nil)
		go func(conn *websocket.Conn) {
			for {
				_, _, err := conn.ReadMessage()
				if err != nil {
					conn.Close()
				}
			}
		}(conn)

    //loop, every 5 seconds send message struct
		go func(conn *websocket.Conn) {
			ch := time.Tick(5 * time.Second)

			for range ch {
				conn.WriteJSON(myStruct{
					Username:  "steedhelix",
					FirstName: "Mick",
					LastName:  "Berber",
				})
			}
		}(conn)
	})

  //sends message back to socket
  http.HandleFunc("/v1/ws", func(w http.ResponseWriter, r *http.Request) {
		var conn, _ = upgrader.Upgrade(w, r, nil)
		go func(conn *websocket.Conn) {
			for {
				mType, msg, _ := conn.ReadMessage()

        //on message, will send message right back to client
				conn.WriteMessage(mType, msg)
			}
		}(conn)
	})

  //prints to terminal
  http.HandleFunc("/v2/ws", func(w http.ResponseWriter, r *http.Request) {
		var conn, _ = upgrader.Upgrade(w, r, nil)
		go func(conn *websocket.Conn) {
			for {
				_, msg, _ := conn.ReadMessage()
        //prints message data to terminal
				println(string(msg))
			}
		}(conn)
	})

  log.Println("Listening...")
  http.ListenAndServe(":3000", nil)
}

//struct
type myStruct struct {
	Username  string `json:"username"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}
