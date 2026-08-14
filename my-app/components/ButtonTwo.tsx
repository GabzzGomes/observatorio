"use client"
export default function ButtonTwo(props : {name : string, fetchData : () => void}){
    return(
        <button className="md:w-[60%] group flex items-center md:gap-2 p-2 text-[1.3rem] md:text-2xl text-white bg-[#F4B404] md:w-35 
            transition-all duration-300 
            hover:-translate-y-[2px] 
            active:scale-95"
            onClick={() => {
                console.log("clicou!");
                props.fetchData();}}
        >
            {props.name}
        </button>
    )
}