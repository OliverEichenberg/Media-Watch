package main

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type APIServer struct {
	listenAddr string
	storage    PostgresStorage
}

func CreateAPIServer(listenAddr string, storage PostgresStorage) *APIServer {
	return &APIServer{
		listenAddr: listenAddr,
		storage:    storage,
	}
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()

	router.HandleFunc("/users", handleGetUser())

	log.Println("JSON API server running on port: ", s.listenAddr)

	http.ListenAndServe(s.listenAddr, router)

	return nil
}

func (s *APIServer) handleGetUser(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "GET" {
		s.storage.GetUser()
	}
	return nil
}
