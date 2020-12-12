var faervmboirzcqirh = "faervmboirzcqirh";
var faervmboiElement = document.getElementById(faervmboirzcqirh);
var isMohGAct = false;

mohAqibAddGDom();

document.addEventListener("click", mohAqibGStart, false);
document
    .querySelector(".moh-close-nt")
    .addEventListener("click", mohAqibHide, false);

function mohAqibAddGDom() {
    if (document.getElementById(faervmboirzcqirh)) return;
    let e = document.createElement("div");
    e.innerHTML = `
            <div class="nt moh-parent movable-parent" style="display: none">
                <div class="moh-header movable">
                    <span class="transparent">
                        <span> Enjoy ;) </span>
                    </span>
                    <span class="moh-close-nt">
                        <i class="action">X</i>
                    </span>
                </div>
                <div class="gi-parent moh-parent">
                    <div class="if-bro"></div>
                    <iframe
                        src=""
                        frameborder="0"
                        height="400"
                        width="600"
                        class="if hide-scroll"
                        id="if-1"
                    ></iframe>
                </div>
            </div>
            <div class="moh-g-activator waiting-for-g moh-parent">
                    <div></div>
            </div>
            `;
    e.id = faervmboirzcqirh;
    e.classList.add(faervmboirzcqirh);
    document.body.append(e);
    faervmboiElement = document.getElementById(faervmboirzcqirh);
}

function mohAqibGAct() {
    if (isMohGAct) return mohAqibGEnd();
    isMohGAct = true;
    document.body.style.cursor = "progress";
    faervmboiElement.querySelector(".waiting-for-g").classList.add("zoom");
    faervmboiElement.querySelector(".nt").style.display = "none";
}
function mohAqibGStart(e) {
    if (e.target.classList.contains("moh-g-activator")) return mohAqibGAct();
    if (!isMohGAct) return;
    let q = e.target.innerText;
    var src = "https://www.google.com/search?igu=1&q=" + q;
    faervmboiElement.querySelector(".if").src = src;
    faervmboiElement.querySelector(".nt").style.display = "block";
    mohAqibGEnd();
}
function mohAqibGEnd() {
    isMohGAct = false;
    document.body.style.cursor = "";
    faervmboiElement.querySelector(".waiting-for-g").classList.remove("zoom");
}

function mohAqibHide(e) {
    let el = e.target;
    let p = el.closest(".movable-parent");
    p.style.display = p.style.display == "none" ? "block" : "none";
    p.style.transform = "none";
}

// *******************************************//
//                  MOVE                      //
//********************************************//

var mohAqibMoving = false;
var mohAqibX;
var mohAqibY;
var mohAqibiX;
var mohAqibiY;
var mohAqibXOffset = 0;
var mohAqibYOffset = 0;
var mohAqibmovingElement;

document.addEventListener("touchstart", mohAqibDragStart, false);
document.addEventListener("touchend", mohAqibDragEnd, false);
document.addEventListener("touchmove", mohAqibDrag, false);

document.addEventListener("mousedown", mohAqibDragStart, false);
document.addEventListener("mouseup", mohAqibDragEnd, false);
document.addEventListener("mousemove", mohAqibDrag, false);

function mohAqibDragStart(e) {
    if (!e.target.classList.contains("movable")) return;
    mohAqibMoving = true;
    mohAqibmovingElement = e.target.closest(".movable-parent");

    mohAqibXOffset = mohAqibmovingElement.dataset.x || 0;
    mohAqibYOffset = mohAqibmovingElement.dataset.y || 0;

    if (e.type === "touchstart") {
        mohAqibiX = e.touches[0].clientX - mohAqibXOffset;
        mohAqibiY = e.touches[0].clientY - mohAqibYOffset;
    } else {
        mohAqibiX = e.clientX - mohAqibXOffset;
        mohAqibiY = e.clientY - mohAqibYOffset;
    }
}

function mohAqibDragEnd(e) {
    if (!mohAqibMoving) return;

    mohAqibMoving = false;
    mohAqibmovingElement.dataset.x = mohAqibXOffset;
    mohAqibmovingElement.dataset.y = mohAqibYOffset;
}

function mohAqibDrag(e) {
    if (mohAqibMoving) {
        e.preventDefault();

        if (e.type === "touchmove") {
            mohAqibX = e.touches[0].clientX - mohAqibiX;
            mohAqibY = e.touches[0].clientY - mohAqibiY;
        } else {
            mohAqibX = e.clientX - mohAqibiX;
            mohAqibY = e.clientY - mohAqibiY;
        }

        if (mohAqibX < 0) mohAqibX = 0;
        if (mohAqibY < 0) mohAqibY = 0;
        if (mohAqibY > faervmboiElement.clientHeight - 200)
            mohAqibY = faervmboiElement.clientHeight - 200;
        if (mohAqibX > faervmboiElement.clientWidth - 200)
            mohAqibX = faervmboiElement.clientWidth - 200;

        mohAqibXOffset = mohAqibX;
        mohAqibYOffset = mohAqibY;
        setTranslate(mohAqibX, mohAqibY, mohAqibmovingElement);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
