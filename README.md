# bikechainapp-v2
reservation app for DIY bike shop
Bikechain Waiting List App

Feature Considerations
	•	Users add and remove themselves from the waitlist as opposed to interacting with a representative to get oriented on needs, services, process, timing, etc.
	•	With first time visitors to the shop, the burden of orienting falls on the system. 
	•	Will explore in-person orienting further in subsequent versions as we suspect a holistic loss of efficiency with using a terminal-first approach.
	•	We also assume that one-on-one interactions through the bike repair activity will make up for a lack of upfront engagement. 


Project Goals

We want to:
	- Make it as easy to use for patrons and administrators as possible.
	- Allow users to maintain the health of the system (hardware and software) with as little technical knowledge as possible.
	- Design for ease of installation by similar organizations to download and use for free.
	- Use current development tools/environments that allow a broader community to adapt, update, and contribute.
	- Allow for users to use the system while providing as little information as possible.
	- Where third party services like twillio are used, inform users of how data is shared 
		- PIPEDA https://www.priv.gc.ca/media/2038/guide_org_e.pdf
	- Include features that minimize repetitive effort on the part of administrators adding and allow patrons to self-serve wherever possible.
	- Give organizations the open to deploy the waitlist system on a local server and avoid use of cloud-based services as an added layer of privacy.

Users
Patron - A person who is a customer, especially a regular one.
Admin - A person who controls the waitlist


Use-Case Scenarios

Epic Scenario - [Patron]
	◦	Samantha signs up for a spot, gets a text message and get back to the shop to mount her bike on a free stand and begin fixing.

Epic Scenario in Detail  - [Patron]
	◦	Samantha walks into the shop with bike to add themselves to waitlist app
	◦	She notices a terminal with a sign that says: Waiting List.
	◦	She walks over looking to sign up and get a sense for how long a wait it would be.
	◦	She sees that she has the option to enter her phone number to be notified when it’s her turn or she can wait in person.
	◦	She also sees a list total number of people in line and how long each has waited.
	◦	There’s also an average waiting time (calculated as a running average for x weeks).
	◦	Samantha decides to sign up with her phone number.
	◦	She enters ‘Sam’ and a phone number and presses Add.
	◦	The system says: ‘Sorry, there’s another person named Sam on the list. Try adding an initial or pick a different nickname.’
	◦	Samantha updates the name to ‘Samantha’ and presses Add.
	◦	She sees a ‘Added to the list’ and sees the waiting list update with her name added.
	◦	She also gets a text message that says: ‘Welcome to the bikechain waitlist app. We’ll text you when a stand is ready. To see where you are on the list: text status. To cancel text cancel’

Detailed Story - Status and Cancel - [Patron]
	◦	Samantha has gone to Bikechain and added herself to the waiting list.
	◦	She notices a terminal with a sign that says: Waiting List.
	◦	She also gets a text message that says: ‘Welcome to the bikechain waitlist app. We’ll text you when a stand is ready. To see where you are on the list: text status. To cancel text cancel’.
	◦	A little while later, she wants to go to run errands off campus but isn’t sure if she will have enough time so she replies to the initial text with status.
	◦	She gets the following message: Current position: 5, average waiting time: 1.5 hours, +/- 30 min
	◦	She realizes that she is not going to make it back in time so she replies with Cancel.
	◦	She gets the following message: ‘You’re listing has been removed. Thanks for letting us know’.



Epic Scenario - [Admin]
	◦	Beth completes helping Adam with his bike.
	◦	Adam gets his bike off the stand and leaves the shop.
	◦	Beth goes to the waiting list app, looks at the next person on the waiting list (Samantha) and presses ‘stand available’.
	◦	The waiting list system updates listing and lets Beth know that a text message has been sent.
	◦	In the case where Samantha has not provided a telephone number, the system will indicate that Beth should callout for Samantha among those waiting.
	◦	Continuing with the case where a number has been provided, Beth notices a decreasing timer next to Samantha’s name indicating the time left for her to come in with her bike and claim the available stand.
	◦	Beth is approached by someone who walks in. 
	◦	Samantha, instructed to inform of her arrival tells Beth: ‘Hi I am Samantha and I just got a text that a stand is available for me’.
	◦	Beth directs Samantha to an empty stand.
	◦	Beth goes over to the waiting list system and confirms Samantha’s arrival by clicking ‘Arrived’.
	◦	She sees the system update with Samantha moving off the list and the next person on the Waiting list take over the first in line position.



No Show - [Admin]
	◦	Beth completes helping Adam with his bike.
	◦	Adam gets his bike off the stand and leaves the shop.
	◦	Beth goes to the waiting list app and presses complete on Adam.
	◦	The waiting list system updates the waiting list and lets Beth know that Samantha is the next person and a text message has been sent.
	◦	Beth also notices a decreasing timer next to Samantha’s name indicating the time left for her to come in with her bike.
	◦	A little while later, Beth glances at the system and notices the the time for Samantha has run out.
	◦	She call out: ‘Is Samantha here?’
	◦	Not finding Samantha, she cancels Samantha’s listing and sees an update where Samantha is moved to the No-Shows list from the Waiting list.
	◦	She is also notified that by the system that Samantha has been notified of the cancelation.
	◦	She gets a nod and directs Samantha to an empty stand.
	◦	She goes over to the waiting list system and confirms Samantha’s arrival by clicking Arrived.
	◦	She sees the system update with Samantha moving off the list and the next person on the Waiting list update to an Active state.



Switching Positions  - [Admin]
	◦	Beth completes helping Adam with his bike.
	◦	Adam gets his bike off the stand and leaves the shop.
	◦	Beth goes to the waiting list app and presses complete on Adam.
	◦	Due to confusion, poor communication, or error admin needs to change the waiting list entry.
	◦	NOTE:  We need to consider giving users the ability to recover from accidentally pressing ‘Arrived’. May need to give users a way to access an “arrived” list with the ability to pull them back into the waiting list.
	◦	Will need to inquire if this is a real need.


Cancel Position - [Admin]
	◦	Beth is approached by Elsie.
	◦	Elsie mentions that she added herself to the list but will not be waiting.
	◦	Beth finds and cancels Elsie’s listing.
	◦	She sees the system update where Elsie is moved to the No-Shows list from the Waiting list.

Export - [Admin]

    ◦    Beth exports the list of individuals for the year.
