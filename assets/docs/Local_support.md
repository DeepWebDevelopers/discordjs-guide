## How to run the code locally

### Step one

clone the repo with `git clone <url>`

### Step two

install all dependencies with yarn or node.

`yarn install`

### Step 3 

Assuming you are in the root folder of the project run: 

`cd source && yarn start` or `cd source && node start`

### What does this do?

First in step one, we installed the node_modules folder from the package.json

After that we opened up the project source files using the cd command, and started a development server. This should have opened up a window in your browser to view the project live. 

The project is build on [docusaurus](https://docusaurus.io/docs) so read there docs to learn more about how to confiure the project. 

### Checking for errors

The best way is to run `yarn build`. This will create a production view of the website and will run a standard error check on the site.

### Things to remember 

1. make sure you edit the [sidebar.js](../../source/sidebars.js) file with your changes or else none of your pages will render. Again, refer to the [docusaurus](https://docusaurus.io/docs) for more information.

2. Join our Discord for direct contact with us. We appreciate the support but we dont want to overlap each other.