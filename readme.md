[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](https://dat-ecosystem.org/) 

More info on active projects and modules at [dat-ecosystem.org](https://dat-ecosystem.org/) <img src="https://i.imgur.com/qZWlO1y.jpg" width="30" height="30" /> 

---

# Svalbard

A global metadata vault for public domain datasets. A [Dat Project](https://datproject.org) initiative. Named after the Svalbard Global Seed Vault.

[![pic](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Svalbard_seed_vault_IMG_8894.JPG/640px-Svalbard_seed_vault_IMG_8894.JPG)](https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault)

The target users for this information are other archivists who are wishing to coordinate on what they are crawling and storing. We hope to contribute to data backup efforts with this repository by collecting in one place a "dataset of datasets".

## Status

Svalbard V1 release [is out!](https://medium.com/@maxogden/project-svalbard-a-metadata-vault-for-research-data-7088239177ab#.6gy3eectc). You can download it with Dat here: https://datproject.org/de8cb55dcf2bee13b6cf86a6c4619f2368a66ffe0a0b270784bc386fcfa6ee70.

In progress sources are being tracked [in the issue tracker](https://github.com/datproject/svalbard/issues).

## Current Sources

### data.gov

- children-meta.json - from https://catalog.data.gov/api/action/package_search?fq=collection_package_id:*
- parent-headers.json - from http://catalog.data.gov/api/3/action/package_search
- children-headers.json - HTTP GET response headers for resources.*
- parent-meta.json - HTTP GET response headers for resources.*
- downloaded.json - download results for initial ~40TB download with SHA256 hashes of downloaded files as the 'file' property

### internet archive

- eotcdx.json - cdx files converted to json lines for all files inside warcs inside https://archive.org/details/EndOfTerm2016WebCrawls
- ftpservers.txt - 750+ federal ftp servers being mirrored by archive team

## Using the data

You can use any tool that supports JSON Lines to analyze the data, [here is a tutorial](https://github.com/jsonlines/guide). 
