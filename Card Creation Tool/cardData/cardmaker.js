   var i=0;
   range=1;

   function writeStuff(jsondata) {
   i=i+1; 
   if (i>= myTagVals.length ) { i=0; }
    
 	var elementID=i;
	var internalID=1; //jsondata.Box_ID+1;
//	var workingCanvasBox="cardcanvas"+internalID;
	var cardName =jsondata.stuff.Cardname;

	var imageObjShim = "images/shim.png";	
	var imageObjStrengthicon ="images/combatstat-icon.png"

	console.log("Rendering: \""+cardName +"\" into Frame: "+internalID);	
    console.log("Element: "+elementID+" , internal: "+internalID);

	var imageObjTitle = new Image();
	var imageObjArtTitle = new Image();
	var imageObjArtwork = new Image();	
	var imageObjTyp = 'images/cardtype_' + jsondata.stuff.Typ + '.png';
	var imageObjTypIcon = 'images/typeicon-' + jsondata.stuff.Typ + '.png';
	var imageObjTitle = 'images/labelbox_up.png';
	var imageObjArtTitle = 'images/labelbox_down.png';
	var imageObjArtwork = "artwork/"  + jsondata.stuff.Image + '.png';	
	var imageObjGold = "images/coins-"+ jsondata.stuff.Gold + '.png';
	var imageObjRarity = "images/icon-rarity-"+ jsondata.stuff.Rarity + '.png';
	var imageObjDifficulty = "images/dicebase.png";
	var imageObjDifficultyTreasure = "images/difficulty-Treasure.png";
	var imageObjDifficultyRecruiting = "images/difficulty-Recruiting.png";
	var imageObjDifficultyBuilding = "images/difficulty-coins.png";
	var cardtext=jsondata.stuff.Cardtext;
	console.log("Type: "+jsondata.stuff.Typ +" in Box: cardimg"+internalID +" to " +imageObjTyp);

	document.getElementById("topTitle"+internalID).src = imageObjTitle;
//	document.getElementById("subTitle"+internalID).src = imageObjArtTitle;
	document.getElementById("cardimg"+internalID).src = imageObjTyp;
	
	document.getElementById("Gold"+internalID).src = imageObjGold;

	
	document.getElementById("topTitle"+internalID).src = imageObjTitle;
//	document.getElementById("subTitle"+internalID).src = imageObjArtTitle;

	document.getElementById("Cardname"+internalID).innerHTML= jsondata.stuff.Cardname;

	//Set inline icons
	cardtext=cardtext.replace(/::Kraft::/g, "<img class=\"inlinetext-icon\" src=images/combatstat-icon.png />");
	cardtext=cardtext.replace(/::Gold::/g, "<img class=\"inlinetext-icon\" src=images/gold-icon.png />");
	cardtext=cardtext.replace(/::Goldkosten::/g, "<img class=\"inlinetext-icon\" src=images/gold-cost.png />");
	cardtext=cardtext.replace(/::Rekrutierung::/g, "<img class=\"inlinetext-icon\" src=images/difficulty-Recruiting.png />");
	cardtext=cardtext.replace(/::Schatzsuche::/g, "<img class=\"inlinetext-icon\" src=images/difficulty-Treasure.png />");
	cardtext=cardtext.replace(/1 ::Siegpunkt::/g, "<img class=\"inlinetext-icon-large\" src=images/victorypoint.png />");
	cardtext=cardtext.replace(/2 ::Siegpunkte::/g, "<img class=\"inlinetext-icon-large\" src=images/victorypoint.png /><img class=\"inlinetext-icon-large\" src=images/victorypoint.png />");
	cardtext=cardtext.replace(/3 ::Siegpunkte::/g, "<img class=\"inlinetext-icon-large\" src=images/victorypoint.png /><img class=\"inlinetext-icon-large\" src=images/victorypoint.png /><img class=\"inlinetext-icon-large\" src=images/victorypoint.png />");
	document.getElementById("Cardtext"+internalID).innerHTML= cardtext;

//	document.getElementById("Gold"+internalID).innerHTML= jsondata.stuff.Gold;
	

	document.getElementById("Strength"+internalID).innerHTML= "";
	document.getElementById("Strength-icon"+internalID).src=imageObjShim;
	if (jsondata.stuff.Strength != "") {
	document.getElementById("Strength-icon"+internalID).src=imageObjStrengthicon;
	document.getElementById("Strength"+internalID).innerHTML= jsondata.stuff.Strength;
	}

//	document.getElementById("Rarity"+internalID).innerHTML= jsondata.stuff.Rarity;

	document.getElementById("Rarity-icon"+internalID).src=imageObjShim;
	if (jsondata.stuff.Rarity > 0) {
		document.getElementById("Rarity-icon"+internalID).src=imageObjRarity;
	}	

	document.getElementById("Typ-icon"+internalID).src=imageObjShim;
	//if (jsondata.stuff.Typ > 0) {
	document.getElementById("Typ-icon"+internalID).src=imageObjTypIcon;
	//}	


	document.getElementById("Difficulty"+internalID).innerHTML= jsondata.stuff.Difficulty;
	document.getElementById("Difficulty-icon"+internalID).src=imageObjShim;
	if (jsondata.stuff.Difficulty > 0) {
		document.getElementById("Difficulty-icon"+internalID).src=imageObjDifficultyRecruiting;
		if (jsondata.stuff.Typ == "Treasure") {
		document.getElementById("Difficulty-icon"+internalID).src=imageObjDifficultyTreasure;
		}
		if (jsondata.stuff.Typ == "Building") 
		{
		document.getElementById("Difficulty-icon"+internalID).src="images/difficulty-coins.png"
		}
	}	
	//Special case: building

	document.getElementById("Artwork"+internalID).src=imageObjShim;
	if (jsondata.stuff.Image != "") {
		document.getElementById("Artwork"+internalID).src=imageObjArtwork;
	} 	

	// Smaller scaled faces
	document.getElementById("Artwork"+internalID).className="artworkImage";
	if ((jsondata.stuff.Typ =="Citizen") || (jsondata.stuff.Typ =="Elder"))
	{
		document.getElementById("Artwork"+internalID).className="artworkFaceImage";		
	}
	if (jsondata.stuff.Typ =="Treasure")
	{
		document.getElementById("Artwork"+internalID).className="artworkTreasureImage";		
	}
	if (jsondata.stuff.Typ =="Building")
	{
		document.getElementById("Artwork"+internalID).className="artworkBuildingImage";		
	}
		

   }

      function nextPage() {
      var printSize=range*range;
      document.getElementById("pageid").innerHTML= "Current Page: " +(1+ i);
      var Counter=0;
      for (Counter = 0; Counter < printSize; Counter++) {   
      	writeStuff({"Box_ID":Counter,"stuff":myTagVals[i]}); 	
        }
      }

	$(function() { 
	    $("#btnSave").click(function() { 
	        html2canvas($("#InnerDiv1"), {
	            onrendered: function(canvas) {
	                theCanvas = canvas;
	                document.body.appendChild(canvas);

	                // Convert and download as image 
	                Canvas2Image.saveAsPNG(canvas); 
	                //document.getElementById("imgout").appendChild(canvas);
	                document.body.appendChild(canvas);
	                // Clean up 
	                //document.body.removeChild(canvas);
	            }
	        });
	    });
	}); 
	 
