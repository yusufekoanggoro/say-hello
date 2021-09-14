import React from "react"
import * as Styles from "./style"
import Typewriter from 'typewriter-effect';
// import Typist from 'react-typist'
import moment from 'moment-timezone';
moment.tz('Asia/Jakarta')

const arr = [];

const goodnight = (name) => {
    const n = name ? name: 'Stranger';
    const text1 = `Selamat malam kayang...`;
    const text2 = 'sayang...'
    const text3 = '<br><br>ehh salah :D'
    const text4 = `${n} maksudnya hehe`;
    const text5 = `<br><br>Selamat tidur, kamu yang selalu`;
    const text6 = ` ada dalam tiap doaku.`;
    const text7 = '<br><br>Semoga kamu selalu bahagia.'

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
            .typeString(`Dari Ucup untuk ${n}`)
            .typeString('<br><br>...')
            .start();
        }}
        options={{
            autoStart: true,
        }}
    />

    return data
}

const show = ({name, key, user}) => {
    if(user === 'ucp' && key){
        const filter = arr.filter( el => {
            return el.key === key
        }).map((obj, index) => <div key={index}>{obj.data}</div>)
        return filter;
    }else{
        const hour = moment().format("hh")
        if(hour >= 9 && hour < 5){
            return goodnight(name);
        }else{
            return (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('<br><br>. . . . :)')
                        .start();
                    }}
                    options={{
                        autoStart: true,
                    }}
                />
            )
            
        }
    }
}

const TypeWriter = ({ query }) => {
    let { name} = query;

    arr.push({
        key: 'goodnight',
        data: goodnight(name)
    })
    arr.push({
        key: 'goodnights',
        data: goodnight(name)
    })

    return(
        <Styles.Item>
            {show(query)}
        </Styles.Item>
    )
}

export default TypeWriter;