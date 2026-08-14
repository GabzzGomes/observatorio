export function ButtonFilter(props: { active: boolean; label: string; funcao: any }) {
  return (
    <div
      className={`w-full flex items-center ${
        props.active ? "bg-[#2C3034]" : "bg-white"
      } hover:bg-[#E3E2E2] px-3 py-2`}
    >
      <button
        onClick={props.funcao}
        className="
        w-full
        text-left
        text-lg
        md:text-2xl
        lg:text-3xl
        text-[#F4B404]
        break-words
        leading-tight
        "
      >
        {props.label}
      </button>
    </div>
  );
}