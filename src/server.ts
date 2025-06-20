import {Server} from 'http';
import mongoose from 'mongoose';
let server: Server;

import app from './app';


const PORT = process.env.PORT || 5000;

async function main() {

    try{
        await mongoose.connect('mongodb+srv://noteapp:noteapp@cluster0.fmznhrh.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
        server  = app.listen(PORT, () => {

            console.log(`Application is running on port ${PORT} `)})

}catch(error) {
            console.error('Error starting the server:', error);
        }
}
    


main()
