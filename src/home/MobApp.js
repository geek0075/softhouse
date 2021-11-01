import './MobApp.css';
import android from './img/android01.jpg';
import ios from './img/iphone01.jpg';

function MobApp() {
    return (
        <>
            <div className="Home_MobApp_container">
                <div style={{ textAlign : "center" }}>
                    <h1 className="Home_MobApp_title">Mobile Application Development</h1>
                </div>
                <div className="Home_MobApp_row">
                    <div className="Home_MobApp_column">
                        <div className="Home_MobApp_container_inner">
                            <img src={android} alt="Android" style={{ width : "100%" }} />
                            <div class="content">
                                <h1>Android</h1>
                                <p>We offer Android application development in Java, Kotlin and Flutter.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Home_MobApp_column">
                        <div className="Home_MobApp_container_inner">
                            <img src={ios} alt="iOS" style={{ width : "100%" }} />
                            <div class="content">
                                <h1>iOS</h1>
                                <p>We offer iOS application development in Obj-C, Swift and Flutter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default MobApp;