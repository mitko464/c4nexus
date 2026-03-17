# c4nexus
Home assignment project



- The project uses JSON-SERVER to mimic a database
- concurrently is used to run scripts simultaneously (excludes usage for a second terminal)



- This is a simple e-commerce PLP page which includes:
    - responsive layout
    - product fetching
    - product fetch-filtering
    - product sorting

- The project was built using React.js including:
    - plain HTML/CSS to represent the layout
    - json-server for products and paginated results
    - react-router
    - react-icons
    - vite

- How the solution was achieved
    - product used as a start taken from https://fakeapi.platzi.com/, updated to meet the requirements
    - css reset was taken from http://meyerweb.com/eric/tools/css/reset/ 
    - Google font - Montserrat was used
    - loading spinner was taken from https://css-loaders.com/spinner/, only styles are adjusted.

- Any challenges encountered during development
    - Getting familiar with json-server required some refactoring to db.json (a few times), in order to use search params
    - Fetch-filtering was extrmely challenging and took most of the time
      
            - filter attributes are taken dinamtcally based on the fetched products (probably not the best way - maybe I had to hardcode category based filtes)
            - had to get familiar with useMemo in order to avoid multiple unececcsary product fetches (to get the filter attributes)
            - hasActiveFilters was something that took forever to realize that would avoid previous step
            - I was forced to use help from AI in order to resolve issues with the followin scenario:
  
                1. User lands on page 
                2. User selects a few filters
                3. User clicks Load More (since there are more producst than the displayed)
                4. x out of y products displayed - was going crazy - x was increasing on filter check/uncheck (resetting the currentPage was one of the main reasons for the issue)
  
            - sortBy was another struggle
                1. sorted setting was not persistent during "Load More" (new products were appending without correct sort)
                2. I planned to have local state for the SortSelector, but in order to fix the issue from 1. I realised that state should be lifted up.


====================================================
- Personal notes

To complete the task almost every react and javascript related logic/architecture was researched before implementing

There is always a better and cleaner solution, but I had a lot of fun and a lot of personal and career doubts during the process! The task really pushed me to the limits and the experience is priceless! I never knew what a struggle it was to recreate features that we use for granted daily and even complained about flaws! Phew, it's over!

!!! Unfortunately this doesn't cover Junior position requirements !!! AI code review made its point

TODO: 

1. Component Structure and Separation of Concerns
While the application works well functionally, the code could benefit from clearer separation between UI components and business logic. Breaking the application into smaller, reusable components and isolating logic (e.g. filtering/sorting) would improve maintainability and scalability.

2. State Management and Data Flow
Managing filtering, sorting, and pagination together can become complex. Structuring the state more clearly (e.g. deriving filtered/sorted data instead of mutating it) would make the logic easier to follow and debug.

3. Code Readability and Organization
Improving naming conventions, file structure, and grouping related logic would make the project easier for others to understand. This is especially important when working in a team environment.

4. UI Polish and User Experience
The core UI is functional, but further refinement (spacing, alignment, consistency, responsiveness edge cases) would significantly improve the overall user experience.

5. Documentation and Technical Explanation
Providing more detailed explanations in the README (such as why certain decisions were made, what challenges were encountered, and how they were solved) would better demonstrate your problem-solving approach and engineering thinking.

====================================================

To run the project

1. npm i
2. npm run start
