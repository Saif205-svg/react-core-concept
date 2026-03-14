export default function Freind ({freind}) {
    // console.log(freind);
    return(
        <div className="card">
            <h4>Name: {freind.name}</h4>
            <h4>Email: {freind.email}</h4>
            <h4>Role: {freind.role}</h4>
            <h4>Password: {freind.password}</h4>
        </div>
    )
}