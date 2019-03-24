import { store } from "react-easy-state";
import simpleId from "simple-id";

export default store({
  elements: [
    { id: simpleId(), category: "name", stub: "findName", label: "Full Name" },
    { id: simpleId(), category: "internet", stub: "email", label: "Email" },
    {
      id: simpleId(),
      category: "company",
      stub: "companyName",
      label: "Company Name"
    },
    { id: simpleId(), category: "name", stub: "jobTitle", label: "Job Title" }
  ],
  selectedHelpers: [],
  count: 50,
  editingSchema: false,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" }
});
