import React from "react";
import { Text } from "rebass";

const SampleRow = props => (
  <tr>
    {Object.values(props.sample).map((element, i) => (
      <td key={i}>
        <Text>{element}</Text>
      </td>
    ))}
  </tr>
);

export default SampleRow;
