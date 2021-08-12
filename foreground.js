setInterval(function(){ 
    console.log("Checking...")
	if(document.getElementsByClassName("ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 fERWGf")[0] != undefined) {
        document.getElementsByClassName("ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 fERWGf")[0].click();
        console.log("Reward claimed!")
    }
}, 1000)

