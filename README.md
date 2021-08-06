# Off The Records v1.0.0

## What is Off The Records?
  Off The Records is a musical artist management tool aimed at independent artists and their representation. Users have the ability to keep track of their many accounts across the internet, their social media statistics, and their  streaming statistics. 
  In addition to this, users can also draft and plan projects by filling out a simple form. 
  The form will result in a chart, acting as a timeline and checklist of everything that needs to be done to make a record on both the musical side and the business side. 
  Off The Records is a web application written in the Django framework in conjunction with react. 
  The rest API makes use of Django REST API Framework to link the front end to the back end.
  The data is stored in an RDBMS, which at the moment is sqlite,
  however any other DBMS such as postgres or mysql could be used in place.
  Styling and aesthetics are written using css and bootstrap, and the gantt chart is written in javascript (uses google charts API).
  

## User Guide (step by step)
### Getting Started
1. Register for an account
  - If you are a self-managing artist, please select the artist role
  - If you are a manager, please select the manager role
2. Login to your new account, you may access the home page by clicking "Off The Records"
### Manager Role
3. If it is your first time using the site, select "add new artist" 
4. To view a specific artist profile, select one from the list

### Artist Role
3. If it is your first time using the site, fill out all required fields in the form
4. For further information, see artist profile

### Artist Profile
5. To edit an artist profile, click the "edit" button on the bottom of the form
6. Some select fields have another edit/save button or an add button if no information has been entered
7. To save edits, click the "update" button

### Project Planning
8. To see a list of your project plans, select "project plans"
9. If you have not created a project plan before or "project plans" is empty, select "create new project plan"
10. Fill out the project form
11. To access any previously project plans, click on a plan from the list in "project plans"
12. When viewing a project plan, you will be presented with a gantt chart
13. You can check or uncheck items as complete on the chart by simply clicking them and selecting the desired option


## Installation and Access Requirements
- install python 3.9
- make sure node.js is available in the same location as the manage.py
- run in terminal to compile jsx files to js: npx babel --watch jsx --out-dir offTheRecords/static/ --presets react-app/prod
- pip install -r requirements.txt
- run in terminal: python3 manage.py makemigrations
- run in terminal: python3 manage.py migrate
- run in terminal: python3 manage.py runserver
- visit http://localhost:8000 in browser

## Tree Guide (Relevant Files)
- ### api --> REST api for offTheRecords
  - #### serializers.py --> Converts models to json and visa a versa
  - #### urls.py --> routing for api
  - #### views.py --> Stores api functionality in the form of view sets
- ### finalProject --> managerial folder
  - #### settings.py --> all settings for the application
  - #### urls.py --> main urls routing folder
- ### jsx --> React files to be compiled
  - #### artist.jsx --> artist profile display and form 
  - #### main.jsx --> list of artists under a manager
  - #### plans.jsx --> list of plans made by a user
  - #### project.jsx --> Form to create new project
- ### offTheRecords --> The application itself
  - #### migrations --> Django provides an object relational mapper which keeps track of database tables and the classes that represent them.
    the migrations folder inside each app is used to keep the two in sync.
  - #### static --> stores javascript and css files
    - styles.css --> Stores css classes with visual parameters
    - (All .js files are compiled from node.js)
  - #### admin.py --> Admin functionality for all models
  - #### models.py --> databases represented as python classes, stores user, project, and artist data
  - #### urls.py --> routing for models and views
  - #### views.py --> functionality of web app
- ### templates --> Stores html files for front end
  - #### offTheRecords --> Made for best practice
      - artist.html --> artist profile page and artist type user homepage, linked to layout.html and artist.jsx
      - layout.html --> contains navbar and other inclusions for the pages (css, bootstrap, react, etc.)
      - login.html --> page that contains Django form for user login
      - manager.html --> manager home page, linked to layout.html and main.jsx
      - project_list.html --> page that lists user project plans, linked to layout.html and plans.jsx
      - project_planning_form.html --> page that contains new project plan form, linked to layout.html and project.jsx
      - project_planning_results.html --> page that displays a project plan, linked to layout.html
      - register.html --> page that contains Django form for user login
   
   
- ### .gitignore --> removes unnecessary files
- ### db.sqlite3 --> database created and altered by models.py
- ### package.json --> file generated by node
- ### package-lock.json --> file generated by node
- ### README.md --> YOU ARE HERE
- ### requirements.txt --> all required installations