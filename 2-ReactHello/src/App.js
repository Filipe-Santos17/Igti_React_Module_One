import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Input from "./components/Input";
import Date from "./components/Date";
import Timer from "./components/Timer";
import CheckBox from "./components/checkBox";
import OnlineOff from "./components/onlineOff";
import {getAgeFrom} from "./helpers/dateHelper";
import {getNewId} from "./services/idService";
import { useEffect } from "react";

function App() {

  const [nome, setNome] = useState('Filipe')
  const [date, setDate] = useState("2002-02-03")
  const [time, showTimer] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {//A medida que se altera ele sincroniza = efeito colateral
    document.title = nome
  }, [nome])//1º função, 2º deps = dependency list = array de dependências
  //[] = array vazio = executa apenas uma vez

  useEffect(() => {
    function toogleOnline(){
      setIsOnline(true)
    }
    
    function toogleOffline(){
      setIsOnline(false)
    }

    //Monitora se está online
    window.addEventListener('online',toogleOnline)
    //Monitora se está off
    window.addEventListener('offline',toogleOffline)
    
    return () => {
      window.removeEventListener('online', toogleOnline)
      window.removeEventListener('offline', toogleOffline)
    }
  },[])

  function handleNameChange({currentTarget}){
    const newNome = currentTarget.value;
    setNome(newNome)
  }

  function handleDateChange({currentTarget}){
    const newDate = currentTarget.value;
    setDate(newDate)
  }

  function toogleShowTimer(){
    showTimer(time => !time)
  }

  return (
    <>
      <Header size="large">Hello React</Header>
      <Main>
        <OnlineOff isOnline = {isOnline} />

        {time && (
          <div className="text-right p-1">
            <Timer/>
          </div>
        )}
        
        <CheckBox
          inputId = {getNewId()}
          labelDescription = "Descrição do CheckBox: "
          typeInput="checkbox"
          inputValue = {time}
          inputHandle = {toogleShowTimer}
        />
        <Input
          inputId = {getNewId()}
          labelDescription = "Digite seu nome: "
          typeInput="text"
          inputValue = {nome}
          inputHandle = {handleNameChange}
          autoFocus
        />
        <Date
          inputId = {getNewId()}
          labelDescription = "Digite sua data de aniversario: "
          typeInput="date"
          inputValue = {date}
          inputHandle = {handleDateChange}
        />
        <p>O seu nome é {nome}, com {nome.length} caracteres e você possui {getAgeFrom(date)} anos</p>
      </Main>
    </>
  );
}

export default App;
