# NodeRed-Dashboard-NewHeader
Header for Nodered Dashboard - Button, Text, Date/Time

Nodered Dashboard template node that can provide a 
- text
- date/time (Format day, fullmonth, year and hour, minute, second)
- Home-Button 

on the header.

# Implementation
1. Create a template node
2. Copy & Paste content to node
3. Add UI Control node after the template node (to receive and execute the workload coming from the template node)
3. Customize template node

# Customization

- home.payload = 'Home' //Set to name of homepage
- change month according to your language in function formatDate
- pic.src = '/Home1.png' //Set to path and filename of image 
  - (Pls. consider: https://discourse.nodered.org/t/how-to-enable-ability-to-input-local-image-files-in-to-node-red-dashboard/3085)
- asdf


