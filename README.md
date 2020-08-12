#Molecule editor.
Molecule editor. is a chemical structure sketcher web application made using React JS. It uses the React Konva library 
to draw SVG paths to the canvas and React Bootstrap for styling. Molecule editor. is responsive to screen size so is
compatible with most devices.  

##Current Features
* Compatible with desktop and mobile devices
* Offline functionality 
* Drawing: 
    * Bonds: 
        * Add bonds:
            * single, double, triple, quadruple
            * stereochemistry: forward/backward plane
            * intermediate
        * Consistent bond lengths and stretch lengths
    * Atoms: 
        * Add standard atoms
    * Delete individual atoms and bonds
    * Clear canvas
    * Atoms and Bonds will automatically "snap" to nearby entities when attaching together
    * Swap atoms
* Export to transparent raster graphic (.png)
* Window which indicates currently selected tool
* For devices with a pointer (e.g. mouse):
    * Preview bond before deciding where to place it
    * Highlight entity by hovering over it:
    <p align="center">
    <img src="https://imgur.com/F0w6fwP.png" alt="atom_hl"/>
    <img src="https://imgur.com/tUVUvkn.png" alt="bond_hl"/>
    <img src="https://imgur.com/M9OjgKG.png" alt="bondend_hl"/>
    </p>
* Tool menus can be collapsed for more compact view
###Instructions
<p align="center">
<img src="https://imgur.com/HSfGpWH.png" alt="screenshot"/>
</p>

* (1) Draw bonds: <br>
Click desired bond within menu #1 and click the canvas (15) to place the bond start point then click the desired end point. Dative and unspecified plane bonds currently unavailable in this version.
* (2) Ring Structures: <br>
Currently unavailable in this version. 
* (3) Charges: <br>
Currently unavailable in this version.
* (4) Reaction Arrows: <br>
Currently unavailable in this version.
* (5) Atoms & Functional Groups: <br>
Click desired standard atom within menu #5 and click desired position on the canvas (15). More atoms and functional groups are unavailable in this current version. 
* (6) Undo: <br>
Currently unavailable in this version.
* (7) Redo: <br>
Currently unavailable in this version.
* (8) Erase: <br>
Click entity to be removed. Bonds can be erased by clicking either the bond end or the middle of the bond.
* (9) Clear canvas: <br>
Click button to erase all entities from the canvas. 
* (10) Move/Transform: <br>
Currently unavailable in this version.
* (11) Selection: <br>
Currently unavailable in this version.
* (12) Add Text: <br>
Currently unavailable in this version.
* (13) Export to .png: <br>
Click to download a transparent PNG version of the canvas (15).
* (14) Current Tool Indicator: <br>
This window indicates the currently selected tool. 
* (15) Canvas: <br>
The canvas is the drawing area.


####In Development
* Bonds: dative, unspecified plane
* Drawing Ring Structures
* Adding charges/radicals/dipoles to atoms
* Drawing reaction arrows
* Non-standard atoms and functional groups selection 
* Undo/Redo
* Selection tool
* Move/Resize tool
* Add text to canvas
* Bonds snap to standard bond angles
* Exporting to .mol 