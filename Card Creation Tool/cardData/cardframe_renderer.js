		function reset()
		{
			document.getElementById('Master').innerHTML="";
		}

		function create_imagetag(attribs)
		{
		var X=document.createElement("img"); 	
			X.id=""+attribs.name+attribs.id;
			X.className =attribs.style;
			X.src=attribs.src;
			return X;
		}

		function create_divtag(attribs)
		{
		var X=document.createElement("div"); 
			X.id=""+attribs.name+attribs.id;
			X.className=attribs.style;
			X.innerHTML=attribs.content;
			return X;
		}

		function resize(newRange)
		{
			inRange=1;
			outer=1;
			innerDiv=1;
			reset();
				document.getElementById('Master').appendChild(create_divtag({"name":"OuterDiv","id":outer,"content":"","style":"ServiceBox"}));
				document.getElementById('OuterDiv1').appendChild(create_divtag({"name":"InnerDiv","id":inRange ,"content":"","style":"serviceBoxSub"}));
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"cardimg","src":"images/card_M.png", "style":"coveredImage"}));
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"topTitle","src":"images/Score_1.png", "style":"topTitle"}));	  
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"name":"Difficulty-icon","id":inRange ,"src":"images/dicebase.png","style":"Difficulty-icon"}));
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"name":"Gold","id":inRange ,"src":"coins--3"+inRange,"style":"Gold"}));	  
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"Strength-icon","src":"images/combatstat-icon.png", "style":"Strength-icon"}));	  
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"Rarity-icon","src":"images/icon-rarity-1.png", "style":"Rarity-icon"}));	  
				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"Typ-icon","src":"images/typeicon-Citizen.png", "style":"Typ-icon"}));	  

				document.getElementById('InnerDiv1').appendChild(create_divtag({"name":"Cardtext","id":inRange ,"content":"T-"+inRange,"style":"Cardtext"}));	  
				document.getElementById('InnerDiv1').appendChild(create_divtag({"name":"Cardname","id":inRange ,"content":"Title Default "+inRange,"style":"Cardname"}));	  
				document.getElementById('InnerDiv1').appendChild(create_divtag({"name":"Difficulty","id":inRange ,"content":"D-"+inRange,"style":"Difficulty"}));	  
				document.getElementById('InnerDiv1').appendChild(create_divtag({"name":"Strength","id":inRange ,"content":"S-"+inRange,"style":"Strength"}));	  

				document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":inRange ,"name":"Artwork","src":"images/shim.png", "style":"artworkImage"}));	  
		}
			