import { TwSeguirCard } from './TwSeguirCard';


export function App() {

    return (
        <>
        <div className='app'>
            <TwSeguirCard  img ={"https://wallup.net/wp-content/uploads/2019/09/08/563069-naruto-uchiha-madara-close-up-sharingan.jpg"} nombreUsuario={"ValeeBorgo"}>Valentino Borgo</TwSeguirCard>
            <TwSeguirCard   img ={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32017a6d-56e0-48f1-ae7d-bc63b33905c7/de8b8sl-fdeea98f-3db0-4dd2-941b-10c9dd716589.jpg/v1/fill/w_1024,h_1213,q_75,strp/adult_sasuke_by_yashartz_de8b8sl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMyIsInBhdGgiOiJcL2ZcLzMyMDE3YTZkLTU2ZTAtNDhmMS1hZTdkLWJjNjNiMzM5MDVjN1wvZGU4YjhzbC1mZGVlYTk4Zi0zZGIwLTRkZDItOTQxYi0xMGM5ZGQ3MTY1ODkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.B90Iflw3gBgthaYM3WsvzWklDBSNTIRTe9TC9uX4FxA"} nombreUsuario={"Mekkka"}>Osvaldo Cozzi</TwSeguirCard>
            <TwSeguirCard  img ={"https://d3ekkp2oigezer.cloudfront.net/business/531/products/DOYzxW_5fd62d38dffbe_large.png"} nombreUsuario={"OkApO"}>Santiago Ocampo</TwSeguirCard>

            {/*Esta equiteta solo la envie con una foto para probar de lado de ella, poner las props por defecto*/}
            <TwSeguirCard  img ={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}></TwSeguirCard>
        </div>
        </>
    )
};