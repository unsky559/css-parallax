
// transform: rotateX(40deg) rotateY(40deg);

document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        elem = document.getElementById("rotator");
        elemImg = document.getElementById("imageRotor");
        elemText = document.getElementById("textRotor");
        elem.style.transform = `perspective(1000px) rotateY(${(event.pageX-window.innerWidth/2)/10}deg) rotateX(${-(event.pageY-window.innerHeight/2)/10}deg)`;
        elemImg.style.transform = `translate(${-(event.pageX-window.innerWidth/2)/20-30}px, ${-(event.pageY-window.innerHeight/2)/20-250}px)`;
        elemText.style.transform = `translate(${((event.pageX-window.innerWidth/2)/10)}px, ${( (event.pageY-window.innerHeight/2)/10 )}px)`;
    }


function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
