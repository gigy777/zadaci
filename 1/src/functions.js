const random = (min, max) => {
    if (Number.isInteger(min) && Number.isInteger(max)) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return "Uneti podaci moraju biti celi brojevi!"
    }
};

const minIntegerFromArray = (array) => {
    if (array.length > 5) {
        var int_array = [];
        for (var i = 0; i < array.length; i++) {
            if (Number.isInteger(i)) {
                int_array.push(i)
            };
        };
        if (int_array.length > 0) {
            return Math.min(...int_array)
        } else {
            return false
        };
    } else {
        return "Niz mora imati vise od 5 clanova!"
    }

};

const minIntegerFromString = (string) => {
    if (string.length >= 10) {
        var int = string.match(/\d+/g).map(Number);
        if (int.length > 0) {
            return Math.min(...int)
        } else {
            return false
        }
    } else {
        return "String mora imati najmanje 10 karaktera!"
    }
};

const concatStringsByLength = (arrayOfStrings, type) => {
    var resaultString = "";
    if (type == 0) {
        arrayOfStrings.sort((a, b) => a.length - b.length);
        for (var i = 0; i < arrayOfStrings.length; i++) {
            resaultString += arrayOfStrings[i]
        };
        return resaultString
    } else if (type == 1) {
        arrayOfStrings.sort((a, b) => b.length - a.length);
        for ( var j = 0; j < arrayOfStrings.length; j++) {
            resaultString += arrayOfStrings[i]
        };
        return resaultString
    } else {
        return "Type mora biti 0 ili 1"
    }
};

export { random, minIntegerFromArray, minIntegerFromString, concatStringsByLength }