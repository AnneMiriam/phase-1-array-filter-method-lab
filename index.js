// Code your solution here

const findMatching = (array, letter) => {
    letter = letter.toLowerCase();
    return array.filter(driver => driver.toLowerCase().startsWith(letter))
};

const fuzzyMatch = (array, string) => {
    // string = string.slice(0, 2);
    // return array.filter(driver => driver.slice(string))
    string = string.toLowerCase();
    return array.filter(driver => driver.slice(0,2).toLowerCase() === string)
};

const matchName = (array, name) => {
    return array.filter(driver => driver.name === name);
}