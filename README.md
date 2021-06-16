# Algolia Upload Records
Upload query data records to Algolia

## Example usage
```bash
# Use Algolia Upload Records action
uses: iChochy/Algolia-Upload-Records@main
# Set environment variables
env:
  APPLICATION_ID: ${{secrets.APPLICATION_ID}}
  ADMIN_API_KEY: ${{secrets.ADMIN_API_KEY}}
  INDEX_NAME: ${{secrets.INDEX_NAME}}
  FILE_PATH: ${{secrets.FILE_PATH}}
```
  
## Full example usage
```bash
name: Algolia Upload Records
on:
  [push]
jobs:
  algolia:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Upload Records
        uses: iChochy/Algolia-Upload-Records@main
        env:
          APPLICATION_ID: ${{secrets.APPLICATION_ID}}
          ADMIN_API_KEY: ${{secrets.ADMIN_API_KEY}}
          INDEX_NAME: ${{secrets.INDEX_NAME}}
          FILE_PATH: ${{secrets.FILE_PATH}}
```
