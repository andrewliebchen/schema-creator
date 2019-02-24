import { store } from "react-easy-state";
import simpleId from "simple-id";

export default store({
  elements: [
    { id: simpleId(), category: "name", stub: "findName", label: "Full Name" }
  ],
  count: 100,
  editingSchema: false,
  selectedCategory: false,
  view: "Table"
});
