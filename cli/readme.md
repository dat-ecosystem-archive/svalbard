# `svalbard` CLI

## Not quite ready yet, check back soon!

The `svalbard` CLI tool uses [dat](http://datproject.org/) to subscribe to a "dat of dats', e.g. a metadata feed where each entry is a dat link for a certain datasets.

The way we manage the metadata feed is the https://github.com/mafintosh/hypercore-archiver-bot which lets use add and remove dats from a private Slack channel. The bot itself manages a hypercore (a dat) feed of Dat urls.

We will add new data sources to this repository, and then update the svalbard metadata through our private bot. The `svalbard` CLI will automatically get new changes and the start seeding datasets.
