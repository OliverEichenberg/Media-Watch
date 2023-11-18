package main

func main() {

	//store, err := createPostgresStorage()

	tables := createTablesBuilder()

	server := CreateAPIServer(":3000")
	server.Run()
}
