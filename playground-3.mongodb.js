use("patissier");
// db.createCollection("cake");

db.cake.insertMany([
    {
        _id:ObjectId(1),
        nome: "Morango",
        peso: "2kg",
        preco: 120,
        ingredientes: [
            {
                nome: "Trigo",
                quantidade: "400g"
            },

            {
                nome: "Ovo",
                quantidade: "6 unidades"
            },
           
            {
                nome: "Morango",
                quantidade: "20 unidades"
            },
        ]
        },
       
        {
            _id:ObjectId(2),
            nome: "Floresta Negra",
            peso: "2kg",
            preco: 120,
            ingredientes: [
                {
                    nome: "Trigo",
                    quantidade: "400g"
                },
    
                {
                    nome: "Ovo",
                    quantidade: "6 unidades"
                },
               
                {
                    nome: "Cereja",
                    quantidade: "20 unidades"
                },
            ]
            },
            {
                _id:ObjectId(3),
                nome: "Chocolate",
                peso: "2kg",
                preco: 120,
                ingredientes: [
                    {
                        nome: "Trigo",
                        quantidade: "400g"
                    },
        
                    {
                        nome: "Ovo",
                        quantidade: "6 unidades"
                    },
                   
                    {
                        nome: "Cacau",
                        quantidade: "200g"
                    },
                ]
                },

                {
                    _id:ObjectId(4),
                    nome: "Bolo de Banana",
                    peso: "2kg",
                    preco: 120,
                    ingredientes: [
                        {
                            nome: "Trigo",
                            quantidade: "400g"
                        },
            
                        {
                            nome: "Ovo",
                            quantidade: "6 unidades"
                        },
                       
                        {
                            nome: "Banana",
                            quantidade: "10 unidades"
                        },
                    ]
                    },

    ])

   
   
    db.cake.deleteOne({_id:ObjectId("00000001d2bd83ffc43a58ba")});
   
    db.cake.find({}, { nome: true, preco: true});
   
   
    db.cake.find ({preco: {$lte: 70}}, { nome: true, preco: true });
   
   
   
   
    db.cake.updateOne(
        { _id: ObjectId('000000021f0ae863f3d2e1e3') },
        {
            $set: {
                nome: "Bolo de Laranja",
                peso: "2kg"
            },
            $push: {
                ingredientes: {nome:"Laranja", quantidade: "5 unidades"}
            }
        }
        );
       
       
        use("patissier");

    db.cake.updateOne(
        {_id: ObjectId("00000003aa680e51f7aec7b5"), "ingredientes.nome": "Coco"},
        {
            $set:{
                "ingredientes.$.nome": "ovo",
                "ingredientes.$.quantidade": "3 unidades"
            }
        }
    )
   
   
    db.cake.find({_id:ObjectId("00000002aa680e51f7aec7b4")})
