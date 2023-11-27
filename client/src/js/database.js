import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// add logic to update content
// openDB with DB name and Version method
// create a trasaction DB name, readwrite
// object store name of object store (same as DB name but not always the case)
// put the store content: id, info
// await the request
export const putDb = async (content) => console.error("putDb not implemented");

// TODO: Add logic for a method that gets all the content from the database
// add logic to get content
// openDB method
// create a trasaction
// object store - store name
// get the store 'getone' -1
// await the request
// return the results
export const getDb = async () => console.error("getDb not implemented");

initdb();
