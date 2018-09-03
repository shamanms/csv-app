## Task:

### Implement self-contained application(using Docker and Docker-Compose). The application should include three containers:
- node:8 for frontend(create-react-app/redux)
- node:8 for backend(koa.js)
- mongo for data storing.

### Frontend
Frontend side of the application should allow to upload CSV file with transactions list.
Use the following file structure for the file:

```
id,cardHolderHash,datetime,amount
1,3ddldnbiej3355Ed,2018-08-15 10:22:23 GMT+0300,24.0
2,fdsvnseres3435fn,2018-08-16 11:13:43 GMT+0300,192.0
```

After uploading of new file all the transactions data should be shown on the page without page refreshing. Use table view here with schema as described for CSV file.
Also the page should include all transactions uploaded previously(all the uploads should be stored in MongoDB).
Implement two additional widgets: amount of all transactions and average amount.

### Backend
Should include REST API for transactions and additional endpoint for CSV file uploading. Use koa.js as backend framework.

### Mongo
Should store transactions data.

## Instalation:

`docker-compose up`