<p align="center"><a href="https://melima.hda.me/"><img src="https://avatars2.githubusercontent.com/u/29970755?v=4&s=140"></p></a>
<p align="center"><strong>Open-source ordering system</strong><br><br> <a href="https://melima.hda.me/">Homepage</a> | <a href="https://twitter.com/Melima_Project">Twitter</a> | <a href="https://www.reddit.com/r/melima/">Reddit</a> | <a href="https://melima.slack.com/">Slack</a> | <a href="https://steemit.com/@melima">Steemit</a></p>

## me-core

**Melima Core**

Melima backend based on [LoopBack framework](https://github.com/strongloop/loopback).

Using LoopBack helps us create fast and efficient API and removes various DBs integration hassle.

Current melima core version configured for [PostgresSQL](https://www.postgresql.org/), but thanks to LoopBack you can [connect any popular database](http://loopback.io/doc/en/lb3/Database-connectors.html).

### Prerequirements

Node.js, PostgresSQL (or another LoopBack supported database)

Recommended Node.js and PostgresSQL repositories:  
https://github.com/nodesource/distributions  
https://www.postgresql.org/download/linux/ubuntu/  
https://www.postgresql.org/download/linux/redhat/

#### Optional

[Change npm's default directory to a local one](https://stackoverflow.com/a/39373730)

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"  # ← put this line in .bashrc
source ~/.bashrc  # if you only updated .bashrc
```

## Installation

Execute `npm install` from me-core directory.

```bash
git clone https://github.com/Melima-Project/me-core/
cd me-core/
npm -g install
```

## Getting Started
    
Take a look at the [getting started guide]().
