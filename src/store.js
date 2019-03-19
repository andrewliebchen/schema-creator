import { store } from "react-easy-state";
import { genElement, genComponent } from "./utils";
import remove from "lodash.remove";
import simpleId from "simple-id";

const defaultDataElement = genElement({
  category: "name",
  stub: "findName",
  label: "Full Name"
});

const defaultStructureElements = [genComponent(), genComponent()];

const appStore = store({
  elements: [defaultDataElement].concat(defaultStructureElements),
  structure: [
    {
      id: defaultStructureElements[0].id,
      children: [
        {
          id: defaultStructureElements[1].id,
          children: [{ id: defaultDataElement.id }]
        }
      ]
    }
  ],
  selectedHelpers: [],
  count: 10,
  selectedCategory: false,
  toast: { show: false, message: "Copied to clipboard" },

  getDataElements() {
    return appStore.elements.filter(element => element.type === "data");
  },
  getStructureElements() {
    return appStore.elements.filter(element => element.type === "structure");
  },

  createElement(schema) {
    const dataElement = genElement(schema);
    appStore.dataElements.push(dataElement);
    appStore.structureElements.push(genComponent(dataElement.id));
  },

  destroyElement(id) {
    remove(appStore.dataElements, { id: id });
    remove(appStore.structureElements, { children: id });
  },

  findDataElement(key, value) {
    return appStore.dataElements.find(element => element[key] === value);
  },
  findStructureElement(key, value) {
    return appStore.structureElements.find(element => element[key] === value);
  }
});

export default appStore;
