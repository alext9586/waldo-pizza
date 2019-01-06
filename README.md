# Pizza App

A pizza shopping cart app using React, Redux, Apollo, and GraphQL.

Install all the scripts, then run in dev mode:
### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Problem Statement :pizza:
We have a TON of :pizza: and a GraphQL API but no way for pizza lovers to actually order their 'za! Your goal is to design a pizza order form using React. Pizza lovers need to be able to add pizzas to a "Pizza Cart" (i.e. a list of pizzas they've submitted) and be able to view all the pies they've submitted to their "Pizza Cart"!

## Requirements
- The user should be able to add/remove pizzas of any size to their cart.
- Use checkboxes to disable/enable toppings when adding a new pizza. The pizza size determines the max number of toppings that can be toggled. Disable other topping checkboxes once they hit the max for a pizza. (A `maxToppings` of `null` means unlimited toppings!)
- Cost per pizza should be calculated and displayed based on pizza base costs + sum of selected toppings.
- Total cost should be calculated and displayed for all pizzas in the cart.