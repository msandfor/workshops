---
title: "Select Multiple Info"
description: "Select Multiple Info"
date: 2020-07-14
prereq: "SELECT Command"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_4"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../_activity4.css" type="text/css"></link>
<script type="text/javascript" src="../../default/_default.js"></script>
<script type="text/javascript" src="../_activity4.js"></script>
<script type="text/javascript" src="../../default/alasql.js"></script>

<!-- Embed YouTube Video Link here when ready -->

## Task 4: Find Their Dear Leader

After going to the Capital of Fun, you are told by the inhabitants to talk to their Dear Leader. Find out which inhabitant is the Dear Leader.
To do so, lets take a look at how to select multiple columns in a database.

![Commas](../assets/Commas.png)

#### Now use what you learned to find out who is the leader of the Planet of Fun!
**The Galactic Federation sends you a reminder that the 'galaxy' database holds the following columns:**

* planet_number: What order the planets show up in the database.

* name: The name of the planet.

* leader: The name of the leader of the planet.

* population: How many inhabitants live on the planet.

* coordinate: The location of the planet in the galaxy.

### Question: Using the 'galaxy' database, how do you display the planets and their leader?
**Hint: Only two columns are needed.**

<!-- SQL Type In Activity -->


{{< rawhtml >}}


<div class="terminal_div" id="terminal_div"><img class="terminal" src="../../media/Terminal.png" alt="Terminal_screen">


</div>

<!-- Press Enter --> 
<!-- Justin: need to add a check to the _activity4.js file to make sure player uses correct command to advance plot-->
<button class="button button1" onclick="check()"> Enter </button>


<div id="text" style="visibility:hidden">
<p> <br> Amazing work as always, space cadet! You discovered that the Planet of Fun's Dear Leader is Olivia Windsor! Now you need to figure out a way to get to them! </p>
</div>


{{< /rawhtml >}}