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
import {
    textContainer,
    textImageContainer,
    imageContainer,
} from './TextImage.module.scss';

const TextContainer = ({ title, content, buttonLabel }) => (
    <div className={textContainer}>
        <h1>{title}</h1>
        <p>{content}</p>
        <Button
            href="https://freight.page.link/request-information"
            kind="secondary"
        >
            {buttonLabel}
        </Button>
    </div>
);

export const TextImage = ({
    children,
    title,
    content,
    buttonLabel,
    leftText,
    rightText,
}) => (
    <div className={textImageContainer}>
        {rightText ? (
            <Row>
                <Column colSm={12} colMd={6} colLg={6}>
                    <div className={imageContainer}>{children}</div>
                </Column>
                <Column colSm={12} colMd={6} colLg={6}>
                    <TextContainer
                        title={title}
                        content={content}
                        href="https://freight.page.link/request-information"
                        buttonLabel={buttonLabel}
                    />
                </Column>
            </Row>
        ) : (
            <Row>
                <Column colSm={12} colMd={6} colLg={6}>
                    <TextContainer
                        title={title}
                        content={content}
                        href="https://freight.page.link/request-information"
                        buttonLabel={buttonLabel}
                    />
                </Column>
                <Column colSm={12} colMd={6} colLg={6}>
                    <div
                        className={imageContainer}
                        href="https://freight.page.link/request-information"
                    />
                </Column>
            </Row>
        )}
    </div>
);
