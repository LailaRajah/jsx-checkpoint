import ProfilePhoto from './Component/Profile/ProfilePhoto';
import './style.css';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    <div className="container">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
