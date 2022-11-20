import { useEffect, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faLightbulb, faMessage, faPenAlt, faPenRuler } from '@fortawesome/free-solid-svg-icons'


function MainScreen() {
    const [dataSet, setDataSet] = useState({});
    const apiUrl = " https://dev.deepthought.education/assets/uploads/files/others/project.json"
    const fetchData = async () => {
        const data = await fetch(apiUrl)
        const resp = await data.json()
        console.log(resp)
        setDataSet(resp);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='topnav' > <text style={{ paddingLeft: '10px' }}>Challenge of new project </text></div>
            <div className='body'>
                <p style={{ textAlign: 'center' }} > Demo Task</p>
                {dataSet?.tasks?.[0]?.assets?.map(each => {
                    if (each.asset_type === "input_asset") {
                        return (
                            <>
                                <div className='container2'>
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div className='container-body1'>
                                        <div className='card'>
                                            <hr />
                                            <div style={{ paddingLeft: '19px' }} >
                                                <i className="arrowUp"></i>&nbsp;
                                                <text> Thread A </text>
                                            </div><hr />
                                            <div style={{ display: 'flex', padding: '0px 10px 10px 10px' }} >
                                                <div className='input2' >
                                                    <text style={{ marginLeft: '10px' }} > Sub Thread 1 </text>
                                                    <input placeholder='Enter Text Here' />
                                                </div>
                                                <div className='input2' >
                                                    <text style={{ marginLeft: '10px' }} > Sub Interpretation 1 </text>
                                                    <input placeholder='Enter Text Here' />
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', padding: '35px 0px 0px 22px', justifyContent: 'space-around' }}>
                                                <div style={{ display: 'flex' }} ><FontAwesomeIcon icon={faLightbulb} />&nbsp;&nbsp;
                                                    <FontAwesomeIcon icon={faMessage} /></div>
                                                <div> <select id="select">
                                                    <option value="">select Category</option>
                                                    <option value=""></option>
                                                </select>&nbsp;&nbsp;&nbsp;
                                                    <select id="select">
                                                        <option value="">Select Process</option>
                                                        <option value=""></option>
                                                    </select></div>
                                            </div>
                                            <button className='button1' > + Sub thread </button>
                                            <div className='input4' >
                                                <text style={{ marginLeft: '10px' }} > Summary for Thread 1 </text>
                                                <input placeholder='Enter Text Here' />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '22px 22px 10px 22px' }}><text>
                                                Thread Credit  <FontAwesomeIcon icon={faPenAlt} /></text> <span>
                                                    <select id="select">
                                                        <option value="">Select Emotion</option>
                                                        <option value=""></option>
                                                    </select>
                                                </span>
                                            </div>
                                            <button className='button' > + Sub thread </button>
                                            <div><FontAwesomeIcon style={{ position: 'relative', left: '397px' }} icon={faFloppyDisk} /></div>
                                        </div>
                                        <i className="arrowDown"></i>
                                    </div>
                                </div>
                                <div className='container5' >
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div className='container-body1'>
                                        <div className='card' >
                                            <div style={{
                                                padding: '10px 10px 10px 20px',
                                                backgroundColor: 'rgba(0, 0, 0, 0.25)', marginBottom: '10px'
                                            }}>
                                                <i className="arrowUp"></i> &nbsp;
                                                <text> Introduction </text>
                                            </div>
                                            <div className='input3' >
                                                <text style={{ marginLeft: '10px' }} > name </text>
                                                <input placeholder='Enter Text Here' />
                                            </div>
                                            <hr />
                                            <div style={{ paddingLeft: '19px' }} >
                                                <i className="arrowUp"></i>&nbsp;
                                                <text> Thread A </text>
                                            </div><hr />
                                            <div className='input3' >
                                                <text style={{ marginLeft: '10px' }} > name </text>
                                                <input placeholder='Enter Text Here' />
                                            </div>
                                            <button className='button1' > + Example </button>
                                            <div className='input3' >
                                                <text style={{ marginLeft: '10px' }} > name </text>
                                                <input placeholder='Enter Text Here' />
                                            </div>
                                            <button className='button' > + New Thread </button>
                                            <div style={{
                                                padding: '10px 10px 10px 20px',
                                                backgroundColor: 'rgba(0, 0, 0, 0.25)', marginBottom: '10px'
                                            }}>
                                                <i className="arrowUp"></i> &nbsp;
                                                <text> Introduction </text>
                                            </div>
                                            <div className='input3' >
                                                <text style={{ marginLeft: '10px' }} > name </text>
                                                <input placeholder='Enter Text Here' />
                                            </div>
                                            <div><FontAwesomeIcon style={{ position: "relative", left: '397px' }} icon={faFloppyDisk} /></div>

                                        </div>
                                        <i className="arrowDown"></i>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    else {
                        if (each.display_asset_docs) {
                            return (
                                <div className='container4'>
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div className='container-body'>
                                        <iframe src={each.display_asset_docs} width="100%" height="355px">
                                        </iframe>
                                    </div>
                                    <i className="arrowDown"></i>
                                </div>
                            )
                        }
                        else if (each.display_asset_image) {
                            return (
                                <div className='container3' >
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div style={{ marginTop: '39px' }}>
                                        <img src={each.display_asset_image} width="460px" height="220" />
                                    </div>
                                </div>
                            )
                        }
                        else if (each.display_asset_video) {
                            return (
                                <div className='container7'>
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div className='container-video'>
                                        <iframe width="458px" height="220"
                                            src={each.display_asset_video}>
                                        </iframe>
                                    </div>
                                    <i className="arrowDown"></i>
                                </div>
                            )

                        }
                        else if (each.asset_description) {
                            return (
                                <div className='container1' >
                                    <div className='containerTopNav' > {each.asset_title} </div>
                                    <div className='container-body'>
                                        {each.asset_description}
                                    </div>
                                    <i className="arrowDown"></i>
                                </div>
                            )

                        }

                    }
                })}

                <div className='container6' >
                    <div className='containerTopNav' > task heading 6 </div>
                    <div className='container-body'>
                        <audio controls>
                            <source src="horse.ogg" type="audio/ogg" />
                            <source src="horse.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <i className="arrowDown"></i>
                </div>
            </div>
        </div>
    );
}
export default MainScreen;