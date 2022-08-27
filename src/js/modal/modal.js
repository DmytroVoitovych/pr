import { getPost } from "./getPost";

export const modal = (selectors) => selectors.forEach(e => e.addEventListener('click', getPost)); 

