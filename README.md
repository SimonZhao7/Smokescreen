# Smokescreen

## Inspiration
We were inspired to complete this project because of getting things spoiled. We all have encountered that exciting plot for a movie, story, anime, etc that we didn't want to get spoiled; however, this has never been something that pans out. Going on social media means that you could be scrolling through the Instagram's explore page for example and see things about what you don't want to get spoiled.
## What it does
What this chrome extension does is take in phrases that the user want's to be blocked. And using the phrases they give, different content will be excluded from their screen when the extension is turned on. It is really handy because you are able to turn the extension off and on when desired.
## How we built it
We first built this chrome extension by prototyping how the design would look for the extension. We then thought about how building chrome extensions work and so we used the chrome documentation for that. Afterwards, we had to figure out a way to check if a phrase in the hidden array is present in the page the user is on, and so we implement this through JS.
## Challenges we ran into
We ran into many challenges through this project. Many problems occurred when we tried to access the web page in certain ways that we didn't expect. There would be many minor errors such as off by one errors and different function errors that took time to debug. One specific challenge was blocking the content properly and resizing the blocked element properly. We obviously don't want the blocking to look bad so we had to make it look seamless. However, making it look seamless took time to configure the html, css, and javascript.
## Accomplishments that we're proud of
We are especially happy that we built a chrome extension. None of us have ever touched chrome extension documentation and this was our first time going head in. Given the limited amount of time we had, we feel like we learned a lot about chrome extensions and creating such an extension was awesome. This is the case because we feel like our extension serves a purpose that we felt needed to be addressed.
## What we learned
For this project, we learned that nothing would come easy. We knew that everything we did would take countless repeats. This meant we felt like stopping at various times throughout the development; however, we knew that we had to persist through to prove ourselves that we were persistent. 
## What's next for SmokeScreen
We hope to add more websites that SmokeScreen can easily work on. We also hope to add functionality where a user's phrases are stored in Firebase. We would like to implement Firebase for this because it would make setting up accounts and storing the phrases very easy. We also hope to add more tools that the user can utilize like a zapping tool where a user can easily remove content with a picker that they don't want to see.