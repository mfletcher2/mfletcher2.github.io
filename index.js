const canvas = document.querySelector('canvas');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext('2d');
const brushButton = document.getElementById('brush');

brushButton.onclick = toggleDrawingEnabled;

// Event listeners for mouse actions
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawCircle);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
isDrawing = false;
isDrawingEnabled = false;

function startDrawing(e) {
    if (!isDrawingEnabled) return;
    isDrawing = true;
    drawCircle(e);
}

function drawCircle(e) {
    if (!isDrawing || !isDrawingEnabled) return;

    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;

    // Draw a circle at the mouse position
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'purple'; // Set circle color
    ctx.fill();
}

function stopDrawing() {
    isDrawing = false;
}

function toggleDrawingEnabled() {
    isDrawingEnabled = !isDrawingEnabled
    if (isDrawingEnabled) {
        canvas.style.zIndex = 1;
    }
    else {
        canvas.style.zIndex = -1;
    }
}