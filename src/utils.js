import faker from "faker";
import times from "lodash.times";

export const genSample = element => {
  return faker[element.category][element.stub]();
};

export const getSamples = (count, elements) => {
  let samples = [];
  times(count, i => {
    let sample = {};
    elements.map(
      element =>
        (sample[`${element.category}.${element.stub}`] = genSample(element))
    );
    samples[i] = sample;
  });
  return samples;
};
