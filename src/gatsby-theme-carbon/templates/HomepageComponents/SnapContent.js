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
import React from 'react';
import { Button } from 'carbon-components-react';
import { Row, Column } from 'gatsby-theme-carbon';
import { snapCard, snapContent } from './SnapContent.module.scss';

export const SnapCard = (props) => (
    <div className={snapCard}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button
            href="https://freight.page.link/request-information"
            kind="tertiary"
        >
            {props.buttonLabel}
        </Button>
    </div>
);

export const SnapContent = ({ title, children }) => (
    <div className={snapContent}>
        <Row>
            <Column colSm={12} colMd={6} colLg={6}>
                <h1>{title}</h1>
            </Column>
            <Column colSm={12} colMd={6} colLg={6} />
        </Row>
        {children}
    </div>
);
