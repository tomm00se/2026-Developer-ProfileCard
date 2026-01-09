# Created with Create-React-App + Explanation of Project

This project is a quick demo using JS. I would initially use TS as type guarding, which enforces stricter development practices and reduces bugs stemming from incompatible types.
Deviations from the course content:
- I separated each component into a file: If this was more complex, I would create component folders that contained the .tsx, .css/.scss, .story & .tests files. (Using global styles for components isn't best practice.)
- I used the useMemo() hook: As opposed to useState() and useEffect() for managing the logic & rendering of the skill components, due to there being no live data to worry about, rating is very likely not going to be updated without explicit input. Using a useMemo() here to return rating as a variable, instead of tracking state and having it update dynamically (when it doesn't need to), is a waste.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
