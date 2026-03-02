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

====================================================

To run the project

1. npm i
2. npm run start
