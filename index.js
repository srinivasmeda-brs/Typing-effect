let paraEl = document.getElementById('para');
let headingEl = document.getElementById('heading');

const paraContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla a cursus luctus, libero eros vehicula lorem, euismod tristique nunc ante ac quam. Sed lacinia scelerisque turpis nec bibendum. Quisque sit amet pharetra est. Cras non orci eu neque aliquam scelerisque. Morbi varius lectus nec dictum egestas. Sed convallis elit a libero feugiat, in maximus magna consectetur. Nullam convallis lorem sed justo malesuada bibendum. Vestibulum tincidunt urna ac dolor volutpat, et interdum nunc hendrerit.\n\nMauris vitae nisl eget purus fermentum luctus non nec mauris. Integer auctor tempor diam, non dictum odio consectetur in. Nulla facilisi. Praesent consequat, libero in convallis dapibus, lectus lectus sodales arcu, ac elementum tortor eros eget lectus. Nunc eu lacus nec libero tempus hendrerit. Duis convallis risus et libero feugiat, sed laoreet ligula feugiat. Ut sit amet libero a ligula facilisis tempor ut at odio. Vivamus ut nulla at dolor convallis luctus. Fusce a magna id elit varius aliquet sit amet ac libero.";
const headingText = "Welcome to My Webpage";

let paraIndex = 0;
let headingIndex = 0;

// Reset the text content for typing effects
function resetContent() {
    paraEl.textContent = "";  // Clear initial paragraph content
    headingEl.textContent = "";  // Clear initial heading content
    paraIndex = 0;
    headingIndex = 0;
}

function headingel() {
    if (headingIndex < headingText.length) {
        headingEl.textContent += headingText.charAt(headingIndex);
        headingIndex++; 
        setTimeout(headingel, 100); // Typing effect for heading
    }
}

function parael() {
    if (paraIndex < paraContentText.length) {
        paraEl.textContent += paraContentText.charAt(paraIndex);
        paraIndex++; 
        setTimeout(parael, 20); // Typing effect for paragraph
    }
}

function restart() {
    resetContent(); // Clear text and restart typing
    headingel(); // Start typing heading
    parael(); // Start typing paragraph
}
