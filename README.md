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

   While the output in terminal A (`with-plugin`) stays the same -- esbuild
   is configured to print out "watch build succeeded" every time changes are
   detected in `./main.ts`.

   Additionally, compare `./out/with-plugin.js` and `./out/without-plugin.js`;
   the latter will contain the updates from `./main.ts` while the former won't.
