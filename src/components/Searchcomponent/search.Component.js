import "./search.Component.css";
export const Searchbox = ({placeholder,handleChange}) =>{
        return(
            <div>
                <input type="search" placeholder={placeholder} onChange={handleChange}/>
                 
            </div>
           
            
        );
        
};

