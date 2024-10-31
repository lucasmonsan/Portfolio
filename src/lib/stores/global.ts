import { writable } from 'svelte/store';

export let pageSwapTrigger = writable(false);
export const pageSwapTimer = writable(4000)
export const pageSwapDelay = writable(5000)
