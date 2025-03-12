const { algoliasearch } = require("algoliasearch");
const fs = require("fs");

const APPLICATION_ID = process.env.APPLICATION_ID;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const INDEX_NAME = process.env.INDEX_NAME;
const FILE_PATH = process.env.FILE_PATH;

const client = algoliasearch(APPLICATION_ID, ADMIN_API_KEY);

try {
  const data = fs.readFileSync(FILE_PATH, "utf8");
  const objects = JSON.parse(data);
  client
    .saveObjects({
      indexName: INDEX_NAME,
      objects: objects,
      waitForTasks: true,
    })
    .then((response) => {
      console.log(response);
      console.log("Save Objects End");
    });
} catch (err) {
  console.error(err);
}
