# React 19 useEffect Cleanup Issue

This repository demonstrates a seemingly simple React 19 component where the `useEffect` cleanup function doesn't appear to be called when the component unmounts.  The issue is subtle and might be related to how the component's lifecycle interacts with specific rendering optimizations introduced in React 19 (or potentially a related library).

## Bug Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs.  The 'Cleanup' message should be logged when the component is unmounted, but might not be in certain situations (e.g., rapid navigation changes).

## Solution

The solution involves making sure that the condition under which the component is unmounted can't trigger a premature exit.
