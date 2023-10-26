import { sections } from '../data/sample';
import ExactSearch from './search';
import { expect, test } from 'vitest';

let index = new ExactSearch({
  data: sections,
  indexFields: ['title', 'content'],
  resultFields: ['title', 'slug', 'sectionId']
});

//create a test in vitest that will test the search function

test('[search]: npm', () => {
  const results = index.search('npm');
  expect(results[0].slug).toBe('sdk');
});

test('[search]: this', () => {
  const results = index.search('this');
  expect(results.length).toBe(4);
});

test('[search]: This', () => {
  const results = index.search('This');
  expect(results.length).toBe(4);
});

test('[search]: How are you', () => {
  const results = index.search('How are you');
  expect(results.length).toBe(0);
});

test('[search]: yarn add svelte-mardown (misspelled)', () => {
  const results = index.search('yarn add svelte-mardown');
  expect(results.length).toBe(0);
});

test('[search]: yarn add svelte-markdown (correct)', () => {
  const results = index.search('yarn add svelte-markdown');
  expect(results.length).toBe(1);
});
