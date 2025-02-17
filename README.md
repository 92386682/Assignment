![image](https://github.com/user-attachments/assets/fcfa3b2c-b6b2-446f-b1a4-bea35e88a04e)# Creative Coding
### EPILEPSY WARNING 
## BRIGHT, RAPIDLY FLASHING LIGHTS

FA205 Assignment

## preliminary research and experiments
Beginning by integrating WebGL into my .wav visualizer (workshop 5, data self-portrait), the first move was to iterate this original code into 3 dimensions via p5s built in WEBGL rendering. Using this original code, and tweaking it to fill and rotate across the Z axis was the first experiment conducted.

The process was fairly straightforward, accounting the additional z axis syntax from

`line(origin, 0, 0, output*3);`

to

`line(origin, 0, ycoord, 0, output*3, 0);`
It also necessitated a repitition of the code, to account for a matching "pair" along the z axis, resulting in 
![image](https://github.com/user-attachments/assets/248f5267-a727-40d6-b52f-e403dad1d707)
Note, whilst the could be expressed more succintly, the variety of input/outputs and negative modifiers meant that manual entry was the simplest route.

Moving on from here, I researched the digitization of analogue sound data more heavily, and familiarized myself with the basic concepts of Pulse Code Modulation, or how analogue sound (frequency modulations that travel across air to interact with the airdrums, varying in pressure (low/bass notes having low pressure, high notes having high pressure) and frequency (self explanatory, the frequency of oscillations of the sound across air) and how this process is translated into digital data. Whilst a fairly cursory examinations, this was useful in understanding the dynamics of what was being mapped out. Using the same process of audacity=>Raw Data Export to generate the csv for this file, I then began by introducing new code scraps (or scenes).

## Key mechanics
At it's base, this project is entirely driven by simple WEBGL geometric objects, lines, csv outputs, rotation and if/else statements. 
For "state" progression from one animation to the next, a placeholder was used for the majority of development, that being 
`if (frameCount > 200 
  {geometry code here}`
This provided a simple way to transition from one scene to the next, but with (massive) drawbacks, that being the constant rise of framecount regardless of scene. This was later updated to a line counter integrated into the csv on column 3, numbering each sequentially and being read as `outputnumber`. The main benefit of this was being able to start, stop and reset the count whenever needed, mainly to synchronise the beginning with the title screen. Vestigial references to frameCount remain in the code, but primarily for factors that merely need a dynamic element, primarily rotations. 

Unchanged from the projects earlier iteration was how output was read and the variable created, that being:
`      setInterval(() => { 
        output = -(Table.getString(x, 0));
         x++}, 420/1000);//col1
         setInterval(() => { 
           output2 = (Table.getString(y, 1));
            y++}, 420/1000);//col2
            setInterval(() => { 
              outputnumber = (Table.getString(samplecount, 2));
              samplecount++}, 420/1000);// read third column for numerical value, Note this runs from 1-99961. Isn't working perfectly due to hardware, but close enough.
      `
      Fairly self explanatory, but in simple language it reads a decibel value, then moves onto the next line. One downside, which can only be seen behind the scenes, is that I was in no way able to get this code to run correctly 420 times per second. Whether a hardware issue or other factors, trying to adjust the frameRate to 420 resulted in no change. The idea of trying to export full 48Hz audio data, and running the code 48000 times a second seems like an issue to resolve in future projects. Manual adjustment and tweaking was able to achieve a result I was satisfied with, but it constitutes a break from the core "reality" of this project.
      
## Initial scene
### "Maypole lines"
![image](https://github.com/user-attachments/assets/80acb9d1-7697-43cc-9038-504e6b676131)

The first 3 states of the work are all variations on a single `for` loop and single `line`. Created similarly to the initial visualiser, the dB output is used as the start and finish point for the line, which is then repeated as the origin point for the line is rotated by the loop itself. The three distinct phases of this scene are simply a `scale` running for the 1st 10 seconds, the code itself running for 25, and then a further `rotateX` to get the jagged angles of the latter stage.
![image](https://github.com/user-attachments/assets/4346801d-7435-4ea2-97ff-6e1235b6865d)


## Sphere addition
![image](https://github.com/user-attachments/assets/f6415836-e5ff-4014-87df-c181a2a96c82)

The addition of the spheres on top (within) the line visualiser was a simple process using p5s built in `sphere()`, with the output determining both the size, and amount of vertices, of the sphere. Creative liberty was taken by applying a multiplyer to the second output, for the sake of visual distinction (as both outputs are generally fairly similar). This then develops with the addition of a 2 `torus()` and a scale, marking the third stage of this particular scene. Earlier stages had this object rotate along both it's X and Z axis, but this was later removed.
![image](https://github.com/user-attachments/assets/d24eb5e9-6f6a-4b84-a75c-e67adb699dbc)


## Final state
The final state was originally planned as a simple `scale()` to enlarge and fill the screen with lines, but at some point in the sphaghetti code that this entire project runs on, a loose pop, rotate or other transformation rendered the scales only applicable to the torus objects. This problem was side-stepped by simply shifting the WEBGL "camera" closer to the origin point. Changing from the default camera coordinates of 0,0,800 to 0,0,200. This achieved the exact effect required. 
![image](https://github.com/user-attachments/assets/d8c0b839-fb43-48be-a93d-36997bd4d174)


## Title screen addition, reset & House-Keeping
At this point, due to time constraints, the work was "finished". Whilst it could be continued, and indeed barely reaches half a million data entry points in the csv, the skills gained through this project mean that honestly, it would be simpler and more efficient to simply stop, and begin from scratch whilst avoiding all the mistakes made.
The choice to manually reset the code was made rather than reloading the entire page, and was achieved by the same if(){} statement that was applied to all state changes. It was during this reset that the move from using `frameCount` to `samplecount / outputnumber` as my timer was made, due to frameCounts status as a system variable. That said, I found that frameCount could in fact be reset as with any other variable, though all documentation I read indicated it should NOT have.
The Title screen likewise made this change necessary, as otherwise the animation would progress through it's stages whether visible or not, depending on how long it took the user to begin. This lead to it playing half finished or completely finished. Aside from WEBGL's neccessity for preLoading fonts, a straightforward piece of work.
Admittedly, the code is a mess of commented out statements, declared variables that were eventually removed from the code itself, nested if loops (which I believe is poor code practice) and generally resembles a house built out of ice-cream sticks, duct tape and dreams, but regardless, the function is solid. 
As mentioned, the ideal way to improve this code would be to delete it and start again with the lessons learnt, but regardless.
