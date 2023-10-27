
class Hello extends React.Component{
    render(){
        const a=<p>THis is for the verification of the class components</p>
        return a;
    }
}


function Firstclass(props){
    let words="In Life"
    return(
        <div>
            <h2>{words} Everything happens for the best</h2>
            <h4>{<Hello/>}</h4>
            <h3>This text is to {props.data}</h3>
        </div>
    )
}


const dom=document.querySelector('#root');
const app=ReactDOM.createRoot(dom);
app.render(<Firstclass  data={"to ensure the working of the props"}/>);