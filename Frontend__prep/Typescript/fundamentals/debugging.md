1. After enabling sourcemap prop to true inside tsconfig file. 
2. Click on run and debug in vs code left nav.
3. Select launch and debug, select nodejs to launch this program
4. Add "preLaunchTask": "tsc: build - tsconfig.json",
5. here we are telling vs code to use ts compiler to build our ap using ts config file.