let outputDiv = document.getElementById('output');

function getUserN() {
    const nInput = document.getElementById('nValue');
    const n = parseInt(nInput.value);
    if (n < 1 || n > 8) {
        addOutput('<span style="color: #e74c3c;">❌ Please enter a value between 1 and 8</span>');
        return null;
    }
    return n;
}

function clearOutput() {
    outputDiv.innerHTML = '<div style="color: #3498db; font-weight: bold;">Output cleared. Ready for new execution...</div>';
}

function addOutput(text, isStep = false) {
    const div = document.createElement('div');
    div.innerHTML = isStep ? `<span class="step-highlight">STEP:</span> ${text}` : text;
    div.style.marginBottom = '5px';
    outputDiv.appendChild(div);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Recursive function to simulate Code 1 execution
function simulateCode1(n, src, helper, dest, stepCounter) {
    if (n === 1) {
        addOutput(`transfer disk ${n} from ${src} to ${dest}`);
        return;
    }
    
    // Step 1: Move n-1 from src to helper using dest
    simulateCode1(n-1, src, dest, helper, stepCounter);
    
    // Step 2: Move nth disk (ERROR: wrong destination in original code)
    addOutput(`transfer disk ${n} from ${src} to ${helper} <span style="color: #e74c3c;">❌ ERROR: Should be ${dest}!</span>`);
    
    // Step 3: Move n-1 from helper to dest using src
    simulateCode1(n-1, helper, src, dest, stepCounter);
}

// Recursive function to simulate Code 2 execution
function simulateCode2(n, source, helper, destination, stepCounter) {
    if (n === 1) {
        stepCounter.count++;
        addOutput(`Move disk 1 from ${source} to ${destination} <span style="color: #2ecc71;">✅ Step ${stepCounter.count}</span>`);
        return;
    }
    
    // Step 1: Move n-1 from source to helper using destination
    simulateCode2(n-1, source, destination, helper, stepCounter);
    
    // Step 2: Move nth disk from source to destination
    stepCounter.count++;
    addOutput(`Move disk ${n} from ${source} to ${destination} <span style="color: #2ecc71;">✅ Step ${stepCounter.count}</span>`);
    
    // Step 3: Move n-1 from helper to destination using source
    simulateCode2(n-1, helper, source, destination, stepCounter);
}

function executeCode1() {
    const n = getUserN();
    if (n === null) return;
    
    clearOutput();
    addOutput('<span style="color: #e74c3c; font-weight: bold;">🚀 EXECUTING CODE 1 (Your Solution 5)</span>');
    addOutput(`<span style="color: #f39c12;">Method: towerOfHanoi(${n}, "A", "B", "C")</span>`);
    addOutput('');
    
    setTimeout(() => {
        simulateCode1(n, "A", "B", "C", {count: 0});
        addOutput('');
        addOutput('<span style="color: #e74c3c;">⚠️ ISSUE DETECTED: Code 1 has logic errors in disk movements!</span>');
        addOutput('<span style="color: #95a5a6;">No step counting available</span>');
        addOutput(`<span style="color: #3498db;">Expected total steps: ${Math.pow(2, n) - 1}</span>`);
    }, 500);
}

function executeCode2() {
    const n = getUserN();
    if (n === null) return;
    
    clearOutput();
    addOutput('<span style="color: #2ecc71; font-weight: bold;">🚀 EXECUTING CODE 2 (Optimized Version)</span>');
    addOutput(`<span style="color: #f39c12;">Method: solveHanoi(${n}, 'A', 'B', 'C')</span>`);
    addOutput('');
    
    setTimeout(() => {
        const stepCounter = {count: 0};
        simulateCode2(n, 'A', 'B', 'C', stepCounter);
        addOutput('');
        addOutput(`<span style="color: #2ecc71;">✅ Total steps = ${stepCounter.count}</span>`);
        addOutput('<span style="color: #2ecc71;">✅ All moves are logically correct!</span>');
        addOutput('<span style="color: #3498db;">💡 Memory efficient with char parameters</span>');
        addOutput(`<span style="color: #9b59b6;">🧮 Formula verification: 2^${n} - 1 = ${Math.pow(2, n) - 1}</span>`);
    }, 500);
}

function generateHanoiMoves(n, source, helper, destination, moves = []) {
    if (n === 1) {
        moves.push({ 
            disk: 1, 
            from: source, 
            to: destination, 
            desc: `Move disk 1 from ${source.toUpperCase()} to ${destination.toUpperCase()}` 
        });
        return moves;
    }
    
    generateHanoiMoves(n-1, source, destination, helper, moves);
    moves.push({ 
        disk: n, 
        from: source, 
        to: destination, 
        desc: `Move disk ${n} from ${source.toUpperCase()} to ${destination.toUpperCase()}` 
    });
    generateHanoiMoves(n-1, helper, source, destination, moves);
    
    return moves;
}

function visualDemo() {
    const n = getUserN();
    if (n === null) return;
    
    clearOutput();
    addOutput('<span style="color: #9b59b6; font-weight: bold;">🎨 VISUAL DEMONSTRATION</span>');
    addOutput(`Solving Tower of Hanoi with ${n} disks...`);
    addOutput('Watch the towers above as the algorithm executes...');
    addOutput('');
    
    // Reset towers with n disks
    resetTowers(n);
    
    const moves = generateHanoiMoves(n, 'a', 'b', 'c');
    
    addOutput(`<span style="color: #3498db;">Total moves required: ${moves.length} (2^${n} - 1)</span>`);
    addOutput('');
    
    moves.forEach((move, index) => {
        setTimeout(() => {
            addOutput(`${index + 1}. ${move.desc}`);
            moveDisk(move.disk, move.from, move.to);
        }, (index + 1) * Math.max(500, 3000 / moves.length)); // Adaptive timing
    });
    
    setTimeout(() => {
        addOutput('');
        addOutput(`<span style="color: #2ecc71;">🎉 Puzzle solved in ${moves.length} moves!</span>`);
    }, (moves.length + 1) * Math.max(500, 3000 / moves.length));
}

function resetTowers(n = 3) {
    const towerA = document.getElementById('tower-a');
    const towerB = document.getElementById('tower-b');
    const towerC = document.getElementById('tower-c');
    
    // Clear all towers
    [towerA, towerB, towerC].forEach(tower => {
        tower.innerHTML = '';
    });
    
    // Add n disks to tower A (largest to smallest)
    for (let i = n; i >= 1; i--) {
        const disk = document.createElement('div');
        disk.className = `disk disk-${i}`;
        disk.style.bottom = (8 + (n - i) * 20) + 'px';
        
        // Calculate left offset based on disk size
        const diskWidth = 20 + (i * 20);
        disk.style.left = (-diskWidth / 2) + 'px';
        
        towerA.appendChild(disk);
    }
}

function moveDisk(diskNum, fromTower, toTower) {
    const fromElement = document.getElementById(`tower-${fromTower}`);
    const toElement = document.getElementById(`tower-${toTower}`);
    
    // Find the topmost disk (should be the one we're moving)
    const disks = Array.from(fromElement.children);
    const disk = disks.find(d => d.className.includes(`disk-${diskNum}`));
    
    if (!disk) return;
    
    // Remove from current tower
    fromElement.removeChild(disk);
    
    // Calculate new position
    const disksInDestination = toElement.children.length;
    const newBottom = 8 + (disksInDestination * 20);
    
    // Calculate left offset based on disk size
    const diskWidth = 20 + (diskNum * 20);
    const leftOffset = (-diskWidth / 2) + 'px';
    
    disk.style.bottom = newBottom + 'px';
    disk.style.left = leftOffset;
    
    // Add to destination tower
    toElement.appendChild(disk);
}

// Initialize with default value
document.addEventListener('DOMContentLoaded', function() {
    resetTowers(3);
});