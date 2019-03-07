import { store } from "react-easy-state";
import simpleId from "simple-id";

export default store({
  elements: [
    { id: simpleId(), category: "name", stub: "findName", label: "Full Name" }
  ],
  selectedHelpers: [],
  count: 10,
  editingSchema: false,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" }
});
