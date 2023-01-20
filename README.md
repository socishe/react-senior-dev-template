# Template for react with typescript for senior developer

This repository is a startup repository for all new projects that are large scale project. This is a unique repository because it has sas foundation for separated into its own folder which includes typography, mixins, colors and variables. Which are easily used by importing ``global.scss`` file into each scss file. To make things more interesting I have created a script that create a typescript component with it's corresponding scss file already imported. You can choose between class component (cc) or functional component (fc). 

You can then run the script by running ``yarn create-component fc path/to/component`` or ``yarn create-component cc path/to/component`` in the command line, where ``path/to/component`` is the path where you want to create the component, including the folder and the component name.

To run this repository into your local you will need to follow these steps below:
1. ``git clone https://github.com/socishe/socishe-reactjs-senior-dev-template.git``
2. inside the socishe-reactjs-senior-dev-template folder you will have to run ``yarn install``
3. To run the project run ``yarn start``
