import { useLocation } from 'react-router-dom'


export default function CategoriesPage() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>CategoriesPage</h1>
        </div> 
    )
}