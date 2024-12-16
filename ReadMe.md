Use  GSAP with react: 

---npm i gsap 
---npm i @gsap/react

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

useGSAP(() => {
    gsap.to(".box", {
        //write your animation here
    })
})

return (
    <>
       <div className="box"></div>
    </>
)

}

---Instead of doing this, use useRef()
---But it is useful only for one element.

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

const gsapRef = useRef();

useGSAP(() => {
    gsap.to(gsapRef.current, {
        //write your animation here
    })
})

return (
    <>
       <div ref = {gsapRef}></div>
    </>
)

}

---In multiple cases you must prefer the above method

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

const gsapRef = useRef();

useGSAP(() => {
    gsap.to(gsapRef.current, {
        //write your animation here
    })
})

return (
    <>
        <div className="container">
            <div ref={gsapref} className="box"></div>
            <div className="circle"></div>
        </div>

        <div className="container">
            <div className="box"></div>
            <div className="circle"></div>
        </div>
    </>
)

}

---Scope in reactjs

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

useGSAP(() => {
    gsap.from(".box", {
        //write your animation here
    })
}, {scope: ".container"})

return (
    <>
        <div className="container">
            <div className="box"></div>
            <div className="circle"></div>
        </div>

        <div className="kuchh">
            <div className="box"></div>
            <div className="circle"></div>
        </div>
    </>
)

}

---The next thing you can do

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

const container = useRef();

useGSAP(() => {
    gsap.to(".box", {
        //write your animation here
    })
}, {scope:container})

return (
    <>
        <div ref={container} className="container">
            <div className="box"></div>
            <div className="circle"></div>
        </div>

        <div className="container">
            <div className="box"></div>
            <div className="circle"></div>
        </div>
    </>
)

}


---contextSafe kill the animation after completion of the process, helps in memory management.

const { contextSafe } = useGSAP();

const rotateBox = contextSafe(function() {
    gsap.to(boxRef.current, {
        //write animation code here
    })
})
