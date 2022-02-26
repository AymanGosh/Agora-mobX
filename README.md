What’s an Agora you say? 
Well, as Wikipedia tells us, in ancient Greece “the Agora served as a marketplace where merchants kept stalls or shops to sell their goods amid colonnades.”

In layman’s terms, I’ll be building a simple shop using React and MobX. As the Agora manager,
you’ll be able to

Add new products

Set their price

Sell the products

Track the number of items in your store

No need for agora phobia, let’s get started!

COMPONENT AND STORE OVERVIEW

Note: “store” refers to the place where will be storing all of your data and data related functions. 
“Agora” refers to the project .

The App will consist of two react components:

A Market Component, where you can input new items and see each of the Items in your Agora

An Item Component, which will be a child of the Market component and will render the information of a single item, as well as a buy button

There is one main store, Inventory it have:

An array of items

Methods for

adding an item to the store

buying an item

changing the price

With tracker to the store to see how many Items are in our store at all times. 
Using a Provider to Inject the relevant parts of our store into our app where we need it.

