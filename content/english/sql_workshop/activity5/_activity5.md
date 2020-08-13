---
title: "Learn MAX/MIN Command"
description: "Learn MAX/MIN Command"
date: 2020-07-12
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
<script type="text/javascript" src="../../default/alasql.js"></script>

<!-- Embed YouTube Video Link here when ready -->

## Task 5: Find the Tallest Ladder To Get To Their Dear Leader

After receiving the message from the Galactic Federation, you continue your adventure. You have discovered that the planet's leader
is in a hut on the tallest hill but to get to it, you need to find the largest ladder in the Capital of Fun!

The Galactic Federation has sent you three new SQL commands to play around with! Lets take a look at them!


### What the commands do:

![Explain](../assets/max_min.png)

### Example:


#### Now use what you learned to find the tallest ladder!

* Hint 1: Do you need to use MAX or MIN to find the tallest ladder?

* Hint 2: Remember the advice from the Galactic Federation: SELECT (column/column property) FROM (database) (optional condition);

<!-- SQL Type In Activity -->

{{< rawhtml >}}

<div class="terminal_div" id="terminal_div"><img class="terminal" src="../../media/Terminal.png" alt="Terminal_screen">


</div>

<!-- Press Enter -->
<button class="button button1" onclick="check()"> Enter </button>


{{< /rawhtml >}}


### Choose and drag the correct ladder onto the hill to continue your adventure!


{{< rawhtml >}}


<!-- Player drags ladder block to drop block to finish mission -->
<div class="hill_div" id="hill_div"><img class="hill" src="../assets/Hill.png" alt="hill">


<!-- Drop Location -->
<div id="div4" class="dropClass" ondrop="drop(event)" ondragover="allowDrop(event)";> </div>

<!-- Drag Block -->
<div id="div1" class ="codeBlocks" style="clear: left;" ondrop="drop(event)" ondragover="allowDrop(event)">
<img class="img" src="../assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag1">
</div> 

<div id="div2" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
<img class="img" src="../assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag2">
</div> 

<div id="div3" class ="codeBlocks" ondrop="drop(event)" ondragover="allowDrop(event)">
<img class="img" src="../assets/ladder.png" draggable="true" ondragstart="drag(event)" id="drag3">
</div> 

</div>

<!-- Next mission text displays -->
<div id="text1" style="visibility:hidden">
<br/>
<p> You made it! The Dear Leader tells you that the Planet of Fun is in danger of being invaded by the aliens from the Planet of Boredom!
You must find the Totems of Fun in order to save the planet! </p>
</div>


{{< /rawhtml >}}