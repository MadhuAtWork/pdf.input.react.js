import { useRef ,useState} from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Pdf () {
    const inputRef = useRef(null);
    const userN = useRef();
    const userE = useRef();
    const userM = useRef();
    const userU = useRef();
    const userA = useRef();
    const userP = useRef();
    const userC = useRef();
    const userX = useRef();
    const userS = useRef();
    const[data,setdata]=useState(false);


    const onhnadlesubmit =()=>{
        const a= userN.current.value;
        const b= userE.current.value;
        const c= userM.current.value;
        const d= userU.current.value;
        const e= userA.current.value;
        const f= userP.current.value;
        const g= userC.current.value;
        const h= userX.current.value;
        const i= userS.current.value;

        if(a=="" || a== null || a== undefined){
            alert("enter valid details")
        }else if(b==""|| b== null || b==undefined ){
            alert("enter valid details")
        }else if(c==""|| c== null || c==undefined){
            alert("enter valid details")
        }else if(d==""|| d== null || d==undefined){
            alert("enter valid details")
        }else if(e==""|| e== null || e==undefined){
            alert("enter valid details")
        }else if(f==""|| f== null || f==undefined){
            alert("enter valid details")
        }else if(g==""|| g== null || g==undefined){
            alert("enter valid details")
        }else if(h==""|| h== null || h==undefined){
            alert("enter valid details")
        }else if(i==""|| i== null || i==undefined){
            alert("enter valid details")
        }else
        {
            setdata(true)
        }
    }

    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };
    return (
        <>
            <div className="container">

                <div id="divToPrint" ref={inputRef} className="main">
                <div >
                        <div> <h2>PERSONAL DETAILS</h2></div>
                        <div className="menu">
                            <input type="text" placeholder="fullname" ref={userN}></input>
                        </div>
                        <div className="menu">
                            <input type="email" placeholder="email" ref={userE}></input>
                        </div>
                        <div className="menu">
                            <input type="number" placeholder="mobile number" ref={userM}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                             <h2>EDUCATION DETAILS</h2>
                             </div>
                        <div className="menu">
                            <input type="text" placeholder="university name" ref={userU}></input>
                        </div>
                        <div className="menu">
                            <input type="text" placeholder="adress" ref={userA}></input>
                        </div>
                        <div className="menu">
                            <input type="text" placeholder="percentage" ref={userP}></input>
                        </div>
                    </div>
                    <div>
                        <div> <h2>PROFESSIONAL DETAILS</h2></div>
                        <div className="menu">
                            <input type="text" placeholder="company name" ref={userC}></input>
                        </div>
                        <div className="menu">
                            <input type="text" placeholder="experince" ref={userX}></input>
                        </div>
                        <div className="menu">
                            <input type="text" placeholder="skills" ref={userS}></input>
                        </div>
                    </div>
                    <div className="btnsubmit">
                        <button  onClick={onhnadlesubmit}>submit</button>
                    </div>
                </div>
                {
                        data ?
                    
                <div className="btndownload">
                    <button onClick={printDocument}>Download</button>
                </div>:""
}
            </div>
        </>
    );
};
export default Pdf;