package main

import (
  "log"
  "net/http"
  "websocket"
)

var upgrader = websocket.Upgrader{}

func main() {
  fs := http.FileServer(http.Dir("dist"))
  http.Handle("/", fs)

  http.HandleFunc("/v1/ws", func(w http.ResponseWriter, r *http.Request) {
    var conn, _ = upgrader.Upgrade(w, r, nil)

    go func(conn *websocket.Conn) {
      for {
        mType, msg, _ := conn.ReadMessage()

        conn.WriteMessage(mType, msg)
      }
    }(conn)
  })

  log.Println("Listening...")
  http.ListenAndServe(":3000", nil)
}
