
export function ButtonFilterTwo( props : {active : boolean,label : string, funcao : any}){
    return(
        <div className={`w-full flex justify-center items-center ${props.active ? "bg-[#2C3034]":"bg-white"} hover:bg-[#E3E2E2] p-1`}>
            <button className="w-[35%] text-start h-7 text-2xl  text-[#F4B404] " onClick={() => props.funcao()}>
                {props.label}
            </button>
        </div>
    );
}