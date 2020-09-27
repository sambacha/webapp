import React from 'react';
import { render } from 'react-dom';
import 'carbon-components/css/carbon-components.min.css';
import { ContentSwitcher, Switch } from 'carbon-components-react';

const App = () => (
    <ContentSwitcher onChange={console.log}>
        <Switch name="first" text="Exporter (OEM)" />
        <Switch name="second" text="Intermodal: FTL" />
        <Switch name="third" text="Customs Clearance: Export" />
        <Switch name="fourth" text="Intermodal: Drayage" />
        <Switch name="fifth" text="Voyage" />
        <Switch name="sixth" text="Intermodal: Drayage" />
        <Switch name="seventh" text="Customs Clearance: Import" />
        <Switch name="eigth" text="Intermodal: FTL" />
        <Switch name="nineth" text="Intermodal: Importer (Retail)" />
    </ContentSwitcher>
);

render(<App />, document.getElementById(`root`));
