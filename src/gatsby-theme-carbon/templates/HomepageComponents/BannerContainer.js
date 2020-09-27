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
import { Row, Column } from 'gatsby-theme-carbon';
import { Button } from 'carbon-components-react';
import './BannerContainer.scss';

const BannerText = ({
    title,
    content,
    buttonLabel,
    buttonComponent,
    buttonAction,
}) => (
    <div className="banner">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="buttonContainer">
            {buttonComponent || (
                <Button
                    href="#top"
                    kind="primary"
                    onClick={buttonAction ? () => buttonAction() : () => {}}
                >
                    {buttonLabel}
                </Button>
            )}
        </div>
    </div>
);

export const BannerContainer = ({
    title,
    content,
    buttonLabel,
    buttonComponent,
    buttonAction,
    noBgImage,
}) => (
    <div
        className={`bannerContainer ${
            noBgImage ? `` : `bannerContainerWithBg`
        }`}
    >
        <Row className="bannerRow">
            <Column colSm={12} colMd={7} colLg={7}>
                <BannerText
                    title={title}
                    content={content}
                    buttonLabel={buttonLabel}
                    buttonComponent={buttonComponent}
                    buttonAction={buttonAction}
                />
            </Column>
            <Column colSm={12} colMd={5} colLg={5} />
        </Row>
    </div>
);
