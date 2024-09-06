let array = [];
let delay = 100;

function updateSpeed() {
    const speedRange = document.getElementById('speedRange').value;
    delay = 100 - speedRange; // Invert the speed range (higher value = faster sorting)
}


function generateArray() {
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';
    array = [];

    for (let i = 0; i < 50; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        const bar = document.createElement('div');
        bar.style.height = `${value * 4}px`;
        bar.classList.add('bar');
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                bars[j].style.height = `${array[j] * 4}px`;
                bars[j + 1].style.height = `${array[j + 1] * 4}px`;
            }

            await new Promise(resolve => setTimeout(resolve, delay));

            bars[j].style.backgroundColor = '#61dafb';
            bars[j + 1].style.backgroundColor = '#61dafb';
        }
        bars[array.length - i - 1].style.backgroundColor = 'green';
    }
    bars[0].style.backgroundColor = 'green';
}

async function selectionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = 'red';
        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = 'yellow';
            await new Promise(resolve => setTimeout(resolve, delay));
            if (array[j] < array[minIndex]) {
                bars[minIndex].style.backgroundColor = '#3498db';
                minIndex = j;
                bars[minIndex].style.backgroundColor = 'red';
            }
            bars[j].style.backgroundColor = '#3498db';
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            bars[i].style.height = `${array[i] * 2}px`;
            bars[minIndex].style.height = `${array[minIndex] * 2}px`;
        }
        bars[0].style.backgroundColor = '#2ecc71';
    }
}

// Insertion Sort Visualization
async function insertionSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        bars[i].style.backgroundColor = 'red';
        while (j >= 0 && array[j] > key) {
            bars[j + 1].style.height = `${array[j] * 2}px`;
            array[j + 1] = array[j];
            bars[j].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, delay));
            j--;
        }
        array[j + 1] = key;
        bars[j + 1].style.height = `${key * 2}px`;
        bars[0].style.backgroundColor = '#2ecc71';
    }
}



generateArray();
