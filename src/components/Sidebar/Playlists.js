
const arr = Array.from(Array(40).keys())

function PlayLists() {
    return (
        <nav className="mx-6 mt-4 py-2 flex-auto border-t border-white border-opacity-20  overflow-auto">
             <ul>
                 {arr.map((item,index) => {
                     return(
                         <li  key={item}>

                        <a href="#"   className="text-s text-link hover:text-white flex h-8 items-center">
                        22.Çalma Listem
                    </a>
                    </li>

                     )
                 })}
                 
                     
             </ul>
        </nav>
    )
}

export default PlayLists