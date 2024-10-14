During development, you can link your package to the demo application so that changes in your package code are reflected in the demo without needing to publish to NPM.

From the root of your package repository (where your package's package.json is located), run:

npm link

cd site
npm link @parallaxx/toolkit
