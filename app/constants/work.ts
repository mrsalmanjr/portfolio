import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'KLE JTBCA',
    subtitle: 'BCA Graduation',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'KLE Tech Hubli',
    subtitle: 'MCA Candidate',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-4, -2, -4.5),
    year: '2025',
    title: 'Outlier AI',
    subtitle: 'AI Data Trainer & Developer',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2026',
    title: 'Worthsolving',
    subtitle: 'Full Stack Development',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-1, 0, -9),
    year: '2026',
    title: 'Alignerr',
    subtitle: 'AI Data Annotator',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'left',
  }
]