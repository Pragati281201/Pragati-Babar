import { useState } from "react"

const Product = () =>{
    const [input, setinput] = useState('')
    const [product, setproduct] = useState([])

    const addproduct = () =>{
        if(input.trim === ''){
            alert("Add Valid Data !!!")
        }else{
            setproduct([...Product,input])
            setinput('')
        }
    }

    const deleteProduct = (index) =>{
        const newproduct = [...Product]
        newproduct.splice(index,1)
        setproduct(newproduct)
    }
   
    const editProduct = (index) =>{
        const pro = product[index]
        setinput(pro)
        deleteProduct(index)
    }
    return(
        <div className="bg-secondary w-50 mx-auto p-5 rounded-4 mt-5">
            <h1>Product Inventory Management System</h1>
            <input
            type="text"
            className="form-control w-75 mx-auto mb-3"
            value={input}
            onChange={(event)=>setinput(event.target.value)}
            />
            <button className="btn btn-success" onClick={addproduct}>Add Data</button>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Product Name</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((product,index) => {
                            return(
                    <tr key={product}>
                                    <td>{index + 1} </td>
                                    <td>{product}</td>
                                    <td>
                                    <button className="btn btn-warning me-2" onClick={() => editProduct(product)}>EDIT</button> 
                                    <button className="btn btn-danger" onClick={(index) => deleteProduct(product)}>DELETE</button>
                        
                                    </td>
                                </tr>
                                   
     )
     } )
                    }   
                </tbody>
            </table>
        </div>
    )
}
export default Product