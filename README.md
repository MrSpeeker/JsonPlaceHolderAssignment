# JsonPlaceAssignment

## Description

1. In this assignment we pull data from the following post request -> https://jsonplaceholder.typicode.com/posts
2. A 10 x 10 grid is built to show all these json items as separate components.
3. Displayed on the squares:
    - Default `Title`
    - Click -> `UserId`
    - Click -> `Id`
    - Click -> `Body`
    - Click -> `Title`

4. When clicking on item 1 and then on item 2, item 1 should be reset to a default value of `Title` and item 2 should be set to `Body`:
    - NGRX state management has been implemented to store all the items, change the type of an item when it is clicked on based on the following enum:
    - `export enum jsonPlaceHolderEnum {
  Title = 0,
  UserId = 1,
  Id = 2,
  Body = 3,
 }`
    - Based on the type set in the store, a value will display according to match its type on the card.

5. The current clicked item's `id` is displayed on a toolbar at the top of the page.
6. Item details only show on hover, so that only one of the blocks details are shown at a time.

## Setup

1. Clone repository.
2. Inside the root folder of the cloned repository, type in a terminal `npm i`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Assignment questions

1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every
   request for authentication. Here's an example of such a token:
   ```
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgMjM6NTk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-WQZkuNo
   ```

Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it into multiple lines)

2. In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors
   bad actors might try to abuse? And how would you mitigate these vectors?

3. Explain the difference between mutable and immutable objects.
   - What is an example of an immutable object in JavaScript?
   - What are the pros and cons of immutability?
   - How can you achieve immutability in your own code?

4. If you would have to speed up the loading of a web-application, how would you do that? (no need to actually do it, just describe the steps you would
   take)
5. What part of a new job do you think is more important:
   - Choose your own hardware, but work with a company supplied operating system image.
   - You’re offered a standard piece of mediocre hardware. Free to pick your own Software.

## Assignment answers

1. Looking at the token it seems that you are using a HMACSHA256 cryptographic algorithm, this is safe because:
   - HMAC is used for message authentication.
   - HMAC is efficient and suitable for use cases where both parties share a secret key. (In your case you have both parties with the autentication extention, so if they are marked as trusted they most probably share the same secret key).
   - Most commonly used for securing communications protocols like TLS/SSL. 
   - Also used for generating authentication tokens and verifying api requests.

2. Attack vectors available:
   - **Cross-site Scripting**: This occurs when attackers inject malicious scripts into web pages viewed by other pages.
   - **Cross-Site Request Forgery**: Attackers trick users to click on a link on a trusted site to navigate them to a malicious website.

   How to prevent said attack vectors:
   - **Cross-site Scripting**: Santize all user supplied input on server side. Avoid using eval() and InnerHTML in code (can execute scripts of attackers).
   - **Cross-Site Request Forgery**: Implementing proper core policies. With this you can restrict which domains can access your resources.

3. A mutable object can be changed after it is created, while an immutable object cannot.
   **Example**:
      - number
      - **Why** A variable has its own location id. So in the following code:
      ```
         a = 5; 
         b = a + 3;
         // `a` will still = 5
         // `b` will = 8

         // if number were mutable, a will change to 8 and b as well because then they would share the same location id.
      ```
   **Prod and Cons**
      - **Pros:**
         - Can implement change detection optimizations. Angular does reference checks instead of deep object comparisons.
         - Performance increase. With limiting the change detection can in turn improve performance, because we can choose when to push a change.
         - Debugging is made a lot easier because an object change is more predictable than with mutable types.
      - **Cons:**
         - Coding overhead. 
         - Learning curve. New patterns and best practices will have to be learned to implement it properly and when needed.
         - Nested data structures can become a pain to handle when immutable.
         
   **Achieving immutability in my own app:**
      - With currently using NGRX which enforces immutabiility by design, I already achieved it.

4. Steps to how I would improve performance on a web-app:
   **Steps**:
      - Figure out which parts of your app is slow.
      - Go to the angular chrome extension profiler.
      - Execute actions on the places you think might be causing the performance issues.
      - Take your finding in the profiler back to code and address said performance issues.
   **Examples**: Can be anything from subscriptions not closed, to change detection firing to frequently.
   
5. You’re offered a standard piece of mediocre hardware. Free to pick your own Software.
   - **Reason**
      - I would like to choose my own software.
      - Gives me the freedom to use what I want to use. 
      - Also I am really comfortable coding on vscode, but won't mind trying other IDE's.
      - The extension and short cut keys in vscode makes coding so much easier and faster in my case.