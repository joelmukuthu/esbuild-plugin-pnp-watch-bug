# Minimal reproduction for

To reproduce:

1. Clone this repo and `cd` into the cloned directory
2. Run `yarn rebuild` to build esbuild
3. Run `yarn with-plugin` in the same terminal window (A). This prints out:

   ```text
   $ yarn with-plugin
   building...
   build result: { errors: [], warnings: [], stop: [Function: stop] }
   ```

4. In a separate terminal window (B), run `yarn without-plugin`. This prints out:

   ```text
   $ yarn without-plugin
   building...
   build result: { errors: [], warnings: [], stop: [Function: stop] }
   ```

5. Edit `./main.ts` and save the file
6. In terminal B (`without-plugin`), you should now see:

   ```text
   $ yarn without-plugin
   building...
   build result: { errors: [], warnings: [], stop: [Function: stop] }
   watch build succeeded: { errors: [], warnings: [], stop: [Function: stop] }
   ```

   While the output in terminal A (`with-plugin`) stays the same.

The esbuild configs in `./start.js` are set up to print out "watch build
succeeded" every time changes are deted in `./main.ts`.
