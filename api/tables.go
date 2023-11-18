package main

type Tables interface {
	createUserTable() error
}

func (s *PostgresStorage) createUsersTable() error {
	query := `CREATE TABLE IF NOT EXISTS users (
		id serial public key,
		username varchar(50),
		genres number[],
		favorites number[],
    	points number,	
	)`

	_, err := s.db.Exec(query)
	return err
}
