import Nav from "./Nav"

const Main = (props : any) =>{
    return(
        <>
            <Nav></Nav>
            <main>{props.children}</main>
        </>
    )
}
export default Main