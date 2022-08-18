import AddUserForm from "../addUserForm";


const Home = ({loggedIn, user, data}) => {

    return (
       <>
       {loggedIn? (
       <div>
             <h1>Welcome, </h1>
           <AddUserForm data={data}/>
       </div>
       ): (
           <h1>failed</h1>
       )}
       </>
    )
}

export default Home;
