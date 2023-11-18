package main

type User struct {
	ID        string
	Username  string
	Points    int
	Genres    []string
	Favorites []string
}

func newUser(username string, genres []string) *User {
	return &User{
		Username: username,
		Genres:   genres,
	}
}
