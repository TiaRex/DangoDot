#!/bin/bash
# Navigate to the client directory and start the client application
npm start &
# Navigate to the server directory and start the Express application
cd ./express-application
npm run dev &
# Wait for all background processes to finish
wait