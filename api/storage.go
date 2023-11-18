package main

import (
	"database/sql"
)

type Storage interface {
	GetUser(int) (*User, error)
	ListUser() ([]User, error)
	CreateUser(*User) error
}

type PostgresStorage struct {
	db     *sql.DB
	tables Tables
}

func createPostgresStorage() (*PostgresStorage, error) {
	connString := "user=postgres dbname=postgres password=mediawatch sslmode=disable"
	db, err := sql.Open("postgres", connString)
	if err != nil {
		return nil, err
	}

	tables := createTables()

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return &PostgresStorage{
		db: db,
	}, nil
}

func (s *PostgresStorage) GetUser(id int) (*User, error) {
	rows, err := s.db.Query("SELECT * FROM users where id = $1", id)
	user := &User{}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		rows.Scan(
			&user.ID,
			&user.Username,
			&user.Genres,
			&user.Favorites,
			&user.Points)
	}
	return user, err
}
