export default function Header(props){
    return(
      <header className="flex p-4 bg-green-400 justify-items-center text-black-500 ">
        <h1 className="text-2xl boarder boarder-color-black">{props.title}</h1>
      </header>
    )
  }