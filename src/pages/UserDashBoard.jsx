//React...
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

//Components...
import UserData from "../components/UserProfile/userData"

//Firebase...
import {auth} from "../firebase"
import {signOut, updateProfile} from "firebase/auth"
import {useAuthState} from "react-firebase-hooks/auth"

//React-icons...
import {GiSettingsKnobs} from "react-icons/gi"

//Styles...
import "../styles/Dashboard.scss"


const UserDashBoard = ({data}) => {
    const [user] = useAuthState(auth)
    const [displayName, setDisplayName] = useState("")

    const defaultAvatar = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"

    useEffect(() => {
        if (user && user.displayName) {
          setDisplayName(user.displayName);
        }
      }, [user]);

    //State that desides if the user input form should display...
    const [showSettings, setShowSettings] = useState(false)
    const navigate = useNavigate()

    //User input state...
    const [userName, setUserName] = useState("")
    const [photoURL, setPhotoURL] = useState("")


    const signOutUser = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
   

    const submitForm = async () => {
        if(!userName && !photoURL){ 
            return;
        }
        try {
            await updateProfile(auth.currentUser, {
                displayName: userName ? userName : displayName,
                photoURL: photoURL ? photoURL : user?.photoURL
            })
            setDisplayName(userName || user.displayName)
            setPhotoURL(photoURL || user?.photoURL)
            setShowSettings(false)
        } catch (error) {
            console.log("you fudged up")
        }
    }

    return (
        <section className="dashboard-page">
            <div className="user-profile-block">
                <img className="profile-banner" src="https://png.pngtree.com/thumb_back/fh260/background/20201015/pngtree-white-polygonal-mosaic-triangular-background-abstract-light-gray-background-low-poly-image_418752.jpg" alt="user profile banner picture"
                />
                <img className="profile-picture" src={user?.photoURL || defaultAvatar} alt="user profile picture"
                />
                <div className="user-name-info">
                    <h2>{displayName || "Anonymous"}</h2>
                    <button onClick={signOutUser}>Sign Out</button>
                </div>
            </div>
            <aside className="latest-cart-pick">
                <div className="profile-cart-wrap">
                    <h2>Recent Cart:</h2>
                    {!data.length && <h3 className="empty-sign">Much empty...</h3>}
                    {data.length > 0 &&
                        <div className="cart-picks">
                            <img src={data[data.length - 1].image} alt="latest cart item image"/>
                            <p>{data[data.length - 1].description.substring(0, 50)}</p>
                            <span>${data[data.length - 1].price}</span>
                        </div>
                    }
                    {data.length > 1 &&
                        <div className="cart-picks">
                            <img src={data[data.length - 2].image} alt="latest cart item image"/>
                            <p>{data[data.length - 2].description.substring(0, 50)}</p>
                            <span>${data[data.length - 1].price}</span>
                        </div>
                    }
                </div>
                <div className="user-settings">
                    <p onClick={() => setShowSettings(true)}><GiSettingsKnobs/>User Profile</p>
                </div>
            </aside>
            {showSettings && 
                <UserData 
                    setShowSettings={setShowSettings}
                    setUserName={setUserName}
                    setPhotoURL={setPhotoURL}
                    submitForm={submitForm}
                />
            }
        </section>
    )
}

export default UserDashBoard