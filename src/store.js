import { store } from "react-easy-state";
import { genElement, genComponent } from "./utils";

const defaultDataElement = genElement({
  category: "name",
  stub: "findName",
  label: "Full Name"
});

export default store({
  dataElements: [defaultDataElement],
  structureElements: [genComponent(defaultDataElement.id)],
  selectedHelpers: [],
  count: 10,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" }
});
