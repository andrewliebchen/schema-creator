import { Flex } from "rebass";
import { Table, Column } from "knoll";
import { view } from "react-easy-state";
import Key from "./Key";
import PropTypes from "prop-types";
import React from "react";
import SampleCell from "./SampleCell";
import store from "./store";
import { Copy } from "react-feather";
import { Pointer, ShowOnHover } from "./StyleHelpers";
import copy from "clipboard-copy";

const components = {
  table: props => <table style={{ borderSpacing: 0 }} {...props} />,
  headerCell: props => (
    <th
      style={{
        padding: "0 8px 8px 8px"
      }}
      {...props}
    />
  ),
  cell: props => (
    <td
      style={{
        maxWidth: 200,
        overflow: "hidden",
        padding: 8,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}
      {...props}
    />
  )
};

const SampleTable = props => (
  <Flex width={1} flexDirection="column" px={3} ml="-8px">
    <Table data={props.samples} components={components}>
      {store.elements.map(element => (
        <Column
          key={element.id}
          header={
            <Flex alignItems="center">
              <Key small {...element} width={1} />
              <ShowOnHover>
                <Pointer
                  title="Copy column"
                  id="copyColumn"
                  onClick={() => {
                    const columnContent = props.samples.map(
                      sample => sample[`${element.category}.${element.stub}`]
                    );
                    copy(columnContent);
                    store.toast = {
                      show: true,
                      message: "Column copied to clipboard"
                    };
                  }}
                >
                  <Copy size={14} />
                </Pointer>
              </ShowOnHover>
            </Flex>
          }
          cell={row => <SampleCell row={row} {...element} />}
        />
      ))}
    </Table>
  </Flex>
);

SampleTable.propTypes = {
  samples: PropTypes.array
};

export default view(SampleTable);
