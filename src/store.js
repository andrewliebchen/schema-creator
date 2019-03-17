import { store } from "react-easy-state";
import { genElement } from "./utils";

const defaultSchema = {
  category: "name",
  stub: "findName",
  label: "Full Name",
  componentElement: "Text",
  componentChildren: null,
  componentProps: []
};

export default store({
  elements: [genElement(defaultSchema)],
  selectedHelpers: [],
  count: 10,
  editingSchema: false,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" }
});
