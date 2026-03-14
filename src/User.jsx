export default function ({user}){
    return (
        <div className="card">
            <h3>User name: {user.name}</h3>
            <h3>User Company name: {user.company.name}</h3>
            <h3>User city name: {user.address.city}</h3>
        </div>
    )
}