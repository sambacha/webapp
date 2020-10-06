import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import "./patterns.scss";

class TableList extends Component {
  title = 'Table List';
  subtitle = 'This pattern will display and array of model objects in a multi column grid/table.';

  columns = ['New/Reuse code', 'Error Code', 'Rule No', 'Program', 'Element ID', 'AX Error Number', 'Cargo/ Conv.', 'English Field name', 'English Message', 'Field name French', 'French Message'];
  formatters = {
    'ZipCode': function(val) {
      return val + '-0000';
    }
  };



  data = [
{
  New code: "❌",
  Error Code: "V02",
  Rule No.: "187",
  Program: AX0Y9"R"
  Element ID: "4868",
  AX Error Number: "100053",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container CCN Exception Code",
  English Message: "Is invalid",
  Field name French: "Code d’exception du NCF du conteneur routier",
  French Message: "N’est pas valide",
  },
  {",
  New code: "❌",
  Error Code: "V66",
  Rule No.: "1508",
  Program: "A00Y9J",
  Element ID: "6084",
  AX Error Number: "100874",
  Cargo/ Conv.: "984",
  English Field name: "Automotive Code",
  English Message: "Automotive code not applicable for Highway",
  Field name French: "Code de véhicule",
  French Message: "Code de véhicule non applicable pour le mode routier",
},
{
  New reuse code: ".",
  Error Code: "K51",
  Rule No.: "1519",
  Program: "A00YB4",
  Element ID: "2207",
  AX Error Number: "100053",
  Cargo/ Conv.: "984",
  English Field name: "Transport Mode Code",
  English Message: "Is invalid",
  Field name French: "Code du mode de transport",
  French Message: "N’est pas valide",
},
{
  New reuse code: "❌",
  Error Code: "V91",
  Rule No.: "631",
  Program: "AY0Y3A",
  Element ID: "4131",
  AX Error Number: "100875",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container Related CCN",
  English Message: "CCN cannot be related to 2 conveyances",
  Field name French: "NCF lié au conteneur routier",
  French Message: "Le NCF ne peut pas être lié à deux moyens de transport",
},
{
  New reuse code: "❌",
  Error Code: "V96",
  Rule No.: "748",
  Program: "AY0YKU",
  Element ID: "4131",
  AX Error Number: "100018",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container Related CCN",
  English Message: "Duplicate",
  Field name French: "NCF lié au conteneur routier",
  French Message: "Double",
},
{
  New reuse code: "❌",
  Error Code: "W02",
  Rule No.: "694",
  Program: "AY0YAT",
  Element ID: "4131",
  AX Error Number: "100324",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container Related CCN",
  English Message: "Invalid status of related request",
  Field name French: "NCF lié au conteneur routier",
  French Message: "STATUT INVALIDE DE LADEMANDE ASSOCIÉE",
},
{
  New reuse code: "❌",
  Error Code: "W03",
  Rule No.: "694",
  Program: "AY0YAT",
  Element ID: "4864",
  AX Error Number: "100324",
  Cargo/ Conv.: "976",
  English Field name: "Tractor Related CCN",
  English Message: "Invalid status of related request",
  Field name French: "NCF lié au tracteur",
  French Message: "STATUT INVALIDE DE LADEMANDE ASSOCIÉE",
},
{
  New reuse code: "❌",
  Error Code: "W04",
  Rule No.: "694",
  Program: "AY0YAT",
  Element ID: "4865",
  AX Error Number: "100324",
  Cargo/ Conv.: "976",
  English Field name: "Trailor Related CCN",
  English Message: "Invalid status of related request",
  Field name French: "NCF lié à la remorque",
  French Message: "STATUT INVALIDE DE LADEMANDE ASSOCIÉE",
},
{
  New reuse code: "❌",
  Error Code: "V82",
  Rule No.: "1522",
  Program: "A00YB7",
  Element ID: "4866",
  AX Error Number: "100858",
  Cargo/ Conv.: "976",
  English Field name: "Tractor CCN Exception Code",
  English Message: "Not allowed if conveyance declared as empty",
  Field name French: "Code d’exception du NCF lié au tracteur",
  French Message: "N’est pas permis si le moyen de transport déclaré est vide",
},
{
  New reuse code: "❌",
  Error Code: "V83",
  Rule No.: "1522",
  Program: "A00YB7",
  Element ID: "4867",
  AX Error Number: "100858",
  Cargo/ Conv.: "976",
  English Field name: "Trailer CCN Exception Code",
  English Message: "Not allowed if conveyance declared as empty",
  Field name French: "Code d’exception du NCF lié à la remorque",
  French Message: "N’est pas permis si le moyen de transport déclaré est vide",
},
{
  New reuse code: "❌",
  Error Code: "V84",
  Rule No.: "1522",
  Program: "A00YB7",
  Element ID: "4868",
  AX Error Number: "100858",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container CCN Exception Code",
  English Message: "Not allowed if conveyance declared as empty",
  Field name French: "Code d’exception du NCF lié au conteneur routier",
  French Message: "N’est pas permis si le moyen de transport déclaré est vide",
},
{
  New reuse code: "❌",
  Error Code: "V87",
  Rule No.: "1525",
  Program: "A00YBE",
  Element ID: "1934",
  AX Error Number: "100805",
  Cargo/ Conv.: "984",
  English Field name: "Weight",
  English Message: "Must be greater than zero",
  Field name French: "Poids",
  French Message: "Doit être supérieur à zéro",
},
{
  New reuse code: "❌",
  Error Code: "W11",
  Rule No.: "1308 1451",
  Program: "AX0YEO A00Y6K",
  Element ID: "4131",
  AX Error Number: "100771",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container Related CCN",
  English Message: "Is related to an invalid request type",
  Field name French: "NCF lié au conteneur routier",
  French Message: "Est lié à un type de demande qui n’est pas valide",
},
{
  New reuse code: ".",
  Error Code: "W12",
  Rule No.: "1437",
  Program: "A00Y5W",
  Element ID: "4850",
  AX Error Number: "100010",
  Cargo/ Conv.: "976/984 992",
  English Field name: "Expected Arrival Date/Time/Time Zone",
  English Message: "Is mandatory",
  Field name French: "Date/heure/fuseau horaire d’arrivée prévue",
  French Message: "Est obligatoire",
},
{
  New reuse code: "❌",
  Error Code: "W13",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4131",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container Related CCN",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "NCF lié au conteneur routier",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New reuse code: "❌",
  Error Code: "W14",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4864",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Tractor Related CCN",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "NCF lié au tracteur",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New reuse code: "❌",
  Error Code: "W15",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4865",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Trailor Related CCN",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "NCF lié à la remorque",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New/ reuse code: "❌",
  Error Code: "W18",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4866",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Tractor CCN Exception Code",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "Code d’exception du NCF lié au tracteur",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New/ reuse code: "❌",
  Error Code: "W19",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4867",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Trailer CCN Exception Code",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "Code d’exception du NCF lié à la remorque",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New/ reuse code: "❌",
  Error Code: "W20",
  Rule No.: "1529",
  Program: "A00YCI",
  Element ID: "4868",
  AX Error Number: "100877",
  Cargo/ Conv.: "976",
  English Field name: "Highway Container CCN Exception Code",
  English Message: "Input CCN or Exception Code, but not both",
  Field name French: "Code d’exception du NCF lié au conteneur routier ",
  French Message: "Entrer le NCF ou le code d’exception, mais pas les deux",
},
{
  New/ reuse code: "❌",
  Error Code: "W23",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "2688",
  AX Error Number: "100010",
  Cargo/ Conv.: "984",
  English Field name: "Delivery Address Postal Zip Code",
  English Message: "Is mandatory when country code is "CA" or "US"",
  Field name French: "Code postal/Zip de l’adresse de livraison",
  French Message: "Obligatoire lorsque le pays est le Canada ou les É.},",
{U.",
},
{
  New/ reuse code: "❌",
  Error Code: "W24",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "4137",
  AX Error Number: "100010",
  Cargo/ Conv.: "984",
  English Field name: "Railroad Postal Zip Code",
  English Message: "Is mandatory when country code is "CA" or "US"",
  Field name French: "Code postal/Zip de la compagnie ferroviaire",
  French Message: "Obligatoire lorsque le pays est le Canada ou les É.},",
{U.",
},
{
  New/ reuse code: "❌",
  Error Code: "W25",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "4109",
  AX Error Number: "100724",
  Cargo/ Conv.: "984",
  English Field name: "Shipper Postal Zip Code",
  English Message: "Invalid format for country code "CA" or "US"",
  Field name French: "Code postal/Zip de l’expéditeur",
  French Message: "Format invalide pour le code de pays "CA" ou "US"",
},
{
  New/ reuse code: "❌",
  Error Code: "W26",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "4151",
  AX Error Number: "100724",
  Cargo/ Conv.: "984",
  English Field name: "Consignee Postal Zip Code",
  English Message: "Invalid format for country code "CA" or "US"",
  Field name French: "Code postal/Zip du destinataire",
  French Message: "Format invalide pour le code de pays "CA" ou "US"",
},
{
  New/ reuse code: "❌",
  Error Code: "W27",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "4081",
  AX Error Number: "100724",
  Cargo/ Conv.: "984",
  English Field name: "Notify Party Postal Zip Code",
  English Message: "Invalid format for country code "CA" or "US"",
  Field name French: "Code postal/Zip de la partie à aviser",
  French Message: "Format invalide pour le code de pays "CA" ou "US"",
},
{
  New/ reuse code: "❌",
  Error Code: "W28",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "2688",
  AX Error Number: "100724",
  Cargo/ Conv.: "984",
  English Field name: "Delivery Address Postal Zip Code",
  English Message: "Invalid format for country code "CA" or "US"",
  Field name French: "Code postal/Zip de l’adresse de livraison",
  French Message: "Format invalide pour le code de pays "CA" ou "US"",
},
{
  New/ reuse code: "❌",
  Error Code: "W29",
  Rule No.: "993",
  Program: "A00Y5Y",
  Element ID: "4137",
  AX Error Number: "100724",
  Cargo/ Conv.: "984",
  English Field name: "Railroad Postal Zip Code",
  English Message: "Invalid format for country code "CA" or "US"",
  Field name French: "Code postal/Zip de la compagnie ferroviaire",
  French Message: "Format invalide pour le code de pays "CA" ou "US"",
},
{
  New/ reuse code: "❌",
  Error Code: "W32",
  Rule No.: "187",
  Program: "AX0Y9R",
  Element ID: "4918",
  AX Error Number: "100240",
  Cargo/ Conv.: "984",
  English Field name: "Intransit BOL (future use)",
  English Message: "Element value exceeds size allowed",
  Field name French: "Feuille due route },",
{ En transit  (usage futur)",
  French Message: "Valeur de l’élément supérieure à la grandeur allouée",
},
{
  New/ reuse code: "❌",
  Error Code: "W33",
  Rule No.: "187",
  Program: "AX0Y9R",
  Element ID: "4859",
  AX Error Number: "100010",
  Cargo/ Conv.: "976",
  English Field name: "Tractor Full/Empty Code",
  English Message: "Is mandatory",
  Field name French: "Code de l’état chargé/ vide du tracteur",
  French Message: "Est obligatoire",

  ];

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedRow: 0,
    };
  }

  async componentDidMount() {

    this.setState({
      data: this.data,
    })
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {this.columns.map(col => {
          const format = this.formatters[col] || function(val) { return val; };

          return (
            <StructuredListCell key={col} className="simple-list-row">
              {format(row[col])}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const data = this.state.data;

    return (
      <div className="bx--grid pattern-container">
        <Header
          title={this.title}
          subtitle={this.subtitle}
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {this.columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;
