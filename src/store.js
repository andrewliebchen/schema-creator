import { store } from "react-easy-state";

export default store({
  elements: [{ category: "name", stub: "findName", label: "Full Name" }],
  count: 10,
  editingSchema: false,
  view: "Table"
});
