---
title: "Learn MAX Command"
description: "Learn MAX Command"
date: 2020-07-13
prereq: "none"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_5"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../_activity5.css" type="text/css"></link>
<script type="text/javascript" src="../../default/_default.js"></script>
<script type="text/javascript" src="../_activity5.js"></script>

<!-- Embed YouTube Video Link here when ready -->

## Task 5: Find the Tallest Ladder To Get To Their Dear Leader

You discover that the Planet’s leader is in a hut on the tallest hill but to get to it, you need to find the largest ladder in the Capital of Fun!


### What the command does:
The MAX command allows you to...

<!-- ![Explain](../assets/Where_Explain.png)-->

### Example:


#### Now use what you learned!

<!-- SQL Type In Activity -->

{{< rawhtml >}}

<div class="terminal_div" id="terminal_div"><img class="terminal" src="../assets/Terminal.png" alt="Terminal_screen">


</div>

<!-- Press Enter --> 
<button class="button button1" onclick="check()"> Enter </button>

<!-- Code Block with ladder is revealed -->

<!-- Player drags ladder block to drop block to finish mission -->
<div class="hill_div" id="hill_div"><img class="hill" src="" alt="hill">

<!-- Drop Location -->
<div id="div2" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<!-- Drag Block -->
<div id="div1" class ="codeBlocks" style="clear: left;" ondrop="drop(event)" ondragover="allowDrop(event)">
<img class="img" src="../assets/Equal.PNG" draggable="true" ondragstart="drag(event)" id="drag1">
</div>

</div>

<div id="text" style="visibility:hidden">
<p> You made it! The Dear Leader tells you that the Planet of Fun is in danger of being invaded by the aliens from the Planet of Boredom!
You must find the Totems of Fun in order to save the planet! </p>
</div>


{{< /rawhtml >}}