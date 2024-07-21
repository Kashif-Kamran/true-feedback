import mongoose from "mongoose";
import { DATABASE_MONGO } from "@/config";
/*
 */
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  try {
    const db = await mongoose.connect(DATABASE_MONGO.uri);
    // ready state
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Unable to connect to db : error below");
    console.log(error);
    console.log("--- Closing the connection ---");
    process.exit(1);
  }
};

export default dbConnect;
