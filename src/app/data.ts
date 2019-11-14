import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'a1',
    label: 'A1'
  }, {
    id: 'a2',
    label: 'a2'
  }, {
    id: 'a3',
    label: 'a3'
  }, {
    id: 'b',
    label: 'b'
  }, {
    id: 'c',
    label: 'c'
  }, {
    id: 'd1',
    label: 'd1'
  }, {
    id: 'd2',
    label: 'd2'
  }, {
    id: 'd3',
    label: 'd3'
  }
];

export const clusters: ClusterNode[] = [

]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'a1',
    target: 'b',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'a2',
    target: 'b',
    label: 'custom label'
  }, {
    id: 'c',
    source: 'a3',
    target: 'b',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'b',
    target: 'c',
    label: 'custom label'
  }, {
    id: 'e',
    source: 'c',
    target: 'd1',
    label: 'custom label'
  }, {
    id: 'f',
    source: 'c',
    target: 'd2',
    label: 'custom label'
  }, {
    id: 'g',
    source: 'c',
    target: 'd3',
    label: 'custom label'
  }
];