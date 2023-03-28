//React...
import { useAuthState } from "react-firebase-hooks/auth"

//Firebase...
import {auth} from "../../firebase"

//Styles...
import "../../styles/Dashboard.scss"

const UserData = ({setShowSettings, setUserName, setPhotoURL, submitForm}) => {

    const [user] = useAuthState(auth)


    return (
        <div className="settings-backdrop">
            <div className="settings-wrap">
                <h2>User Info:</h2>
                <input 
                    onChange={(e) => setUserName(e.target.value)}
                    maxLength="15"            
                    placeholder={!user.displayName ? user?.email : user.displayName}
                >    
                </input>
                <input 
                    onChange={(e) => setPhotoURL(e.target.value)} 
                    placeholder="Enter photo URL"
                >
                </input>
                <div className="submit-nav">
                    <button onClick={() => setShowSettings(false)}>Exit</button>
                    <button onClick={submitForm}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default UserData