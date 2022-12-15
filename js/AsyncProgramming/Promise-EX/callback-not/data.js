let employees=[{id:101, name:"Rahul", sal:45000},{id:101, name:"Sonia", sal:65000}]
let createEmployee=(emp)=> {
    setTimeout(()=>{
        employees.push(emp)
    },[45000])
}
let getEmployees=()=> {
    setInterval(()=> {
        let rows=""
        for(emp of employees) {
            rows=rows+ `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            <tr>`
        }
        document.getElementById('abc').innerHTML=rows
    }, [1000])
}
createEmployee({id:103, name:"Priyanka", sal:75000})
getEmployees()