# equity-portfolio-server
Server that the equity portfolio tracker (client) talks to.

Follow the following steps to ensure this server connects to the mysql server:
1. Create a mysqlConfig.json file in the root of this directory
2. Create a singular object in that file with the following three field names:
    - "host"
    - "user"
    - "password"
3. Fill in the values with your appropriate configuration

Here is an example mysql config object:
{
    "host": "YOUR_HOST_NAME",
    "user": "YOUR_USER_NAME",
    "password": "YOUR_PASSWORD"
}
