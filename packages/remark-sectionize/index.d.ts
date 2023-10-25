// index.d.ts

declare module 'remark-sectionize' {
  import { Node, Parent } from 'unist';

  interface SectionNode extends Node {
    type: 'section';
    depth: number;
    children: Node[];
    data: {
      hName: string;
      hProperties: {
        id: string;
      };
    };
  }

  type Transform = (tree: Node) => void;

  function plugin(): Transform;

  export default plugin;
}
