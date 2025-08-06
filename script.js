document.addEventListener('DOMContentLoaded', () => {

    const projectArea = document.getElementById('project-area');
    const notepad = document.querySelector('.notepad');

    // --- Define all 10 project functions ---
    const projectFunctions = [
        // Project 1: Is It Friday?
        () => {
            const today = new Date().getDay();
            const isFriday = today === 5;
            projectArea.innerHTML = `
                <h1 class="text-4xl text-[var(--text-primary)] leading-tight">Is it Friday?</h1>
                <p class="text-8xl mt-4 font-bold ${isFriday ? 'text-green-700' : 'text-red-700'}">
                    ${isFriday ? 'YES' : 'NO'}
                </p>
            `;
        },

        // Project 2: The Unclickable Button (Now with multiplication!)
        () => {
            projectArea.innerHTML = `<h2 class="text-2xl">Good luck catching them...</h2>`;
            
            // This function creates a single button with the multiplying logic
            function createMultiplyingButton() {
                const button = document.createElement('button');
                button.className = 'unclickable-button';
                button.textContent = 'Catch Me!';
                
                // Position it randomly
                const newX = Math.random() * (window.innerWidth - 100);
                const newY = Math.random() * (window.innerHeight - 50);
                button.style.left = `${newX}px`;
                button.style.top = `${newY}px`;

                // Add the "multiply" event listener
                button.addEventListener('mouseover', (event) => {
                    // Remove the button that was just hovered over
                    event.target.remove();

                    // Create two new ones to replace it!
                    createMultiplyingButton();
                    createMultiplyingButton();
                });

                document.body.appendChild(button);
            }

            // Start the chaos with the first button
            createMultiplyingButton();
        },

        // Project 3: Virtual Pet Rock
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl font-scribble mb-2">My Pet Rock</h2>
                <img src="rock.png" alt="A cartoon pet rock" class="h-32">
                <p class="mt-4 text-lg">It's a great listener.</p>
            `;
        },

        // Project 5: To-Don't List
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl font-scribble mb-2">To-Don't List</h2>
                <input type="text" id="dont-input" class="w-full rounded border-gray-400 text-lg" placeholder="Something to avoid...">
                <ul id="dont-list" class="mt-2 text-left w-full list-disc pl-5 font-scribble text-xl"></ul>
            `;
            const input = document.getElementById('dont-input');
            const list = document.getElementById('dont-list');
            input.onchange = () => {
                if (input.value.trim() === '') return;
                const li = document.createElement('li');
                li.textContent = input.value;
                li.className = "cursor-pointer";
                li.onclick = () => li.classList.toggle('line-through');
                list.appendChild(li);
                input.value = '';
            };
        },
        
        // Project 6: Philosophical Weather
        () => {
            const quotes = [
                "Today's forecast: Partly cloudy with a lingering sense of ennui.",
                "Weather advisory: A high chance of sunshine, a fleeting reminder of cosmic indifference.",
                "Expect light showers, for the sky weeps, as do we all.",
            ];
            projectArea.innerHTML = `
                <h2 class="text-2xl font-scribble">A Note on the Weather</h2>
                <p class="text-xl mt-4">${quotes[Math.floor(Math.random() * quotes.length)]}</p>
            `;
        },

        // Project 8: Text-to-Meow Converter
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl font-scribble">Meow Translator</h2>
                <textarea id="meow-input" class="w-full rounded border-gray-400 mt-2 h-24" placeholder="Type here..."></textarea>
                <p id="meow-output" class="text-lg mt-2 break-words h-24 overflow-y-auto"></p>
            `;
            const input = document.getElementById('meow-input');
            const output = document.getElementById('meow-output');
            // Load all meow sound files
            const meowSounds = [
                'cat-meow/real-cat-sound-effect-383821.mp3',
                'cat-meow/cat-meow-sound-383823.mp3',
                'cat-meow/cat-meow-85175.mp3',
                'cat-meow/cat-meow-8-fx-306184.mp3',
                'cat-meow/cat-meow-7-fx-306186.mp3',
                'cat-meow/cat-meow-6226.mp3',
                'cat-meow/cat-meow-297927.mp3',
                'cat-meow/cat-meow-1-fx-306178.mp3'
            ];
            // Restore letter-based meow logic
            input.addEventListener('input', (e) => {
                const meows = input.value.split('').map(() => 'meow ').join('');
                output.textContent = meows;
                if (e.data) {
                    for (let i = 0; i < e.data.length; i++) {
                        const rnd = Math.floor(Math.random() * meowSounds.length);
                        new Audio(meowSounds[rnd]).play();
                    }
                }
            });
        },

        // Project 10: The Beige Page (FIXED)
        () => {
            const r = Math.floor(Math.random() * 25) + 210;
            const g = Math.floor(Math.random() * 25) + 200;
            const b = Math.floor(Math.random() * 25) + 170;
            const color = `rgb(${r}, ${g}, ${b})`;
            const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
            
            // **THE FIX IS HERE:** We now update both the color AND the gradient image
            notepad.style.backgroundColor = color;
            notepad.style.backgroundImage = `repeating-linear-gradient(${color} 0px, ${color} 23px, var(--notepad-lines) 24px)`;
            
            projectArea.innerHTML = `
                <h2 class="text-2xl">A Shade of Beige</h2>
                <p class="text-6xl font-mono mt-4">${hex}</p>
            `;
        },
    ];

    // Pick a random project and run it
    const randomIndex = Math.floor(Math.random() * projectFunctions.length);
    projectFunctions[randomIndex]();
});