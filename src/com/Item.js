


const Item = (props) => {
    return (
        <div className="p-2 m-2 bg-red-500 text-center text-white">
            <h3 className="text-lg">{props.id}</h3>
        </div>
    )
}

export default Item;