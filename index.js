
const algoliasearch = require('algoliasearch');
const fs = require('fs');

const APPLICATION_ID = process.env.APPLICATION_ID;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const INDEX_NAME = process.env.INDEX_NAME;
const FILE_PATH = process.env.FILE_PATH;

console.log(APPLICATION_ID);
console.log(ADMIN_API_KEY);
console.log(INDEX_NAME);
console.log(FILE_PATH);

const client = algoliasearch(APPLICATION_ID, ADMIN_API_KEY)
const index = client.initIndex(INDEX_NAME)

try {
  const data = fs.readFileSync(FILE_PATH, 'utf8')
  const objects = JSON.parse(data);
  index
    .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
      console.log("Save Objects End");
    });
} catch (err) {
  console.error(err)
}
