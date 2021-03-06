import React, { useState } from "react";
import Start from "./components/Start";
import Mail from "./components/Mail";
import Welcom from "./components/Welcom";
import MissionCall from "./components/MissionCall";
import DefinitionNeed from "./components/DefinitionNeed"
import SelectionSaleProdukt from "./components/SelectionSaleProdukt"
import UseMiting from "./components/UseMiting"
import UseMitingPickUp from "./components/UseMitingPickUp"
import UseMitingPickUpOffline from "./components/UseMitingPickUpOffline"
import UseMitingPickUpOfflineOurOffice from "./components/UseMitingPickUpOfflineOurOffice"
import UseMitingPickUpOffline–°lientOffice from "./components/UseMitingPickUpOffline–°lientOffice"
import UseMitingPickUpOfflineNoMatterWhere from "./components/UseMitingPickUpOfflineNoMatterWhere"
import UseMitingPickUpOnline from "./components/UseMitingPickUpOnline"
import UseMitingPickUpNoMatterWhere from "./components/UseMitingPickUpNoMatterWhere"
import UseMitingProductPresentation from "./components/UseMitingProductPresentation"
import UseMitingProductPresentationOffline from "./components/UseMitingProductPresentationOffline"
import UseMitingProductPresentationOfflineOurOffice from "./components/UseMitingProductPresentationOfflineOurOffice"
import UseMitingProductPresentationOfflineClientOffice from "./components/UseMitingProductPresentationOfflineClientOffice"
import UseMitingProductPresentationOfflineNoMatterWhere from "./components/UseMitingProductPresentationOfflineNoMatterWhere"
import UseMitingProductPresentationOnline from "./components/UseMitingProductPresentationOnline"
import UseMitingProductPresentationNoMatterWhere from "./components/UseMitingProductPresentationNoMatterWhere"
import SendingCommercialOffer from "./components/SendingCommercialOffer"
import Finish from "./components/Finish"
import Bye from "./components/Bye";

import './styles/App.css';

export const dataScript = {};

function App() {
  let [state, setState] = useState('start');
  let [history, setHistory] = useState(['start'])
  let [further, setFurther] = useState('–Ē–į–Ľ–Ķ–Ķ')

  function logic() {
    switch (state) {
      case 'start':
        pushData()
        setState(state = 'mail');
        pushHistory(state)
        break;
      case 'mail':
        pushData()
        setState(state = 'welcom');
        pushHistory(state)
        break;
      case 'welcom':
        pushData()
        setState(state = 'missionCall');
        pushHistory(state)
        break;
      case 'missionCall':
        pushData()
        if (dataScript.mission === '–í—č—Ź–≤–Ľ–Ķ–Ĺ–ł–Ķ –Ņ–ĺ—ā—Ä–Ķ–Ī–Ĺ–ĺ—Ā—ā–Ķ–Ļ (–Ņ–Ķ—Ä–Ķ–ī –∑–≤–ĺ–Ĺ–ļ–ĺ–ľ —Ā –Ņ—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł–Ķ–Ļ –Ņ—Ä–ĺ–ī—É–ļ—ā–į)') {
          setState(state = 'definitionNeed');
          dataScript.sample = state
        } else if (dataScript.mission === '–ü–ĺ–ī–Ī–ĺ—Ä –ł –Ņ—Ä–ĺ–ī–į–∂–į –Ņ—Ä–ĺ–ī—É–ļ—ā–į (–∑–ī–Ķ—Ā—Ć –ł —Ā–Ķ–Ļ—á–į—Ā)') {
          setState(state = 'selectionSaleProdukt');
          dataScript.sample = state
        } else if (dataScript.mission === '–Ě–į–∑–Ĺ–į—á–Ķ–Ĺ–ł–Ķ –≤—Ā—ā—Ä–Ķ—á–ł (–∑–Ĺ–į–ļ–ĺ–ľ—Ā—ā–≤–ĺ –ł–Ľ–ł –Ņ—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł—Ź –Ņ—Ä–ĺ–ī—É–ļ—ā–į)') {
          setState(state = 'useMiting');
        } else if (dataScript.mission === '–ě—ā–Ņ—Ä–į–≤–ļ–į –ļ–ĺ–ľ–ľ–Ķ—Ä—á–Ķ—Ā–ļ–ĺ–≥–ĺ –Ņ—Ä–Ķ–ī–Ľ–ĺ–∂–Ķ–Ĺ–ł—Ź (–∑–ī–Ķ—Ā—Ć –ł —Ā–Ķ–Ļ—á–į—Ā)') {
          setState(state = 'sendingCommercialOffer');
          dataScript.sample = state
        }
        pushHistory(state)
        break;

      case 'useMiting':
        pushData()
        if (dataScript.aimMeeteng === '–ó–Ĺ–į–ļ–ĺ–ľ—Ā—ā–≤–ĺ') {
          setState(state = 'useMitingPickUp');
        } else if (dataScript.aimMeeteng === '–ü—Ä–Ķ–∑–Ķ–Ĺ—ā–į—Ü–ł—Ź –Ņ—Ä–ĺ–ī—É–ļ—ā–į') {
          setState(state = 'useMitingProductPresentation');
        }
        pushHistory(state)
        break;

      case 'useMitingProductPresentation':
        pushData()
        if (dataScript.meetingFormat === 'Offline') {
          setState(state = 'useMitingProductPresentationOffline');
        } else if (dataScript.meetingFormat === 'Online') {
          setState(state = 'useMitingProductPresentationOnline')
        } else if (dataScript.meetingFormat === '–§–ĺ—Ä–ľ–į—ā –≤—Ā—ā—Ä–Ķ—á–ł –Ĺ–Ķ –ł–ľ–Ķ–Ķ—ā –∑–Ĺ–į—á–Ķ–Ĺ–ł—Ź') {
          setState(state = 'useMitingProductPresentationNoMatterWhere')
        }
        pushHistory(state)
        break;

      case 'useMitingProductPresentationOffline':
        pushData()
        if (dataScript.meetingOption === '–Ě–į—ą –ĺ—Ą–ł—Ā') {
          setState(state = 'useMitingProductPresentationOfflineOurOffice');
          dataScript.sample = state
        } else if (dataScript.meetingOption === '–ě—Ą–ł—Ā –ļ–Ľ–ł–Ķ–Ĺ—ā–į') {
          setState(state = 'useMitingProductPresentationOfflineClientOffice')
          dataScript.sample = state
        } else if (dataScript.meetingOption === '–Ě–Ķ –≤–į–∂–Ĺ–ĺ –≥–ī–Ķ –Ņ—Ä–ĺ–Ļ–ī—Ď—ā –≤—Ā—ā—Ä–Ķ—á–į') {
          setState(state = 'useMitingProductPresentationOfflineNoMatterWhere')
          dataScript.sample = state
        }
        pushHistory(state)
        break;

      case 'useMitingPickUp':
        pushData()
        if (dataScript.meetingFormat === 'Offline') {
          setState(state = 'useMitingPickUpOffline');
        } else if (dataScript.meetingFormat === 'Online') {
          setState(state = 'useMitingPickUpOnline');
        } else if (dataScript.meetingFormat === '–§–ĺ—Ä–ľ–į—ā –≤—Ā—ā—Ä–Ķ—á–ł –Ĺ–Ķ –ł–ľ–Ķ–Ķ—ā –∑–Ĺ–į—á–Ķ–Ĺ–ł—Ź') {
          setState(state = 'useMitingPickUpNoMatterWhere');
        }
        pushHistory(state)
        break;

      case 'useMitingPickUpOffline':
        pushData()
        if (dataScript.meetingOption === '–Ě–į—ą –ĺ—Ą–ł—Ā') {
          setState(state = 'useMitingPickUpOfflineOurOffice');
          dataScript.sample = state
        } else if (dataScript.meetingOption === '–ě—Ą–ł—Ā –ļ–Ľ–ł–Ķ–Ĺ—ā–į') {
          setState(state = 'useMitingPickUpOffline–°lientOffice');
          dataScript.sample = state
        } else if (dataScript.meetingOption === '–Ě–Ķ –≤–į–∂–Ĺ–ĺ –≥–ī–Ķ –Ņ—Ä–ĺ–Ļ–ī—Ď—ā –≤—Ā—ā—Ä–Ķ—á–į') {
          setState(state = 'useMitingPickUpOfflineNoMatterWhere');
          dataScript.sample = state
        }
        pushHistory(state)
        break;

      case 'finish':
        pushData()
        setState(state = 'bye')
        setState('bye')
        delBtn()
        sendDataScript()
        break;

      default:
        pushData()
        setState(state = 'finish')
        setFurther(further = '–ó–į–≤–Ķ—Ä—ą–ł—ā—Ć')
        pushHistory()
    }
    // console.log(state)
    // console.log(history);
    // console.log(dataScript);

  }

  function createElements() {
    switch (state) {
      case 'start':
        return <Start />;
      case 'mail':
        return <Mail />;
      case 'welcom':
        return <Welcom />;
      case 'missionCall':
        return <MissionCall />;
      case 'definitionNeed':
        return <DefinitionNeed />;
      case 'selectionSaleProdukt':
        return <SelectionSaleProdukt />;
      case 'useMiting':
        return <UseMiting />;
      case 'useMitingPickUp':
        return <UseMitingPickUp />;
      case 'useMitingPickUpOffline':
        return <UseMitingPickUpOffline />;
      case 'useMitingPickUpOfflineOurOffice':
        return <UseMitingPickUpOfflineOurOffice />;
      case 'useMitingPickUpOffline–°lientOffice':
        return <UseMitingPickUpOffline–°lientOffice />;
      case 'useMitingPickUpOfflineNoMatterWhere':
        return <UseMitingPickUpOfflineNoMatterWhere />;
      case 'useMitingPickUpOnline':
        return <UseMitingPickUpOnline />;
      case 'useMitingPickUpNoMatterWhere':
        return <UseMitingPickUpNoMatterWhere />;
      case 'useMitingProductPresentation':
        return <UseMitingProductPresentation />;
      case 'useMitingProductPresentationOffline':
        return <UseMitingProductPresentationOffline />;
      case 'useMitingProductPresentationOfflineOurOffice':
        return <UseMitingProductPresentationOfflineOurOffice />;
      case 'useMitingProductPresentationOfflineClientOffice':
        return <UseMitingProductPresentationOfflineClientOffice />;
      case 'useMitingProductPresentationOfflineNoMatterWhere':
        return <UseMitingProductPresentationOfflineNoMatterWhere />;
      case 'useMitingProductPresentationOnline':
        return <UseMitingProductPresentationOnline />;
      case 'useMitingProductPresentationNoMatterWhere':
        return <UseMitingProductPresentationNoMatterWhere />;
      case 'sendingCommercialOffer':
        return <SendingCommercialOffer />;
      case 'finish':
        return <Finish />;
      case 'bye':
        return <Bye mail = {dataScript.mail}/>;
      default:
        console.log('eror')
    }
  }

  function pushHistory(name) {
    let copy = Object.assign([], history);
    copy.push(name)
    setHistory(copy)
  }



  function back() {
    let copy = Object.assign([], history);
    if (copy[copy.length - 1] !== 'finish') {
      setFurther(further = '–Ē–į–Ľ–Ķ–Ķ');
    }
    setState(state = copy[copy.length - 2]);
    copy.pop()
    setHistory(copy)
  }

  function pushData() {
    let inputArr = document.querySelectorAll('input')
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].type === 'text') {
        dataScript[inputArr[i].name] = inputArr[i].value
      } else if (inputArr[i].checked) {
        dataScript[inputArr[i].name] = inputArr[i].value
      }

    }
    // console.log(dataScript);
  }

  function delBtn() {
    let btn = document.querySelector(".btn")
    while (btn.firstChild) {
      btn.removeChild(btn.firstChild);
    }
  }

  function sendDataScript() {
    let response = fetch('dataScript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(dataScript)
    });
    
    
  }

  return (
    <div>
      {createElements()}
      <div className="btn">
        <button onClick={back}>–Ě–į–∑–į–ī</button>
        <button onClick={logic}>{further}</button>
      </div>
    </div>
  );
}

export default App;
