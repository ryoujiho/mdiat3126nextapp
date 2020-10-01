import React, {useState} from 'react';
import Menu from '../comps/Menu';

export default {
    title:'Example/Menu',
    component:Menu
};

export const BasicMenu = () => <Menu />

export const DefaultExpandedMenu = () => <Menu expand={true} />
export const ExpandwithAnotherButton = () => {
    const [menu, SetMenu] = useState(false);
    return <div>
    <Menu expand={menu} />
    <button onClick={()=>SetMenu(!menu)}>Expand Menu</button>
    </div>;
}