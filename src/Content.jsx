import React, { useContext} from 'react';
import { Route , Routes} from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import WithAlert2 from './HOC/WithAlert2';
import AddPost from './posts/AddPost2';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import AddUser from './users/AddUser';
import Users from './users/Users';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    const renderUser = (Confirm , Alert)=> <Users Confirm={Confirm} Alert={Alert}/>

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`} 
            onClick={handleShowMenu}
            ></i>
                <Routes>
                    {/* <Route path="/" element={<Navigate replace to="/gallery"/>} /> */}
                    <Route path="/user" element={
                        <WithAlert2>
                            {renderUser}
                        </WithAlert2>
                    } />
                    <Route path="/user/add" element={<AddUser/>}>
                        <Route path=":userId"/>
                    </Route>


                    <Route path="/post" element={<Posts/>} />
                    <Route path="/post/add" element={<AddPost/>}>
                        <Route path=":postId"/>
                    </Route>

                    
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/todo" element={<Todos/>} />
                    <Route path="*" element={
                        <WithAlert2>
                            {renderUser}
                        </WithAlert2>
                    } />
                </Routes>
            
        </div>
    )

}

export default Content;