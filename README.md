# Algolia Upload Records
Upload query data records to Algolia

## Set Secrets
`Settings => Secrets => New repository secret`

![162380894499277918](https://images.ichochy.com/162380894499277918.png)



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

## Example
[使用 GitHub Action 自动上传搜索记录到 Algolia](https://ichochy.com/posts/20210612.html)
