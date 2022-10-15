// const myFunc = (num: number): number => {
//     return num * num;
//   };
  
//   export default myFunc;

import express from 'express';
import csv from 'csvtojson'
import { promises as fsPromises } from 'fs';

const app = express()
const port = 3000

//定义文件路径
const inputFile = './users.csv'
const outputFile = 'users.json'

app.get('/convert', (req, res) => {
    res.send('converting in processing!')
    csv().fromFile(inputFile)
    .then((json)=>{
        console.log(json)
        let newDate = json.map((item: 
            {
                first_name: string; 
                last_name: string;
                phone: string;
            }) => {
                let first = item.first_name;
                let last = item.last_name;
                let phone = item.phone;
                if(item.phone === ""){
                    phone = 'missing data'
                }
                return {first, last, phone}
            });

            fsPromises.writeFile(outputFile, JSON.stringify(newDate))
    })
})



app.get('/api', (req, res) => {
    res.send('Hello, world!!!!')
})

app.listen(port, () => console.log('Listening on port ', port))

export default app;