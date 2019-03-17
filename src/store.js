import { store } from "react-easy-state";
import { genElement, genComponent } from "./utils";

const defaultSchemaElement = genElement({
  category: "name",
  stub: "findName",
  label: "Full Name"
});

export default store({
  schemaElements: [defaultSchemaElement],
  structureElements: [genComponent(defaultSchemaElement.id)],
  selectedHelpers: [],
  count: 10,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" }
});
