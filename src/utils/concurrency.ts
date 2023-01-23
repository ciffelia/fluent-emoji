import os from 'node:os';

export const concurrency = os.cpus().length * 2;
