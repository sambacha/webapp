<!-- 
SPDX-License-Identifier: Apache-2.0
SPDXVersion: SPDX-2.2
SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation 
-->
# Freight Trust & Clearing

> Front End and Web application

## Building

### Nodejs Version

`node-version=12.13.0`

### Package Manager

`Yarn` needs `yarn.lock`

If any of the build scripts start with yarn, you must have a `yarn.lock` file.
**Netlify's buildbot will not install Yarn without it**.

### Dependencies and production

If you set the `NODE_ENV` to production, any `devDependencies` in your `package.json` file will not be installed for the build.

### Overview

- React
- Gatsby
- Fathom

## License

SPDX-License-Identifier: Apache 2.0
(C) 2020 FreightTrust and Clearing Corporation. All Rights Reserved.
