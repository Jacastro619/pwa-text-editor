import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 2, {
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
export const putDb = async (content) => {
  try {
    console.log("PUT to the database");
    const jateDb = await openDB("jate", 2);
    const tx = jateDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log("Data saved to the database", result);
  } catch (err) {
    console.error("putDb not implemented");
  }
};

// TODO: Add logic for a method that gets all the content from the database
// add logic to get content
// openDB method
// create a trasaction
// object store - store name
// get the store 'getone' -1
// await the request
// return the results
export const getDb = async () => {
  try {
    console.log("GET from the database");
    const jateDb = await openDB("jate", 2);
    const tx = jateDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log("result.value", result);
    if (result.length === 0) {
      return null;
    }
    return result[0].value;
  } catch (err) {
    console.error("getDb not implemented");
  }
};

initdb();
