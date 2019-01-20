docker build -t mariosk/node .
docker run -p 8080:8080 --name mariosknodeinstance -d mariosk/node
docker stop mariosknodeinstance
docker login
docker push mariosk/node
