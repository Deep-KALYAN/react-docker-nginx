#!/bin/bash

# Step 1: Create Docker network
docker network create mern-net || echo "Network 'mern-net' already exists."

# Step 2: Create MongoDB volume and container
docker volume create mongo-data
docker run -d \
  --name mongo \
  --network mern-net \
  -v mongo-data:/data/db \
  -p 27017:27017 \
  mongo:6

# Step 3: Build and run backend
cd backend || exit
docker build -t mern-backend .
docker run -d \
  --name backend \
  --network mern-net \
  -p 3000:3000 \
  -e MONGO_URL=mongodb://mongo:27017/mydb \
  mern-backend
cd ..

# Step 4: Build and run frontend
cd frontend || exit
docker build -t mern-frontend .
docker run -d \
  --name frontend \
  --network mern-net \
  -p 5073:80 \
  mern-frontend
cd ..

echo "MERN stack is now running:"
echo "- Frontend: http://localhost:5073"
echo "- Backend: http://localhost:3000"