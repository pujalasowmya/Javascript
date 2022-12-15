let employees=[{id:101, name:"Rahul", sal:4500}, {id:102, name:"Sonia", sal:5500}]
let createEmployee=(emp)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            let flag=true;
            employees.push(emp)
            flag ? resolve("Data Inserted Successfully"):reject("Failure")
        }, [4000]);
        })
    };
    let getEmployees=()=> {
        setTimeout(()=> {
            let rows=" "
            for (emp of employees) {
                rows=rows + `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.sal}</td>
                <tr>`
            }
            document.getElementById('abc').innerHTML=rows
        },[1000])
    }
    createEmployee({id:103, name:"Priya", sal: 75000})
    .then((msg) => {
        console.log(msg)
        getEmployees()

    })
    .catch((err) => {
        console.log(err)
    })