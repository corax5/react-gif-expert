import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifexpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // categories.push(newCategory)
        setcategories([newCategory, ...categories]);
        // setcategories(cat => [...cat, 'Valorant'])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                // setcategories={setcategories} 
                onNewCategory={event => onAddCategory(event)}
            />


            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }







        </>
    )
}

export default GifexpertApp
