//import React from "react"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
<div>
   <h1>Titulo de React</h1>

   <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>
   <a href="#">
      <img src="https://images.unsplash.com/photo-1636642370467-93d378493021?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></img>
   </a>

</div>
)



ReactDOM.render(
 page,
   document.getElementById("root")
)