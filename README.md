
<h3>Demo</h3>
https://react-client-panel-cf658.firebaseapp.com

<h3>What is it?</h3>
<p>Client Balance Management Panel with authentication and client data storage.</p>

<h3>What technologies are used?</h3>
<p>Built using React, Redux, Firebase/Firestore and Bootstrap.</p>


<h3>How to run it</h3>

```bash
# Install dependencies
npm install

# ADD YOUR OWN FIREBASE CONFIG TO STORE.JS

# Serve on localhost:3000
npm start

# Build for production
npm run build
```



<h3>How to use it</h3>

Register with any email or use (email: user@test.com,  password: usertest) to login.

Add Clients to the dashboard by clicking the +NEW button. 

<img src="https://github.com/KabirMaan/react-firebase-client-panel/blob/master/readme-images/image-1.jpg" width="1100" title="Dashboard">



Fill in Details to add a new client to the dashboard.
The new client will appear at the top of the client list

<img src="https://github.com/KabirMaan/react-firebase-client-panel/blob/master/readme-images/image-2.jpg" width="1100" title="Add Client">



Click the Details button on a client to view/update their balance. 
Once on the Details page, client profile data can be edited by clicking the “Edit” button or removed by clicking the “Delete” button.

<img src="https://github.com/KabirMaan/react-firebase-client-panel/blob/master/readme-images/image-3.jpg" width="1100" title="Details">



Click on the Settings tab in the Navbar to adjust accessibility settings. 
Unchecking “Allow Registration” prevents any new users from registering.
Checking “Disable Balance on Add” prevents a balance being entered when adding a new client.
Checking “Disable Balance on Edit” prevents a balance being modified when editing a client.

<img src="https://github.com/KabirMaan/react-firebase-client-panel/blob/master/readme-images/image-4.jpg" width="1100" title="Dashboard">

