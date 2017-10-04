/*

  Simple function that returns true or false if the selected text contains a hyperlink

*/

function isSelectionLink() {

    if (window.getSelection().toString() != ""){

        var selection = window.getSelection().getRangeAt(0);

        if (selection){

            if (selection.startContainer.parentNode.tagName === 'A' || selection.endContainer.parentNode.tagName === 'A') {

                Console.log("Selected text contains a hyperlink.");

                return [true, selection];

            } else {

                Console.log("Selected text is NOT a hyperlink.");

                return false;

            }

        } else { return false; }
    }
}

var isLink = isSelectionLink();
