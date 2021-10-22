const express = require('express');
const app= express();
const cors= require('cors');
const port=4000;

app.use(cors());
app.use(express.json());

const users=[
    {'id':0,'name':'hasenur','email':'hasen@gmail.com','phone':01234567},
    {'id':1,'name':'habibur','email':'habibur@gmail.com','phone':02234567},
    {'id':2,'name':'kasem','email':'kasem@gmail.com','phone':03234567},
    {'id':3,'name':'hemayth','email':'hemayth@gmail.com','phone':04234567},
    {'id':4,'name':'abu jafor','email':'jafor@gmail.com','phone':05234567},
    {'id':5,'name':'hanif','email':'hanif@gmail.com','phone':06234567},
    {'id':6,'name':'hafiz','email':'hafiz@gmail.com','phone':07234567},
]

app.get('/',(req,res)=>{
    res.send('node user page')
})

app.post('/users',(req,res)=>{
    console.log('console hittin',req.body);
    const newuser=req.body;
    newuser.id=users.length;
    users.push(newuser);
    res.json(newuser)
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id',(req,res)=>{
    const spacilid= req.params.id;
    const user= users[spacilid];
    res.send(user)
})

app.listen(port,()=>{
    console.log('code is running port',port);
});