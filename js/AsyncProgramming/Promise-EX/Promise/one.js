let goToMovies=(success, failure) => {
    let bal=100
    bal > 500 ? success("Go To Kantara !"): failure("Go To PG! Write Exam")
}
goToMovies((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)

})
