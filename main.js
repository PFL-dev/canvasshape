const app = {
    canvas: document.querySelector('#canvas'),
    ctx: document.querySelector('#canvas').getContext('2d'),
    width: 600,
    height: 600,
    selectedShape: 'circle',
    color: '#ffffff',
    shapeSize: 50,
    selectSize: () => {
        const size = document.querySelector('#size');
        size.addEventListener('change', (e) => {
            app.shapeSize = e.target.value;
        });
    },
    drawCircle: (x, y, radius, color) => {
        app.ctx.beginPath();
        app.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        app.ctx.fillStyle = color;
        app.ctx.fill();
        app.ctx.closePath();
    },
    drawSquare: (x, y, size, color) => {
        app.ctx.beginPath();
        app.ctx.rect(x - size / 2, y - size / 2, size, size);
        app.ctx.fillStyle = color;
        app.ctx.fill();
        app.ctx.closePath();
    },
    drawUpTriangle: (x, y, size, color) => {
        app.ctx.beginPath();
        app.ctx.moveTo(x, y);
        app.ctx.lineTo(x + size, y);
        app.ctx.lineTo(x + size / 2, y - size);
        app.ctx.fillStyle = color;
        app.ctx.fill();
        app.ctx.closePath();
    },
    drawCross: (x, y, size, color) => {
        app.ctx.beginPath();
        app.ctx.moveTo(x - size / 2, y - size / 2);
        app.ctx.lineTo(x - size / 2 + size, y - size / 2 + size);
        app.ctx.moveTo(x - size / 2 + size, y - size / 2);
        app.ctx.lineTo(x - size / 2, y - size / 2 + size);
        app.ctx.strokeStyle = color;
        app.ctx.stroke();
        app.ctx.closePath();
    },
    drawHeart: (x, y, size, color) => {
        app.ctx.beginPath();
        app.ctx.moveTo(x, y);
        app.ctx.bezierCurveTo(x + size, y - size / 2, x + size, y + size / 2, x, y + size);
        app.ctx.bezierCurveTo(x - size, y + size / 2, x - size, y - size / 2, x, y);
        app.ctx.fillStyle = color;
        app.ctx.fill();
        app.ctx.closePath();
    },      
    setColor: () => {
        app.color = document.querySelector('#color').value;
    },
    colorSetter: () => {
        document.querySelector('#color').addEventListener('change', app.setColor);
    },
    sizeDisplay: () => {
        document.querySelector('#size-number').innerHTML = app.shapeSize;
        const size = document.querySelector('#size-slider');
        size.addEventListener('input', (e) => {
            document.querySelector('#size-number').innerHTML = e.target.value;
            app.shapeSize = +e.target.value;
        });
    },
    draw: () => {
        app.setColor();
        document.querySelector('#canvas').addEventListener('mousedown', (e) => {
            let x = e.clientX - app.canvas.offsetLeft;
            let y = e.clientY - app.canvas.offsetTop;
            if (app.selectedShape === 'circle') {
                app.drawCircle(x, y, app.shapeSize * 0.6 , app.color);
            } else if (app.selectedShape === 'square') {
                app.drawSquare(x, y, app.shapeSize, app.color);
            } else if (app.selectedShape === 'triangle') {
                app.drawUpTriangle(x, y, app.shapeSize, app.color);
            } else if (app.selectedShape === 'cross') {
                app.drawCross(x, y, app.shapeSize, app.color);
            } else if (app.selectedShape === 'heart') {
                app.drawHeart(x, y, app.shapeSize, app.color);
            }
        });
    },
    chooseShape: () => {
        document.querySelector('#circle').addEventListener('click', () => {
            app.selectedShape = 'circle';
            document.querySelector('#circle').classList.add('selected');
            document.querySelector('#square').classList.remove('selected');
            document.querySelector('#triangle').classList.remove('selected');
            document.querySelector('#cross').classList.remove('selected');
            document.querySelector('#heart').classList.remove('selected');
        });
        document.querySelector('#square').addEventListener('click', () => {
            app.selectedShape = 'square';
            document.querySelector('#square').classList.add('selected');
            document.querySelector('#circle').classList.remove('selected');
            document.querySelector('#triangle').classList.remove('selected');
            document.querySelector('#cross').classList.remove('selected');
            document.querySelector('#heart').classList.remove('selected');
        });
        document.querySelector('#triangle').addEventListener('click', () => {
            app.selectedShape = 'triangle';
            document.querySelector('#triangle').classList.add('selected');
            document.querySelector('#circle').classList.remove('selected');
            document.querySelector('#square').classList.remove('selected');
            document.querySelector('#cross').classList.remove('selected');
            document.querySelector('#heart').classList.remove('selected');
        });
        document.querySelector('#cross').addEventListener('click', () => {
            app.selectedShape = 'cross';
            document.querySelector('#cross').classList.add('selected');
            document.querySelector('#circle').classList.remove('selected');
            document.querySelector('#square').classList.remove('selected');
            document.querySelector('#triangle').classList.remove('selected');
            document.querySelector('#heart').classList.remove('selected');
        });
        document.querySelector('#heart').addEventListener('click', () => {
            app.selectedShape = 'heart';
            document.querySelector('#heart').classList.add('selected');
            document.querySelector('#circle').classList.remove('selected');
            document.querySelector('#square').classList.remove('selected');
            document.querySelector('#cross').classList.remove('selected');
        });
    },
    clearCanvas: () => {
        document.querySelector('#reset').addEventListener('click', () => {
            app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
        });
    },
    init: () => {
        app.canvas.width = app.width;
        app.canvas.height = app.height;
        app.canvas.style.backgroundColor = '#000';
        app.sizeDisplay();
        app.colorSetter();
        app.chooseShape();
        app.draw();
        app.clearCanvas();
    }
}

app.init();