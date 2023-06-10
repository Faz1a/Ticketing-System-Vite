

function Cards ({title,  image, description}){

    return(
    <div className="w-96 h-fit bg-gray-300 hover:scale-110 hover: duration-500 cursor-pointer  ">
        <div>
            <figure>
                <img className="h-96" src={image} alt = "pda logo" />
            </figure>
        </div>
        <div>
            <div>
                <p className="text-xl text-center text-gray-800">{title}</p>
            </div>
            <div className="content text-center text-gray-500">
                {description}
            </div>
        </div>
    </div>
    );
}

export default Cards;