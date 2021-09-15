import * as React from "react"
import * as Styles from "./style"
import Typewriter from 'typewriter-effect';
// import Typist from 'react-typist'
import moment from 'moment-timezone';
moment.tz('Asia/Jakarta')

const arr = [];
const keywordMessage = {
    goodnight: 'goodnight',
    daylight: 'daylight',
    getting: 'gettingsick',
    night: 'night',
    gomballucu: 'gomballucu',
    morning: 'morning'
}

const capitalizeTheFirstLetterOfEachWord = (words) => {
    let separateWord = words.split(' ');
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
    const n = name ? name: 'Kamu';
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
    const n = name ? name: 'Maniis';
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
                    .typeString(`Dari Ucup untuk ${name ? name : 'Kamu'}`)
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
    const n = name ? name: 'Maniiis';
    const text1 = `Hai, ${n}! Aku belum makan siang, nih.`;
    const text2 = '<br><br>Soalnya, tadi mau makan nasinya anget langsung aja aku bawa ke dokter.'
    const text3 = `<br><br>Takut kenapa-napa. Hehehe. `
    const text4 = '<br><br>Kamu jangan lupa makan siang, ya!'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(1000)
                    .pauseFor(500)
                    .typeString(text3)
                    .pauseFor(500)
                    .typeString(text4)
                    .pauseFor(1000)
                    .deleteAll(0.000000000000001)
                    .typeString('...<br><br><br>')
                    .typeString(`Dari Ucup untuk ${name ? name : 'Kamu'}`)
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

const night = (name, key) => {
    const n = name ? name: 'Maniiis';
    const text1 = `Hai, ${n}!`;
    const text2 = `<br><br>Jangan tidur larut malam ya, ${n}, `;
    const text3 = 'dan jangan menunda-nunda lagi.'
    const text4 = '<br><br>Segeralah tidur '
    const text5 = 'karena aku hanya ingin'
    const text6 = ' cepat melihat senyum pagimu '
    const text7 = 'yang indah di esok hari.'
 
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
                    .typeString(text5)
                    .pauseFor(1000)
                    .typeString(text6)
                    .pauseFor(1000)
                    .typeString(text7)
                    .pauseFor(1000)
                    .deleteAll(0.000000000000001)
                    .typeString('...<br><br><br>')
                    .typeString(`Dari Ucup untuk ${name ? name : 'Kamu'}`)
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

const gomballucu = (name, key) => {
    const n = name ? name: 'Stranger';
    const text1 = `Kamu itu ibarat embun di pagi hari.`;
    const text2 = `<br><br>Sejuk dan indah, `;
    const text3 = 'namun aku tidak pernah tau itu'
    const text4 = '<br><br>karna bangunku siaang :D'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(1000)
                    .typeString(text3)
                    .pauseFor(1500)
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

const morning = (name, key) => {
    const n = name ? name: 'kamu';
    const text1 = `Selamat pagi`;
    const text2 = ` untuk wanita paling cantik yang pernah ada!`;
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(600)
                    .typeString(text2)
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

const morning2 = (name, key) => {
    const n = name ? name: 'Kamu';
    const text1 = `Kamu adalah `;
    const text2 = 'orang yang pertama '
    const text3 = `aku beri ucapan 'selamat pagi'`
    const text4 = `<br><br>meski aku punya banyak teman,`;
    const text5 = ` mulai dari yang jelek sampai yang cakep`
    const text6 = '<br><br>Namun aku Lebih memilih dari yang jelek dulu :DDDD'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(500)
                    .typeString(text2)
                    .pauseFor(500)
                    .typeString(text3)
                    .pauseFor(1000)
                    .typeString(text4)
                    .pauseFor(1000)
                    .typeString(text5)
                    .pauseFor(1000)
                    .typeString(text6)
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

const morning3 = (name, key) => {
    const n = name ? name: 'Kamu';
    const text1 = `Selamat pagi... `;
    const text2 = 'untukmu yang ';
    const text3 = 'gengsi untuk bilang kangen duluan.'
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(1000)
                    .typeString(text2)
                    .pauseFor(500)
                    .typeString(text3)
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

const morning4 = (name, key) => {
    const n = name ? name: 'Kamu';
    const text1 = `Selamat pagi,`;
    const text2 = ' semoga kamu lebih peka dari hari kemarin.';
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(1000)
                    .typeString(text2)
                    .pauseFor(500)
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

const morning5 = (name, key) => {
    const n = name ? name: 'Kamu';
    const text1 = `Nonton dangdut sambil goyang,`;
    const text2 = '<br><br>Selamat pagi sayang...';
 
    const data = 
        <Styles.TextWrapper key={key}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text1)
                    .pauseFor(1000)
                    .typeString(text2)
                    .pauseFor(500)
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

const show = ({name, keyword, user}) => {
    const n = name ? name: 'Maniiis';
    if(user === 'ucp' && keyword){
        const filter = arr.filter( el => {
            return el.keyword === keyword
        }).map((obj, index) => (obj.data))
        const item = filter[Math.floor(Math.random()*filter.length)]
        return item;
    }else{
        if(keyword){
            const filter = arr.filter( el => {
                return el.keyword === keyword
            }).map((obj, index) => (obj.data))
            const item = filter[Math.floor(Math.random()*filter.length)];
            return item
        }else{
            let hour = moment().format("hh")
            if (hour > 3 && hour < 11){
                const filter = arr.filter( el => {
                    return el.keyword === keywordMessage.morning
                }).map((obj, index) => (obj.data))
                const item = filter[Math.floor(Math.random()*filter.length)];
                return item
            }else if(hour > 10 && hour < 15){
                const filter = arr.filter( el => {
                    return el.keyword === keywordMessage.daylight
                }).map((obj, index) => (obj.data))
                const item = filter[Math.floor(Math.random()*filter.length)];
                return item
            }else if(hour > 14 && hour < 18){
                return (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(`<br><br>Selamat Sore ${n}!`)
                            .start();
                        }}
                        options={{
                            autoStart: true,
                        }}
                    />
                )
            }else if(hour >= 18 && hour < 24){
                const filter = arr.filter( el => {
                    return el.keyword === keywordMessage.night
                }).map((obj, index) => (obj.data))
                const item = filter[Math.floor(Math.random()*filter.length)];
                return item
            }
        }
    }
}

const TypeWriter = ({ query }) => {
    let { name } = query;
    if(name){
        name = capitalizeTheFirstLetterOfEachWord(String(name).toLowerCase());
    }
    arr.push({
        keyword: 'goodnight',
        data: goodnight(name, 0)
    })
    arr.push({
        keyword: 'daylight',
        data: daylight(name, 0)
    })
    arr.push({
        keyword: 'daylight',
        data: daylight2(name, 1)
    })
    arr.push({
        keyword: 'daylight',
        data: daylight3(name, 1)
    })
    arr.push({
        keyword: 'gettingsick',
        data: gettingSick(name, 1)
    })
    arr.push({
        keyword: keywordMessage.night,
        data: night(name, 1)
    })
    arr.push({
        keyword: keywordMessage.gomballucu,
        data: gomballucu(name, 1)
    })
    arr.push({
        keyword: keywordMessage.morning,
        data: morning(name, 1)
    })
    arr.push({
        keyword: keywordMessage.morning,
        data: morning2(name, 1)
    })
    arr.push({
        keyword: keywordMessage.morning,
        data: morning3(name, 1)
    })
    arr.push({
        keyword: keywordMessage.morning,
        data: morning4(name, 1)
    })
    arr.push({
        keyword: keywordMessage.morning,
        data: morning5(name, 1)
    })
    return(
        <Styles.Item>
            {show(query)}
        </Styles.Item>
    )
}

export default TypeWriter;