import { useRef, useState } from "react";
import { Category } from "../models/Category";

// rfce
function EditProduct() {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  // function editProduct() {}

  const editProduct = () => {}

  return (
    <div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <label>Category</label> <br />
      <select ref={categoryRef}>
        {categories.map(category => <option value={category.id}>{category.name}</option>)}
      </select>
      <br />
      <button onClick={() => editProduct()}>Edit product</button>
    </div>
  )
}

export default EditProduct