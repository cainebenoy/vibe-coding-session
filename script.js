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

        // Project 11: Digital Bubble Wrap
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl font-scribble mb-2">Digital Bubble Wrap</h2>
                <div id="bubble-wrap" style="display:grid;grid-template-columns:repeat(10,1fr);gap:5px;"></div>
            `;
            const wrap = document.getElementById('bubble-wrap');
            // Load all bubble pop sound files
            const popSounds = [
                'bubble-pop/bubble-sound-43207.mp3',
                'bubble-pop/bubble-pop-283674.mp3',
                'bubble-pop/bubble-pop-06-351337.mp3',
                'bubble-pop/bubble-pop-05-323639.mp3',
                'bubble-pop/bubble-pop-04-323580.mp3',
                'bubble-pop/bubble-pop-02-293341.mp3'
            ];
            for(let i=0;i<100;i++){
                const bubble = document.createElement('div');
                Object.assign(bubble.style,{width:'30px',height:'30px',borderRadius:'50%',background:'#c0e4ff',cursor:'pointer'});
                bubble.onclick = () => {
                    // Play a random pop sound
                    const rnd = Math.floor(Math.random() * popSounds.length);
                    new Audio(popSounds[rnd]).play();
                    bubble.style.visibility='hidden';
                };
                wrap.appendChild(bubble);
            }
        },
        // Project 12: Is the Internet On?
        () => { projectArea.innerHTML = `<h1 class="text-6xl font-bold text-green-600">YES</h1>`; },
        // Project 13: Life Progress Bar
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl mb-2">Life Progress Bar</h2>
                <input type="date" id="birth-date" class="border p-1" />
                <button id="life-btn" class="ml-2 p-1 bg-blue-500 text-white">Calculate</button>
                <div id="life-bar" class="mt-4 w-full h-6 bg-gray-300"><div id="life-fill" class="h-6 bg-green-500" style="width:0%"></div></div>
                <p id="life-percent" class="mt-2 text-lg"></p>
            `;
            document.getElementById('life-btn').onclick = () => {
                const birth = new Date(document.getElementById('birth-date').value);
                if(isNaN(birth)) return;
                const now = new Date();
                const daysAlive = (now - birth)/(1000*60*60*24);
                const percent = Math.min(100,(daysAlive/(80*365))*100).toFixed(1);
                document.getElementById('life-fill').style.width = percent + '%';
                document.getElementById('life-percent').textContent = percent + '% of average life';
            };
        },
        // Project 14: Scream Into the Void
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl mb-2">Scream Into the Void</h2>
                <textarea id="void-text" class="w-full h-24 border"></textarea>
                <button id="scream-btn" class="mt-2 p-1 bg-red-500 text-white">Scream</button>
            `;
            const txt = document.getElementById('void-text');
            document.getElementById('scream-btn').onclick = () => {
                txt.style.transition = 'opacity 1s, transform 1s';
                txt.style.opacity = 0;
                txt.style.transform = 'scale(0)';
                setTimeout(() => { txt.value = ''; txt.style.opacity = 1; txt.style.transform = 'scale(1)'; }, 1000);
            };
        },
        // Project 15: "Should I...?" Decider
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl mb-2">Should I...?</h2>
                <input type="text" id="should-input" class="border p-1" placeholder="Ask your question..." />
                <button id="should-btn" class="ml-2 p-1 bg-gray-700 text-white">Decide</button>
                <p id="should-answer" class="mt-2 text-xl font-bold"></p>
            `;
            document.getElementById('should-btn').onclick = () => {
                document.getElementById('should-answer').textContent = 'Maybe.';
            };
        },
        // Project 16: Cat on Keyboard Simulator
        () => {
            projectArea.innerHTML = `
                <h2 class="text-2xl mb-2">Cat on Keyboard</h2>
                <textarea id="cat-keyboard" class="w-full h-24 border" readonly></textarea>
            `;
            const area = document.getElementById('cat-keyboard');
            setInterval(() => {
                const chars = 'asdfghjklqwertyuiopzxcvbnm';
                let str = '';
                for(let i=0;i<5;i++) str += chars.charAt(Math.floor(Math.random()*chars.length));
                area.value += str;
            }, 500 + Math.random()*1500);
        },
        // Project 17: The Deceptive Font
        () => {
            projectArea.innerHTML = `<h2 class="text-2xl">This page is elegantly set in Helvetica.</h2>`;
            document.body.style.fontFamily = 'Comic Sans MS, cursive';
        },
        // Project 18: Where's My Cursor?
        () => {
            projectArea.innerHTML = `<button id="hide-cursor" class="p-2 bg-black text-white">Find My Cursor</button>`;
            document.getElementById('hide-cursor').onclick = () => {
                document.body.style.cursor = 'none';
                setTimeout(() => { document.body.style.cursor = 'auto'; }, 5000);
            };
        },
        // Project 19: Infinitely Agreeing Checkbox
        () => {
            projectArea.innerHTML = `<div id="agree-wrap"></div>`;
            const wrap = document.getElementById('agree-wrap');
            function addCheckbox() {
                const label = document.createElement('label');
                const cb = document.createElement('input'); cb.type = 'checkbox';
                label.append(cb, ' I understand and agree.');
                wrap.appendChild(label);
                cb.onchange = () => addCheckbox();
            }
            addCheckbox();
        },
        // Project 20: Button That Slowly Fades
        () => {
            projectArea.innerHTML = `<button id="fade-btn" class="p-2 bg-blue-600 text-white">Hover to Fade</button>`;
            const btn = document.getElementById('fade-btn');
            btn.onmouseover = () => {
                btn.style.transition = 'opacity 10s';
                btn.style.opacity = 0;
            };
        }
    ];

    // Pick a random project and run it
    const randomIndex = Math.floor(Math.random() * projectFunctions.length);
    projectFunctions[randomIndex]();
});