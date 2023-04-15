import { useState } from 'react';
import { TwSeguirCard } from './TwSeguirCard';



const users = [
    {
        id : "1",
        nombre: "ValeeBorgo",
        img: "https://wallup.net/wp-content/uploads/2019/09/08/563069-naruto-uchiha-madara-close-up-sharingan.jpg",
        nombreUsuario: "Valentino Borgo",
        initialTeSigue: false
    },
    {
        id : "2",
        nombre: "Mekkka",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32017a6d-56e0-48f1-ae7d-bc63b33905c7/de8b8sl-fdeea98f-3db0-4dd2-941b-10c9dd716589.jpg/v1/fill/w_1024,h_1213,q_75,strp/adult_sasuke_by_yashartz_de8b8sl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMyIsInBhdGgiOiJcL2ZcLzMyMDE3YTZkLTU2ZTAtNDhmMS1hZTdkLWJjNjNiMzM5MDVjN1wvZGU4YjhzbC1mZGVlYTk4Zi0zZGIwLTRkZDItOTQxYi0xMGM5ZGQ3MTY1ODkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.B90Iflw3gBgthaYM3WsvzWklDBSNTIRTe9TC9uX4FxA",
        nombreUsuario: "Osvaldo Cozzi",
        initialTeSigue: true
    },
    {
        id : "3",
        nombreUsuario: "Santiago Ocampo",
        img: "https://d3ekkp2oigezer.cloudfront.net/business/531/products/DOYzxW_5fd62d38dffbe_large.png",
        nombre: "OkApO",
        initialTeSigue: false
    },
    {
        id : "4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
        initialTeSigue: true
    }
];


//<> 
 {/* 1) PRIMERA OPCION DE ENTREGARLE LA INFOMARCION  PARA LOS COMPONENTES */}

            {/* <div className='app'> */}

            // LOS nombre pasado desntro de la etiqeuta actuan como children
             
            {/* <TwSeguirCard img={"https://wallup.net/wp-content/uploads/2019/09/08/563069-naruto-uchiha-madara-close-up-sharingan.jpg"} nombreUsuario={"ValeeBorgo"}>Valentino Borgo</TwSeguirCard>
                <TwSeguirCard initialTeSigue={true} img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32017a6d-56e0-48f1-ae7d-bc63b33905c7/de8b8sl-fdeea98f-3db0-4dd2-941b-10c9dd716589.jpg/v1/fill/w_1024,h_1213,q_75,strp/adult_sasuke_by_yashartz_de8b8sl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMyIsInBhdGgiOiJcL2ZcLzMyMDE3YTZkLTU2ZTAtNDhmMS1hZTdkLWJjNjNiMzM5MDVjN1wvZGU4YjhzbC1mZGVlYTk4Zi0zZGIwLTRkZDItOTQxYi0xMGM5ZGQ3MTY1ODkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.B90Iflw3gBgthaYM3WsvzWklDBSNTIRTe9TC9uX4FxA"} nombreUsuario={"Mekkka"}>Osvaldo Cozzi</TwSeguirCard>
                <TwSeguirCard img={"https://d3ekkp2oigezer.cloudfront.net/business/531/products/DOYzxW_5fd62d38dffbe_large.png"} nombreUsuario={"OkApO"}>Santiago Ocampo</TwSeguirCard> */}

            {/*Esta equiteta solo la envie con una foto para probar de lado de ella, poner las props por defecto*/}
            {/* <TwSeguirCard initialTeSigue={true} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}></TwSeguirCard> */}

            {/* <button onClick={cambiarNombre}>Cambiar nombre</button> */}
            {/* </div> */}


            {/* 2) SEGUNDA OPCION DE ENTREGARLE LA INFOMARCION  PARA LOS COMPONENTES */}

// </>

export function App() {

    // const [nombrePrueba, cambio] = useState('Valentino Borgo');

    // const cambiarNombre = () =>{
    //     cambio('Meka Cozzi')
    // }

    // const nameOrig = nombrePrueba ? 'Valentino Borgo' : 'Meka Cozzi'; 
    return (
        <section className='app'>
            {
                users.map( user =>{
                    const {id,nombre, img, nombreUsuario, initialTeSigue} = user;
                    return(
                        <TwSeguirCard 
                        key={id}
                        nombre = {nombre}
                        img = {img}
                        initialTeSigue = {initialTeSigue}>
                        {nombreUsuario}</TwSeguirCard>

                    )
                })
            }
        </section>
    )
};