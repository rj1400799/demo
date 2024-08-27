# tsc -init (tp initialize ts, it creates a tsconfig.json file).

1. Inside Emit, we have "outDir" : which takes directory where we want to put the compiled ts files, which are js files. 
2. "rootDir" --> where our ts files are located.
3. "removeComments" --> it removes comments, so generated js files will be shorter.
4. "noEmitOnError" --> if ts compiler finds any errors it will not generate any js files. Set to true always as this behaviour is best.
5. Enable "sourceMap": true this is a file which tells how each line of our ts code maps to the generated js code. 
   a. After enabling, compile your ts code using tsc and you will see some .map files inside /dist, inside that you will see "mappings" property, this is used by machines for debugging not for devs.


##Debugging ts apps