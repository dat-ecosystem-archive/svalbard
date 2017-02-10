# Svalbard

A global metadata vault for public domain datasets. A [Dat Project](https://datproject.org) initiative. Named after the Svalbard Global Seed Vault.

[![pic](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Svalbard_seed_vault_IMG_8894.JPG/640px-Svalbard_seed_vault_IMG_8894.JPG)](https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault)

This repository is meant to house and track metadata about where important public datasets exist online. It is not meant to describe individual datasets, e.g. the NASA IceSat2 Satellite Mission Data, but rather describe entire repositories that house multiple datasets such as `data.nasa.gov`, `data.gov`, and others.

The target users for this information are other archivists who are wishing to coordinate on what they are crawling and storing. We hope to contribute to data backup efforts with this repository by collecting in one place a "dataset of datasets".

## Status

Currently in the initial metadata collection phase.

See `metadata` for known US federal data servers. Open Issues or PRs to report additional metadata sources.

In progress sources are being tracked [in the issue tracker](https://github.com/datproject/svalbard/issues).

## Current Sources

- `metadata/ftpgov.json` - Known US Government FTP server list extracted from the ArchiveTeam FTP-GOV Crawl
- `metadata/datagov-ftp` - FTP servers referenced from data.gov metadata
- `metadata/datagov-http` - HTTP servers referenced from data.gov metadata (a little messy due to invalid metadata)
