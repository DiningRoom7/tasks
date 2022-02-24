import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if(numbers.length === 0) return [];
    return [numbers[0], numbers[numbers.length-1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num*3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number=>  {
                                                const num = parseInt(str); 
                                                if(isNaN(num)) return 0;
                                                return num
                                                });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //lol this one is pretty nasty but it works
    return amounts.map((str: string): string=> str.replaceAll('$', '')).map((str: string): number => isNaN(parseInt(str)) ? 0 : parseInt(str));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter((str: string): boolean=> !str.endsWith('?'))
    return noQuestions.map((str: string):string=> str.endsWith('!') ? str.toUpperCase() : str);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return (words.filter((str: string): boolean=> str.length<4).length);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.filter((str: string): boolean => {
        return !(str === "red" || str === "green" || str === "blue");
    }).length == 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0);
    if(sum===0) return "0=0";
    const eq = (sum.toString()+'=')+(addends.map((num: number): string => num.toString()).join('+'))
    return eq;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const ind = values.findIndex((num: number): boolean => num<0);
    //This part feels a bit jank. Have to make a new value if ind is -1 because it cannot be modified
    const searchind = ind===-1 ? values.length : ind;
    const addends = values.slice(0, searchind);
    const sum = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0);
    const newvals = [...values];
    newvals.splice(searchind+1, 0, sum);
    return newvals;
}
