# NodeRed-Dashboard-NewHeader
Customized Top-Bar for Nodered Dashboard - Button, Text, Date/Time

Nodered Dashboard template node that can provide a 
- text
- date/time (Format day, fullmonth, year and hour, minute, second)
- Home-Button 

on the header.

# Implementation
1. Create a template node for code
2. Copy & Paste content to node
3 Create a template node for CSS
4. Copy & paste CSS informations to template
5. Add UI Control for node after the template node (to receive and execute the workload coming from the template node)
6. Customize template node

# Customization

- home.payload = 'Home' //Set to name of homepage
- change month according to your language in function formatDate
- pic.src = '/Home1.png' //Set to path and filename of image 
  - (Pls. consider: https://discourse.nodered.org/t/how-to-enable-ability-to-input-local-image-files-in-to-node-red-dashboard/3085)
- toolbar.append (x) // Enable or disable functions 


# Credits and links
- Most of the code and ideas come from here: https://discourse.nodered.org/t/button-in-topbar/6377/31
