const pattern = new RegExp(/[.*+?^${}()|[\]\\]/g);

/**
 * Taken directly from the MDN documentation
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping}
 */
export function escapeRegExp(string: string) {
    return string.replace(pattern, '\\$&'); // $& means the whole matched string
}
