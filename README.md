![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


# Web based Windows XP imitation 

<img width="500" src="https://github.com/user-attachments/assets/f74a1c84-fcc7-4845-9383-2d5084ee1713" />
<img width="500" src="https://github.com/user-attachments/assets/361af3f1-8ea9-425f-a9fe-2a90b7f14650" />
<img width="500" src="https://github.com/user-attachments/assets/fcc35a87-a1c6-448f-b336-5c133121205c" />
<img width="500" src="https://github.com/user-attachments/assets/43846289-1179-43e6-a229-546d5a900b50" />

> This project was started as a solo project during a one week intro course to JavaScript, but quickly turned into a wider scope with a cold dive into building system architecture and window management using the provided curriculum as a starting point.
> 
> My personal target was to present a Flappy Bird clone within the OS imitation, where the Flappy Bird clone was the end-goal of the course

## Highlights
* **No Dependencies:**
* **Consistent ~60fps**
* **Modular Window Manager:** A custom-built system for handling modular windows
* **Screensaver Graphics Generator**

## Core Systems

### 1. Modular Window Management
* **Instanceable Logic:** Instancing possible from a core `Window` class
* **Drag and Drop:** Moveable window
* **State Management:** Native "Out of Bounds" checks and automatic snap-back
* **Scalable Window Logic:** New instances scale with set coordinates

### 2. Screensaver Graphics Generator
* Procedural graphics generator with **with 3 distinct presets**
* **Idle Listener:** Wakes on mouse input with a 5-minute timeout
* **Manual Override:** Instant activation via key press `L`

## Featured Apps
* **WordPad:** A basic text editor
* **TikTok:** A reimagining of a modern mobile app within a legacy desktop architecture
* **bird.EXE:** A Flappy Bird clone

## Technical Notes
* **Modular Window:** WordPad is currently the only app using this system
* **Input Focus:** Known bug where the desktop does not regain focus making screensaver init problematic immediately after clicking outside NotePad
    * *Workaround:* Double-tap `L` to force-focus
 
## Live Demo
https://mar109us.github.io/GetAcademy/

