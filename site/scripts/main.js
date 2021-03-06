
function drawBubble(ctx, x, y, w, h, radius, hook) {
    //http://www.scriptol.com/html5/canvas/speech-bubble.php
    var r = x + w;
    var b = y + h;

    if ("|TopLeft|TopRight|BottomLeft|BottomRight|BottomRightIn|BottomLeftIn|".indexOf(hook) === -1) {
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
    ctx.quadraticCurveTo(r, b, r - radius , b);
    if (hook === "BottomRight") {
        ctx.lineTo(r - radius / 2, b + 10);
        ctx.lineTo(r - radius * 2, b);
    }
    if (hook === "BottomRightIn") {
    ctx.lineTo(r - 20 - radius / 2, b + 10);
    ctx.lineTo(r - radius * 2, b );
    }
    if (hook === "BottomLeft") {
        ctx.lineTo(x + radius * 2, b);
        ctx.lineTo(x + radius / 2, b + 10);
    }
        if (hook === "BottomLeftIn") {
        ctx.lineTo(x + radius * 2, b);
        ctx.lineTo(x + 20 + radius / 2, b + 10);
    }
    ctx.lineTo(x + radius, b);
    ctx.quadraticCurveTo(x, b, x, b - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.stroke();
    ctx.closePath();
}

function stickMan(context, x, y, hairColour) {


    context.lineWidth = 5;

    var headsize = 40;
    var headX = x;
    var headY = y;
    var bodyLength = 100;
    //TODO: legLength and armLength aren't really being used as a length, should probably use rotate() to make life easier
    var legLength = 50;
    var armLength = 70;
    var hairLength = 20;


    //Head
    context.strokeStyle = '#000000';
    context.save();
    context.translate(headX, headY);
    context.beginPath();
    context.arc(0, 0, headsize, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    context.restore();

    //Left eye
    context.strokeStyle = '#000000';
    context.save();
    context.translate(headX, headY);
    context.beginPath();
    context.arc(-headsize / 3, -headsize / 2, headsize * 0.2, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    context.restore();

    //Right eye
    context.strokeStyle = '#000000';
    context.save();
    context.translate(headX, headY);
    context.beginPath();
    context.arc(headsize / 3, -headsize / 2, headsize * 0.2, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    context.restore();

    //Mouth
    context.strokeStyle = '#000000';
    context.save();
    context.translate(headX, headY);
    context.beginPath();
    context.moveTo(-headsize / 2, headsize / 6);
    context.lineTo(headsize / 3, headsize / 3);
    context.stroke();
    context.closePath();
    context.restore();

    //Body
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(headX, headY + headsize);
    context.lineTo(headX, headY + headsize + bodyLength);
    context.stroke();
    context.closePath();

    //Right leg
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(headX, headY + headsize + bodyLength);
    context.lineTo(headX + legLength, headY + headsize + bodyLength + legLength);
    context.stroke();
    context.closePath();

    //Left leg
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(headX, headY + headsize + bodyLength);
    context.lineTo(headX - legLength, headY + headsize + bodyLength + legLength);
    context.stroke();
    context.closePath();

    //Left arm
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(headX, headY + headsize + (bodyLength / 4));
    context.lineTo(headX - armLength, headY + headsize + (bodyLength / 4));
    context.stroke();
    context.closePath();

    //Right arm
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(headX, headY + headsize + (bodyLength / 4));
    context.lineTo(headX + armLength, headY + headsize + (bodyLength / 14));
    context.stroke();
    context.closePath();

    //drawOriginalHair(context);

    for (var hairPos = 130; hairPos <= 220; hairPos += 7.5) {

        var waggle = Math.random() * 20;
        var wiggle = Math.random() * 10;

        context.strokeStyle = hairColour;
        context.save();
        context.translate(headX, headY);
        //left = 130
        //right = 220
        context.rotate(hairPos * Math.PI / 180);
        context.beginPath();
        context.moveTo(0 + waggle, headsize);
        context.lineTo(0 + wiggle, headsize + hairLength);
        context.stroke();
        context.closePath();
        context.restore();

    }
}

function drawOriginalHair(context) {
    //Hair
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(216, 37);
    context.lineTo(199, 66);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(193, 58);
    context.lineTo(197, 29);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(185, 49);
    context.lineTo(180, 26);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(170, 52);
    context.lineTo(180, 32);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(160, 49);
    context.lineTo(163, 26);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(150, 51);
    context.lineTo(150, 29);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(137, 44);
    context.lineTo(136, 27);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(130, 48);
    context.lineTo(124, 35);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(120, 51);
    context.lineTo(115, 32);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(109, 57);
    context.lineTo(106, 41);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(99, 60);
    context.lineTo(95, 46);
    context.stroke();
    context.closePath();

    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(94, 68);
    context.lineTo(87, 51);
    context.stroke();
    context.closePath();

}

function drawPanel(context, width, height) {
    var p = width / 3;//panelWidth
    var b = 5; //border
    for (var i = 0; i <= 3; i++) {
        drawBox(context, i * p + b, (b / 2), p - b * 2, height - b);
    };

}

function drawBox(context, x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.stroke();            
}
