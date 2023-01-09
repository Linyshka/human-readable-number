module.exports = function toReadable(number) {
    let str = number.toString();
    let result = "";
    if (str === "0")
        return "zero";
    if (str.length === 3) {
        if (str[0] === "1")
            result += "one";
        else if (str[0] === "2")
            result += "two";
        else if (str[0] === "3")
            result += "three";
        else if (str[0] === "4")
            result += "four";
        else if (str[0] === "5")
            result += "five";
        else if (str[0] === "6")
            result += "six";
        else if (str[0] === "7")
            result += "seven";
        else if (str[0] === "8")
            result += "eight";
        else result += "nine";
        str = str[1] + str[2];
        result += " " + "hundred";
    }
    if (str[0] === "0")
        str = str[1];
    if (str.length === 2) {
        if (str === "10")
            return (result + " " + "ten").trim();
        else if (str === "11")
            return (result + " " + "eleven").trim();
        else if (str === "12")
            return (result + " " + "twelve").trim();
        else if (str === "13")
            return (result + " " + "thirteen").trim();
        else if (str === "14")
            return (result + " " + "fourteen").trim();
        else if (str === "15")
            return (result + " " + "fifteen").trim();
        else if (str === "16")
            return (result + " sixteen").trim();
        else if (str === "17")
            return (result + " seventeen").trim();
        else if (str === "18")
            return (result + " eighteen").trim();
        else if (str === "19")
            return (result + " nineteen").trim();
        else if (str[0] === "2")
            result += " twenty";
        else if (str[0] === "3")
            result += " thirty";
        else if (str[0] === "4")
            result += " forty";
        else if (str[0] === "5")
            result += " fifty";
        else if (str[0] === "6")
            result += " sixty";
        else if (str[0] === "7")
            result += " seventy";
        else if (str[0] === "8")
            result += " eighty";
        else if (str[0] === "9")
            result += " ninety";
        str = str[1];
    }
    if (str.length === 1) {
        if (str === "0")
            return result.trim();
        if (str === "1")
            return (result + " one").trim();
        if (str === "2")
            return (result + " two").trim();
        if (str === "3")
            return (result + " three").trim();
        if (str === "4")
            return (result + " four").trim();
        if (str === "5")
            return (result + " five").trim();
        if (str === "6")
            return (result + " six").trim();
        if (str === "7")
            return (result + " seven").trim();
        if (str === "8")
            return (result + " eight").trim();
        return (result + " nine").trim();
    }
}