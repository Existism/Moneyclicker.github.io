window.onload = function() {
    let clickallower = true;
    function clickallow(){
        clickallower = true;
    }
    // Login function
    document.getElementById("startclicking").addEventListener("click", function() {
        // Hides old elements
        document.getElementById("startclicking").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        
        // Initialize clicks
        let clicks = 0;
        
        // Create new elements
        const click = document.createElement("h1");
        const clickbutton = document.createElement("button");
        
        // Set text and IDs
        clickbutton.innerText = "Click Me";
        clickbutton.id = "clickbutton";
        click.innerText = `Value: ${clicks}`;
        
        // Get the container where the new elements will go
        const container = document.getElementById("container");
        
        // Append the new elements to the container
        document.body.prepend(container);
        document.body.prepend(click);
        container.prepend(clickbutton);
        
        // Attach event listener to the dynamically created button
        clickbutton.addEventListener("click", function() {
        if(clickallower == true){
            clicks++;
            click.innerText = `Value: ${clicks}`;
            clickallower = false;
            setTimeout(clickallow, 1000);
        }
            
          
        });
    });
};
