import { useState } from 'react'
import Header from '../components/header'
import Button from '../components/Button'
import DisplayImage from '../components/DisplayImage'
import dogHatImgs from './assets/dog-hat.js'
import './App.css'

function App() {
  const [value,setValue] = useState(false)
const [image,setImage] = useState(dogHatImgs[1q])

  return (
    <>
    <Header/>
    <Button 
    isOn={value}
    handleToggle={()=> {
      setValue(!value)
      if(value){
        setImage(dogHatImgs[1])
      } else{
        setImage(dogHatImgs[0])
      }
    }}
    />
    <DisplayImage
    currentImage = {image}
    />
    </>
    )
}

export default App
