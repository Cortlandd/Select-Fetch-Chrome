/*

  Simple function that returns true or false if the selected text contains a hyperlink

*/

function itemIsLinked(){

    if(window.getSelection().toString() != ""){

        var selection = window.getSelection().getRangeAt(0);

        if(selection){

            if (selection.startContainer.parentNode.tagName === 'A'
                || selection.endContainer.parentNode.tagName === 'A') {

                return [true, selection];

            } else { return false; }

        } else { return false; }

    }

}
