var Service = {};
var customers = [
    {
        id: 1, name:"Swathi", email:"swathi@gmail.com", phone:9898989898
    },
    {
        id: 1, name:"Sudha", email:"sudha@gmail.com", phone:9898989898
    },
    {
        id: 1, name:"Divya", email:"divya@gmail.com", phone:9898989898
    }
]

Service.getCustomers=function(){
    return customers;
}
export default Service;