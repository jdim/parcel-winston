## Steps to reproduce

1) `npm run build`
2) `npm run app`

You'll see an error:

```
> parcel-winston@1.0.0 app
> node ./dist/main.js


/home/dmitriy/git/jdim/parcel-winston/src/index.ts:13
    new winston.transports.File({ filename: `./error.log`, level: 'error' }),
                           ^
TypeError: Class constructor File cannot be invoked without 'new'
    at Object.<anonymous> (/home/dmitriy/git/jdim/parcel-winston/src/index.ts:13:28)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```

## But it runs when compiled with `tsc`

1) `npm run build.tsc`
2) `npm run app.tsc`

You'll see no errors, and two log files in project folder will be created.
