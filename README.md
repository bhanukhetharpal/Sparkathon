# "Redefining Retail: The Fitting Room Revolution!"
[Demo Video](https://youtu.be/IZWiCumvLcw)

## About The Project🚀: 
We've embarked on a quest to change the in-person shopping narrative! Think about it: shouldn't every trial room experience feel like a personalized styling session? No more size-guessing, no more style dilemmas. We're on a mission to ensure every time you step out of a trial room, it's with confidence and flair.

Now, ever had that moment in a store where you picked an outfit thinking it's "the one", but then the size doesn't fit or you're clueless about how to style it? Yeah, we've been there, and thought - we can totally jazz up this experience!
## Salient Features
### Find Your Perfect Fit 📏: 
Pop in your gender and measurements into our web app, and voila! Our trusty API digs through our sizing chart on MongoDB Atlas and tells you which size will hug you just right.

### Stylish Recommendations 🎩: 
Ever held up a piece of clothing and wondered, "What would this go with?" Just scan the barcode, and we'll serve you some snazzy outfit inspirations straight from Pinterest. Dressing up just became a whole lot more fun!

### Is My Size There? 🤔: 
Don't you hate it when your size isn't available? Scan the barcode, and our second API does a quick peek into our MongoDB Atlas inventory. If your size is around, our store buddy will get it for you. If not, leave your deets, and we’ll ping you when it’s back!

## Our Toolbox: 
We're rocking the MERN Stack.

* MongoDB Atlas: 
Our digital librarian. It holds all our product, sizing, and inventory info.
* Express.js: 
The magic behind our custom APIs.
* React.js: 
The face of our web app. It’s what makes it look good and feel smooth.
* Node.js: 
Our backstage manager, ensuring everything runs without a hiccup.

## Homegrown APIs 🌱:

* Size-Me-Up API: Matches your measurements with our sizing charts.

* Available-or-Nah API: Checks if a specific size is in the house.

## API used for Outfit Recommendations 🎩:
[Custom Search JSON API](https://developers.google.com/custom-search/v1/overview)
* Bridging the app and Pinterest, helping us fetch stylish outfit recommendations: On scanning the barcode, we get the product name, adding the term 'outfit' to this, our custom API, integrated with the Custom Search JSON API, forms a query targeted at Pinterest. The result? A digital stylist right in the trial room.

## Getting Started
To install and run the project on your local system, following are the requirements:

### Installation Guide

Follow these steps to get the project up and running:

1. **Clone the Repository:** Begin by cloning the repository to your local machine.

2. **Client Setup:**
   - Open a terminal.
   - Navigate to the 'client' directory using the `cd client` command.
   - Run `npm start` to start the client application.

3. **Server Setup:**
   - Open another terminal window.
   - Navigate to the 'server' directory using the `cd server` command.
   - Run `npm start` to start the server.

With these steps completed, your project should be running successfully with the client and server components up and active.
  
