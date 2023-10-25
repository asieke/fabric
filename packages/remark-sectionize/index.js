import { findAfter } from 'unist-util-find-after';
import { visit } from 'unist-util-visit';

const MAX_HEADING_DEPTH = 2;
const MIN_HEADING_DEPTH = 2;

function plugin() {
  return transform;
}

function transform(tree) {
  //visit all of the code blocks and give them Ids

  // visit(tree, (node) => node.type === 'code', sectionizeCode);

  for (let depth = MAX_HEADING_DEPTH; depth >= MIN_HEADING_DEPTH; depth--) {
    visit(tree, (node) => node.type === 'heading' && node.depth === depth, sectionizeHeaders);
  }
}

function sectionizeHeaders(node, index, parent) {
  const start = node;
  const startIndex = index;
  const depth = start.depth;

  const isEnd = (node) =>
    (node.type === 'heading' && node.depth <= depth) || node.type === 'export';
  const end = findAfter(parent, start, isEnd);
  const endIndex = parent.children.indexOf(end);

  const between = parent.children.slice(startIndex, endIndex > 0 ? endIndex : undefined);

  const section = {
    type: 'section',
    depth: depth,
    children: between,
    data: {
      hName: 'section',
      //add an id to the section
      hProperties: { id: `section-${startIndex}` }
    }
  };

  parent.children.splice(startIndex, section.children.length, section);
}

export default plugin;
