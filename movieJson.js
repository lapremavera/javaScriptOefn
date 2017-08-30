var film = {
    "title": "Blade Runner 2049",
    "rating": 16,
    "runlength": 102,
    "description": "A young blade runner's discovery of a long buried secret leads him on a quest to track down         former blade runner, Rick Deckard, who's been missing for thirty years.",

    "comments": [{
        "user": {
            "alias": "Autumn M",
            "firstname": "John",
            "lastname": "Doe"
        },
        "text": "Hard to watch his character in the trailers it is so bad."
                 },{
        "user": {
            "alias": "bitterologist",
            "firstname": "John",
            "lastname": "Doe"
        },
        "text": "Reminds me of the villains in B movies."
    }
    ],

    "characters":
        [
            {"name":"Rick Deckard",
                "actor": {"firstname": "Harrison", "lastname": "Ford"}
            },
            {"name":"Officer K",
                "actor": {"firstname": "Ryan", "lastname":"Gosling"}
            },
            {"name": "Luv",
                "actor": {"firstname": "Ana", "lastname": "de Armas"}
            }

        ]

};
for (var i in film)
{
    document.write("row" + i);
    for (var j in film[i])
    {
        document.write( " " + film [i][j]);
    }
}





