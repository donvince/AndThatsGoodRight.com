
function drawBubble(ctx, x, y, w, h, radius, hook) {
    //http://www.scriptol.com/html5/canvas/speech-bubble.php
    var r = x + w;
    var b = y + h;

    if ("|TopLeft|TopRight|BottomLeft|BottomRight|".indexOf(hook) === -1) {
        hook = "TopLeft";
    }


    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.moveTo(x + radius, y);
    if (hook === "TopLeft") {
        ctx.lineTo(x + radius / 2, y - 10);
        ctx.lineTo(x + radius * 2, y);
    }
    if (hook === "TopRight") {
        ctx.lineTo(r - radius * 2, y);
        ctx.lineTo(r - radius / 2, y - 10);
    }
    ctx.lineTo(r - radius, y);
    ctx.quadraticCurveTo(r, y, r, y + radius);
    ctx.lineTo(r, y + h - radius);
    ctx.quadraticCurveTo(r, b, r - radius, b);
    if (hook === "BottomRight") {
        ctx.lineTo(r - radius / 2, b + 10);
        ctx.lineTo(r - radius * 2, b);
    }
    if (hook === "BottomLeft") {
        ctx.lineTo(x + radius * 2, b);
        ctx.lineTo(x + radius / 2, b + 10);
    }
    ctx.lineTo(x + radius, b);
    ctx.quadraticCurveTo(x, b, x, b - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.stroke();
    ctx.closePath();
}