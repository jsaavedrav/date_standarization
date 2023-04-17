# Date Standarization project

# Description
This project is a basic example to how working with dates with came in string format and different timezone compared to server. This application read a date in string and standardizes the date to compare with the current date. It's coded in NodeJS with express and have a dockerfile to build a image so can test it in a container.

# Requirements
To run this project in local machina:
* Node (14v recomended)

To run this project in a Docker container:
* Docker Desktop

# Install
If you want to run in a local machine, you can just execute this command in a terminal:
```
git clone https://github.com/jsaavedrav/date_standarization
cd date_standarization
npm install
npm start
```

If you want to execute in a docker container, you can just execute this command in a terminal:
```
docker build -t datestd .
docker run --rm --name datestd1 -p 3000:3000 datestd
```

# Testing
You can testing with an application like insomnia, postman Or just simple exeute a curl like this:
```
curl --request POST \
  --url http://localhost:3000/ \
  --header 'Content-Type: application/json' \
  --data '{
	"dates": [
		"2023-01-01",
		"2023-02-01",
		"2023-03-01"
	]
}'
```

