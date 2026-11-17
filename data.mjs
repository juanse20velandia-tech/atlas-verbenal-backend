import { official } from './datasets/official.mjs';
import { community } from './datasets/community.mjs';

import { roads } from './datasets/roads.mjs';

export const seed = [...official, ...community, ...roads];
