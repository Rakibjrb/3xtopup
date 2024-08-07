import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.NEXT_SECRETE_DBURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const Users = client.db("3xtopup").collection("users");

const connectdb = () => client.connect();

const run = async () => {
  try {
    await connectdb();
  } catch (e) {
    throw new Error("DB not connected");
  }
};

export { Users, run as connectDB };
