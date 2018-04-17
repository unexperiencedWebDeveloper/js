var text = prompt("text?:");
var textNoSpace = text.replace(' ','');

if (text !== "") {
	document.write("Character(s): " + text.length + "<br>");
    document.write("Character(s) excluding spaces: " + text.replace(/\s/g, '').length + "<br>" + "Word(s): " + text.split(" ").length + "<br>" + "Amount of e(s): " + (text.split("e").length - 1));
} else {
document.write("Enter text!");
}
