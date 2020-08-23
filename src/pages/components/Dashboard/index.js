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
import React, { Component } from "react";
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableSelectAll,
  TableHeader,
  TableBody,
  TableSelectRow,
  TableCell,
  TableToolbar,
  TableBatchAction,
  TableBatchActions,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Button,
  Tag,
  OverflowMenu,
  OverflowMenuItem,
} from "carbon-components-react";
import {
  Delete16 as Delete,
  Save16 as Save,
  Download16 as Download,
} from "@carbon/icons-react";

import "./style.scss";

const customRowData = [
  {
    id: "KLEINSCHMIDT",
    name: "KLEINSCHDMIT",
    entityCode: "D-U-N-S Number, Dun & Boradcast",
    entityID: "124215133",
    testMode: "true",
    status: "pending",
  },
  {
    id: "BLUJAYSOLUTIONS",
    name: "BLUJAYSOLUTIONSAMER",
    entityCode: "D-U-N-S Number, Dun & Boradcast",
    entityID: "124215133",
    testMode: "true",
    status: "pending",
  },
  {
    id: "BLUJAYSOLUTIONS2411",
    name: "BLUJAYSOLUTIONSAMER",
    entityCode: "D-U-N-S Number, Dun & Boradcast",
    entityID: "124215133",
    testMode: "true",
    status: "pending",
  },
  {
    id: "BLUJAYSOLUTIONSAMER4",
    name: "BLUJAYSOLUTIONSAMER",
    entityCode: "D-U-N-S Number, Dun & Boradcast",
    entityID: "124215133",
    testMode: "true",
    status: "pending",
  },
];

const customHeaderData = [
  {
    header: "Name",
    key: "name",
  },
  {
    header: "Entity Code",
    key: "entityCode",
  },
  {
    header: "Entity Identifier",
    key: "entityID",
  },
  {
    header: "Test Mode",
    key: "testMode",
  },
  {
    header: "Status",
    key: "status",
  },
  {
    header: "",
    key: "config",
  },
];

class Dashboard extends Component {
  render() {
    const rowData = customRowData;
    const headerData = customHeaderData;

    return (
      <div className="dashboard-container">
        <DataTable
          isSortable
          rows={rowData}
          headers={headerData}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getBatchActionProps,
            onInputChange,
            selectedRows,
          }) => {
            rows = rows ? rows : [];

            return (
              <TableContainer title={null}>
                <TableToolbar>
                  <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? 0 : -1
                      }
                      renderIcon={Delete}
                      onClick={() => console.log("clicked")}
                    >
                      Delete
                    </TableBatchAction>
                    <TableBatchAction
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? 0 : -1
                      }
                      renderIcon={Save}
                      onClick={() => console.log("clicked")}
                    >
                      Save
                    </TableBatchAction>
                    <TableBatchAction
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? 0 : -1
                      }
                      renderIcon={Download}
                      onClick={() => console.log("clicked")}
                    >
                      Download
                    </TableBatchAction>
                  </TableBatchActions>
                  <TableToolbarContent>
                    <TableToolbarSearch
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? -1 : 0
                      }
                      onChange={onInputChange}
                    />
                    <TableToolbarMenu
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? -1 : 0
                      }
                    >
                      <TableToolbarAction
                        primaryFocus
                        onClick={() => console.log("Alert 1")}
                      >
                        Show Details
                      </TableToolbarAction>
                      <TableToolbarAction
                        onClick={() => console.log("Alert 2")}
                      >
                        Clear all
                      </TableToolbarAction>
                    </TableToolbarMenu>
                    <Button
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? -1 : 0
                      }
                      onClick={() => console.log("clicked")}
                      size="small"
                      kind="primary"
                    >
                      Add new
                    </Button>
                  </TableToolbarContent>
                </TableToolbar>
                <Table useZebraStyles>
                  <TableHead>
                    <TableRow>
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map((header) => (
                        <TableHeader
                          {...getHeaderProps({ header })}
                          id={header.key}
                        >
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => {
                      return (
                        <TableRow {...getRowProps({ row })}>
                          <TableSelectRow {...getSelectionProps({ row })} />
                          {row.cells.map((cell) => {
                            try {
                              if (cell.info.header === "status") {
                                return (
                                  <TableCell key={cell.id}>
                                    <Tag type="blue" title="Clear Filter">
                                      {cell.value}
                                    </Tag>
                                  </TableCell>
                                );
                              }

                              if (cell.info.header === "config") {
                                return (
                                  <TableCell key={cell.id}>
                                    <OverflowMenu>
                                      <OverflowMenuItem
                                        itemText="Show details"
                                        hasDivider
                                      />
                                    </OverflowMenu>
                                  </TableCell>
                                );
                              }
                            } catch (e) {
                              console.log(e);
                            }

                            return (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            );
          }}
        />
      </div>
    );
  }
}

export default Dashboard;
