/*
   New Perspectives on HTML and CSS
   Tutorial 10
   Tutorial Case


   Function List:
   stringReverse
      Used to reverse the order of characters in a text string

*/

/*
	The stringReverse() and randomInteger() functions are borrowed from tutorial 10
	of our book.
*/

	function stringReverse(textString) {
	   if (!textString) return '';
	   var revString='';
	   for (i = textString.length-1; i>=0; i--)
		   revString+=textString.charAt(i)
	   return revString;
	}

	function randomInteger(size) {
	   return Math.floor((size+1)*Math.random());
	}

/* Write email link function */

	function showEM(userName, emServer)
	{
		userName     = stringReverse(userName);  //reverse the text of the userName
		emServer     = stringReverse(emServer);	 //reverse the text of the emServer
		var emLink   = userName + "@" + emServer;//combine the text of the userName and emServer
		document.write("<a href='mailto:" + emLink + "'>");
		document.write(emLink);
		document.write("</a>");
	}

/* Show random image */

	function showImg()
	{
		var imgNumber = randomInteger(12); //Return a random number from 0 to 24
		var image     = "m" + imgNumber + ".jpg"; //Combination to create image file name
		var imageS    = "m" + imgNumber + "s.jpg"; //Combination to create resize image file name
			//Display image with link on page
		document.write("<a href='iutam/" + image + "' target='" + "new" + "' title='" + "Click to view in higher resolution" + "'>");
		document.write("<img src='iutam/" + imageS + "'");
		document.write("alt='Image of Kurt Ehlers in IUTAM Moscow meeting in 2006'/>");
		document.write("</a>");
	}