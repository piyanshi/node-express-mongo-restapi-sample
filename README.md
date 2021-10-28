# node-express-mongo-restapi-sample
This is sample restful api using node, express and mongo. Jest is used for test setup.

Steps to run the API:
1. clone or download the code
2. install node packages using
    npm install
3. run the api : 
    npm start
5. run the test case : 
    npm test 
6. to call the API , make a POST call to http://localhost:8080/api/records/find using postman or any other tool/program
7. Request Payload
    
    The request payload will include a JSON with 4 fields.
    
    ● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”.
    
    ● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.
    
    Sample:
    {
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
    }
