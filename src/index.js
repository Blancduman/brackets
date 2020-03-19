module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        const tmp = bracketsConfig[i].join("");
        if (str.includes(tmp)) {
            str = str.replace(tmp, "");
            i = -1;
        }
    }

    return !str;
};
