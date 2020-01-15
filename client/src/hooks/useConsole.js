import {useState,useEffect} from 'react';
//TODO create useConsole

export const  useConsole = command => {
  const [consoleCommand, setConsoleCommand] = useState()
  useEffect(() => {

    return () => {
      cleanup
    };
  }, [input])
}