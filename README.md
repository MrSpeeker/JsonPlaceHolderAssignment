# JsonPlaceAssignment

## Description:

1. In this assignment we pull data from the following post request -> https://jsonplaceholder.typicode.com/posts
2. A 10 x 10 grid is built to show all these json items as separate components.
3. Displayed on the squares:
- Default `Title`
- Click -> `UserId`
- Click -> `Id`
- Click -> `Body`
- Click -> `Title`

4. When clicking on item 1 and then on item 2, item 1 should be reset to a default value of `Title` and item 2 should be set to `Body`:
- NGRX state management has been implemented to change the type of an item when it is clicked on based on the following enum: 
- `export enum jsonPlaceHolderEnum {
    Title = 0,
    UserId = 1,
    Id = 2,
    Body = 3,
   }`
 - Based on the type set in the store, a value will display according to match its type on the card.

5. The current clicked item's `id` is displayed on a toolbar at the top of the page.

## Setup
1. Clone repository.
2. Inside the root folder of the cloned repository, type in a terminal `npm i`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

