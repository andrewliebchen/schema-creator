import { store } from "react-easy-state";
import simpleId from "simple-id";

export default store({
  elements: [
    { id: simpleId(), category: "name", stub: "findName", label: "Full Name" },
    {
      id: simpleId(),
      category: "date",
      stub: "past",
      label: "Past",
      type: "date"
    }
  ],
  count: 10,
  editingSchema: false,
  selectedCategory: false,
  view: "Table"
});
