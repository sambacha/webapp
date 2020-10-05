/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import './src/styles/index.scss';
import React from 'react';
import { navigate } from 'gatsby';
import { AuthProvider } from 'react-use-auth';

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="freight-trust.auth0.com"
    auth0_client_id="hcf0P8AXTt5NZu1c0NEdscZ2Y8IuX6jf"
  >
    {element}
  </AuthProvider>
);
