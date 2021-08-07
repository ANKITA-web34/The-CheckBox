const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //if there are shift down & they are checked 
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //loop over every single checkbox
        checkBoxes.forEach(checkBox => {
            if(checkBox === this || checkBox === lastChecked) {
                inBetween = !inBetween;
            }
            
            if(inBetween) {
                checkBox.checked = true;
            }
        });
    }
    
    lastChecked = this;
}


checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
