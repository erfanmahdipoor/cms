let xAxisData =[
    {
        "name":"Jan",
        "Sale":112_000
    },
    {
        "name":"Feb",
        "Sale":99_000
    },
    {
        "name":"Mar",
        "Sale":12_000
    },
    {
        "name":"Apr",
        "Sale":99_000
    },
    {
        "name":"may",
        "Sale":54_000
    },
    {
        "name":"Jun",
        "Sale":85_000
    },
    {
        "name":"Jul",
        "Sale":34_000
    },
    {
        "name":"Agu",
        "Sale":18_598
    },
    {
        "name":"Sep",
        "Sale":0
    },
    {
        "name":"Oct",
        "Sale":73_078
    },
    {
        "name":"Nov",
        "Sale":12_000
    },
    {
        "name":"Dev",
        "Sale":90_000
    },
]
let newMembers=[
    {id:1,
    userName:"mohamdAmin",
    title:"webdevloper",
    img:"images/1.jpg"
   },
    {id:2,
    userName:"erfan",
    title:"seo",
    img:"images/1.jpg"
   },
    {id:3,
    userName:"javad",
    title:"backend",
    img:"images/1.jpg"
   },
    {id:4,
    userName:"mahdi",
    title:"frontend",
    img:"images/1.jpg" 
   },
]

const transaction=[
    {
        id:1,
        customer:"erfan mahdipoor",
        date:"11 may 2022",
        amount:"$1203",
        status:"Decline",
        img:"images/1.jpg"

    },
    {
        id:2,
        customer:"ali mahdipoor",
        date:"23 may 2022",
        amount:"$134",
        status:"Decline",
        img:"images/1.jpg"

    },
    {
        id:3,
        customer:"hasan mahdipoor",
        date:"2 may 2022",
        amount:"$12",
        status:"Decline",
        img:"images/1.jpg"


    },
    {
        id:4,
        customer:"hamed mahdipoor",
        date:"1 may 2022",
        amount:"$13",
        status:"Pending",
        img:"images/1.jpg"

    },
]
const userRows =[
    {
        id:1,
        userName:"hamed mhdipoor",
        avatar:'images/1.jpg',
        status:"active",
        transaction:"$23",
        email:"hemed@gmail.com"
    },
    {
        id:2,
        userName:"erfan mhdipoor",
        avatar:'images/1.jpg',
        status:"active",
        transaction:"$23",
        email:"erfan@gmail.com"
    },
    {
        id:3,
        userName:"mahdi mhdipoor",
        avatar:'images/1.jpg',
        status:"non-active",
        transaction:"$12",
        email:"mahdi@gmail.com"
    },
    {
        id:4,
        userName:"zahra mhdipoor",
        avatar:'images/1.jpg',
        status:"active",
        transaction:"$1203",
        email:"zahra@gmail.com"
    },
    {
        id:5,
        userName:"mohamd mhdipoor",
        avatar:'images/1.jpg',
        status:"active",
        transaction:"$1233",
        email:"mohamd@gmail.com"
    },
]
let products =[
     {
        id:1,
        title:"hp",
        avatar:'images/1.jpg',
        price :89000
    },
     {
        id:2,
        title:"asuse",
        avatar:'images/1.jpg',
        price :892000
    },
     {
        id:3,
        title:"aser",
        avatar:'images/1.jpg',
        price :891000
    },
     {
        id:4,
        title:"mac",
        avatar:'images/1.jpg',
        price :189000
    },
]

export  {xAxisData,newMembers,transaction,userRows,products}