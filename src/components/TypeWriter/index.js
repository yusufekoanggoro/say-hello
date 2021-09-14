import React from "react"
import * as Styles from "./style"
import Typewriter from 'typewriter-effect';
// import Typist from 'react-typist'
import moment from 'moment-timezone';
moment.tz('Asia/Jakarta')

const goodnight = (name, user) => {
    const n = name ? name: 'Stranger';
    const text1 = `Selamat malam kayang...`;
    const text2 = 'sayang...'
    const text3 = '<br><br>ehh salah :D'
    const text4 = `${n} maksudnya hehe`;
    const text5 = `<br><br>Selamat tidur, kamu yang selalu`;
    const text6 = ` ada dalam tiap doaku.`;
    const text7 = '<br><br>Semoga kamu selalu bahagia.'
    const hour = moment().format("hh")

    const data = <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString(text1)
            .pauseFor(500)
            .deleteChars(9)
            .typeString(text2)
            .pauseFor(1000)
            .typeString(text3)
            .pauseFor(600)
            .changeDeleteSpeed(0.00001)
            .deleteChars(22)
            .typeString(text4)
            .pauseFor(500)
            .typeString(text5)
            .pauseFor(500)
            .typeString(text6)
            .pauseFor(500)
            .typeString(text7)
            .deleteAll(0.000000001)
            .typeString('...<br><br><br>')
            .typeString(`Dari ucup untuk ${n}`)
            .typeString('<br><br>...')
            .start();
        }}
        options={{
            autoStart: true,
        }}
    />
    if(hour >= 10 && hour < 5){
        return data;
    }
    if(user === 'Yusuf'){
        return data
    }
    return (
        <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('<br><br>... :)')
                    .start();
                }}
                options={{
                    autoStart: true,
                }}
            />
    )
}

const TypeWriter = ({ query }) => {
    let { name, key, user} = query;
    const arr = [];

    arr.push({
        key: 'goodnight',
        data: goodnight(name, user)
    })
    arr.push({
        key: 'goodnights',
        data: goodnight(name, user)
    })

    return(
        <Styles.Item>
            {
                arr.filter( el => {
                    return el.key === key
                }).map((obj, index) => <div key={index}>{obj.data}</div>)
            }
        </Styles.Item>
    )
}

export default TypeWriter;