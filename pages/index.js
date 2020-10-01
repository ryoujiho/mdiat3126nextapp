import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';


export default function Home() {
  const [contentColor, setContentColor ] = useState(false);

  const HandleMenu = (str) => {
     //capture what ahppend in the menu and change the page state based on it
    if(str === "bg") {
      setContentColor("#DCA877");
      }
    }

  return <div className="home">

      <div className="contents">
        <Content bgcolor={contentColor} >
          <h1>Welcome to my app</h1>
          <div>Hi</div>
        </Content>
      </div>

    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>

  </div>

}
