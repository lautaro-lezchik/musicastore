const products = [
    {
        id:"01",
        image:["https://www.native-instruments.com/typo3temp/pics/img-ce-background-strummed_acoustic_overview_02_in_session-1aa0cd906ff559577f4727daa1c635de-d.jpg"],
        imageDescription:["https://http2.mlstatic.com/D_NQ_NP_981741-MLA47357204635_092021-O.webp"],
        name: "Guitarra Martin & Co. 000cjr-10e Electroacustica Jnr Travel",
        price: 181804.92,
        excerp:"La Serie Junior está diseñada para músicos que buscan un gran sonido en un cuerpo un poco más pequeño. Ahora disponible por primera vez con un cutaway, el estilo Auditorio 000CJr-10E presenta un fondo y lados de sapeli, que ofrecen tonos cálidos con una fuerte respuesta de rango medio. Incluye una tapa de abeto Sitka para mayor calidez y proyección y un mástil frotado a mano con un cono de alto rendimiento para facilitar la interpretación. Este modelo también tiene un borde trasero suave para brindar la máxima comodidad mientras se juega. El 000CJr-10E está equipado con electrónica Fishman® Sonitone e incluye una bolsa de transporte suave para facilitar el transporte para que pueda llevar su música a cualquier lugar. Encadenado con cuerdas de calibre ligero Retro®."
    },

    {
        id:"02",
        image:["https://i.ytimg.com/vi/yVVP08ompRI/maxresdefault.jpg"],
        name: "Taylor GS Mini-e Koa",
        price: 248568.66,
        excerp:"Referente mundial en la fabricación de guitarras, Taylor está presente en el mercado desde 1974. Desde entonces, se la considera como una marca única debido a la pureza de sus materiales y al bello aspecto estético que poseen sus instrumentos."
    },

    {
        id:"03",
        image:["https://www.native-instruments.com/typo3temp/pics/img-ce-background-strummed_acoustic_overview_02_in_session-1aa0cd906ff559577f4727daa1c635de-d.jpg"],
        name: "Guitarra Martin & Co. 000cjr-10e Electroacustica Jnr Travel",
        price: 181804.92,
        excerp:"La Serie Junior está diseñada para músicos que buscan un gran sonido en un cuerpo un poco más pequeño. Ahora disponible por primera vez con un cutaway, el estilo Auditorio 000CJr-10E presenta un fondo y lados de sapeli, que ofrecen tonos cálidos con una fuerte respuesta de rango medio"
    },

    {
        id:"04",
        image:["https://i.ytimg.com/vi/yVVP08ompRI/maxresdefault.jpg"],
        name: "Taylor GS Mini-e Koa",
        price: 248568.66,
        excerp:"Referente mundial en la fabricación de guitarras, Taylor está presente en el mercado desde 1974. Desde entonces, se la considera como una marca única debido a la pureza de sus materiales y al bello aspecto estético que poseen sus instrumentos."
    },

    {
        id:"05",
        image:["https://www.native-instruments.com/typo3temp/pics/img-ce-background-strummed_acoustic_overview_02_in_session-1aa0cd906ff559577f4727daa1c635de-d.jpg"],
        name: "Guitarra Martin & Co. 000cjr-10e Electroacustica Jnr Travel",
        price: 181804.92,
        excerp:"La Serie Junior está diseñada para músicos que buscan un gran sonido en un cuerpo un poco más pequeño. Ahora disponible por primera vez con un cutaway, el estilo Auditorio 000CJr-10E presenta un fondo y lados de sapeli, que ofrecen tonos cálidos con una fuerte respuesta de rango medio"
    },

    {
        id:"06",
        image:["https://i.ytimg.com/vi/yVVP08ompRI/maxresdefault.jpg"],
        name: "Taylor GS Mini-e Koa",
        price: 248568.66,
        excerp:"Referente mundial en la fabricación de guitarras, Taylor está presente en el mercado desde 1974. Desde entonces, se la considera como una marca única debido a la pureza de sus materiales y al bello aspecto estético que poseen sus instrumentos."
    },

    {
        id:"07",
        image:["https://www.native-instruments.com/typo3temp/pics/img-ce-background-strummed_acoustic_overview_02_in_session-1aa0cd906ff559577f4727daa1c635de-d.jpg"],
        name: "Guitarra Martin & Co. 000cjr-10e Electroacustica Jnr Travel",
        price: 181804.92,
        excerp:"La Serie Junior está diseñada para músicos que buscan un gran sonido en un cuerpo un poco más pequeño. Ahora disponible por primera vez con un cutaway, el estilo Auditorio 000CJr-10E presenta un fondo y lados de sapeli, que ofrecen tonos cálidos con una fuerte respuesta de rango medio"
    },

    {
        id:"08",
        image:{url:"https://i.ytimg.com/vi/yVVP08ompRI/maxresdefault.jpg"},
        name: "Taylor GS Mini-e Koa",
        price: 248568.66,
        excerp:"Referente mundial en la fabricación de guitarras, Taylor está presente en el mercado desde 1974. Desde entonces, se la considera como una marca única debido a la pureza de sus materiales y al bello aspecto estético que poseen sus instrumentos."
    },

]

export const getProducts = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            return resolve(products)
        }, 2000);
    })
}