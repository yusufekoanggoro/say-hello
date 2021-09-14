import React from "react"
import * as Styles from "./style"
import Typewriter from 'typewriter-effect';
// import Typist from 'react-typist'
import moment from 'moment-timezone';
moment.tz('Asia/Jakarta')

const arr = [];
const keyMessage = {
    goodnight: 'goodnight',
    daylight: 'daylight',
    getting: 'gettingsick'
}

const capitalizeTheFirstLetterOfEachWord = (words) => {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

const goodnight = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Selamat malam kayang...`;
    const text2 = 'sayang...'
    const text3 = '<br><br>ehh salah :D'
    const text4 = `${n} maksudnya hehe`;
    const text5 = `<br><br>Selamat tidur, kamu yang selalu`;
    const text6 = ` ada dalam tiap doaku.`;
    const text7 = '<br><br>Semoga kamu selalu bahagia.'
    
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
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
                    .pauseFor(1000)
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
        </Styles.TextWrapper>
    return data
}

const daylight = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Buat ${n} yang selalu aku sayangi.`;
    const text2 = '<br><br>Jangan lupa makan siang, ya!'
    const text3 = '<br><br>Aku di sini selalu merindukanmu :D'
    
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(1000)
                    .typeString(text3)
                    .pauseFor(1000)
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
        </Styles.TextWrapper>
    return data
}

const daylight2 = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Hai ${n}, Selamat siang!`;
    const text2 = '<br><br>Untukmu yang saat ini sedang '
    const text3 = 'berjuang untuk menggapai kesuksesan.'
    const text4 = '<br><br>Semoga kamu selalu semangat.'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(1000)
                    .typeString(text3)
                    .pauseFor(1000)
                    .typeString(text4)
                    .pauseFor(1000)
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
        </Styles.TextWrapper>
    return data
}

const daylight3 = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Hai, ${n}! Aku belum makan siang, nih.`;
    const text2 = 'Soalnya, tadi mau makan nasinya anget langsung aja aku bawa ke dokter.'
    const text3 = `<br><br>Takut kenapa-napa. Hehehe. `
    const text4 = '<br><br>Kamu jangan lupa makan siang, ya!'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .deleteAll(0.000000000000001)
                    .typeString(text2)
                    .pauseFor(1000)
                    .pauseFor(500)
                    .typeString(text3)
                    .pauseFor(500)
                    .deleteAll(0.000000000000001)
                    .typeString(text4)
                    .pauseFor(1000)
                    .deleteAll(0.000000000000001)
                    .typeString('...<br><br><br>')
                    .typeString(`Dari Ucup untuk ${n}`)
                    .typeString('<br><br>...')
                    .start();
                }}
                options={{
                    autoStart: true,
                }}
            />
        </Styles.TextWrapper>
    return data
}

const gettingSick = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Hai, ${n}!`;
    const text2 = '<br><br>Tidak ada satupun orang yang menghendaki dirinya tertimpa penyakit.'
    const text3 = `<br><br>Namun penyakit datang tanpa pandang bulu.`
    const text4 = '<br><br>Aku turut sedih mendengar kau tertimpa penyakit.'
    const text5 = '<br><br>Mudah-mudahan segera cepat sembuh dan bisa beraktivitas seperti sedia kala. Aamiiin'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(1000)
                    .typeString(text3)
                    .pauseFor(500)
                    .typeString(text4)
                    .pauseFor(1000)
                    .deleteAll(0.000000000000001)
                    .typeString(text5)
                    .pauseFor(1000)
                    .deleteAll(0.000000000000001)
                    .typeString('...<br><br><br>')
                    .typeString(`Dari Ucup untuk ${n}`)
                    .typeString('<br><br>...')
                    .start();
                }}
                options={{
                    autoStart: true,
                }}
            />
        </Styles.TextWrapper>
    return data
}

const show = ({name, key, user}) => {
    const n = name ? name: 'Stranger';
    if(user === 'ucp' && key){
        const filter = arr.filter( el => {
            return el.key === key
        }).map((obj, index) => (obj.data))
        console.log(filter)
        const item = filter[Math.floor(Math.random()*filter.length)];
        return item;
    }else{
        if(key){
            const filter = arr.filter( el => {
                return el.key === key
            }).map((obj, index) => (obj.data))
            const item = filter[Math.floor(Math.random()*filter.length)];
            return item
        }else{
            let hour = moment().format("hh")
            if(hour >= 10 && hour < 15){
                const filter = arr.filter( el => {
                    return el.key === keyMessage.daylight
                }).map((obj, index) => (obj.data))
                const item = filter[Math.floor(Math.random()*filter.length)];
                return item
            }else if(hour >= 21 && hour < 5){
                const filter = arr.filter( el => {
                    return el.key === keyMessage.goodnight
                }).map((obj, index) => (obj.data))
                const item = filter[Math.floor(Math.random()*filter.length)];
                return item
            }else{
                return (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(`<br><br>Hai ${n}!`)
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
}

const TypeWriter = ({ query }) => {
    let { name } = query;
    name = capitalizeTheFirstLetterOfEachWord(name);
    arr.push({
        key: 'goodnight',
        data: goodnight(name, 0)
    })
    arr.push({
        key: 'daylight',
        data: daylight(name, 0)
    })
    arr.push({
        key: 'daylight',
        data: daylight2(name, 1)
    })
    arr.push({
        key: 'daylight',
        data: daylight3(name, 1)
    })
    arr.push({
        key: 'gettingsick',
        data: gettingSick(name, 1)
    })
    return(
        <Styles.Item>
            {show(query)}
        </Styles.Item>
    )
}

export default TypeWriter;