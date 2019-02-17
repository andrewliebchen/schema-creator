import faker from "faker";
import times from "lodash.times";

export const genSample = element => {
  const types = element.split(".");
  return faker[types[0]][types[1]]();
};

export const getSamples = (count, elements) => {
  let samples = [];
  times(count, i => {
    let sample = {};
    elements.map(element => (sample[element] = genSample(element)));
    samples[i] = sample;
  });
  return samples;
};
