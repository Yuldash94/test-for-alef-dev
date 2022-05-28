let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('.menu_items')
let btn_add = document.querySelector('.btn_add')
let btn_sub = document.querySelector('.btn_sub')
let btn_result = document.querySelector('.btn_result')
let btn_buy_cart = document.querySelector('.buy_cart')
let btn_buy_like = document.querySelector('.buy_like')
let buy_message = document.querySelector('.buy_message')
let product_name = document.querySelector('.product_name')
let subscibe = document.querySelector('.subscribe')
let eMail = document.getElementById('mail')
let eMail_deleted = document.getElementById('cross')
let content_img_1 = document.querySelector('.img_1')
let content_img_2 = document.querySelector('.img_2')
let content_img_3 = document.querySelector('.img_3')
let content_img_4 = document.querySelector('.img_4')
let content_img_5 = document.querySelector('.img_5')
let content_left = document.querySelector('.content_left')



let result = 0
let productName = product_name.textContent

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
	menu.classList.toggle('active')
})

btn_add.addEventListener('click', () => {
    result=++btn_result.textContent
} )

btn_sub.addEventListener('click', () => {
    if (result<=0){
        result=0 
    } else {
        result=--btn_result.textContent 
    }
} )

const buy_cart = btn_buy_cart.addEventListener('click', () => {
    if (result === 0) {
        buy_message.textContent = `Вы не выбрали количество товара` 
    } else {
        buy_message.textContent=`Товар "${productName}" в количестве "${result}" добавлен в Корзину"`
    }
    setTimeout(function(){
        buy_message.textContent = ``
    }, 3000) 
})

btn_buy_like.addEventListener('click', () => { 
    buy_message.textContent = `Товар "${productName}" добавлен в Избранное`   
    setTimeout(function(){
        buy_message.textContent = ``
    }, 5000) 
})


function ValidMail() {
    let output
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    let valid = re.test(eMail.value)
    if (valid) output = 'Вы успешно подписаны!'
    else output = 'Введите корректный адрес электронной почты!'
    alert(output)
    return valid
}

subscibe.addEventListener('click', () => {
    ValidMail()
    eMail.value = ''
})

eMail_deleted.addEventListener('click', () => {
    console.log(eMail.value);
    eMail.value = ''
    console.log(eMail.value);
})

function changeBgImage(img, imgBig) {
    
    const Bg = imgBig.classList.value.split(' ')
    const smBg = img.classList.value.split(' ')

    if (Bg[1] != smBg[1]) {
        let changeBgBig = Bg[1]
        let changeBgSmall = smBg[1]
        imgBig.classList.remove(changeBgBig)
        imgBig.classList.add(changeBgSmall)
    }
}

content_img_1.addEventListener('click', () => {
    changeBgImage(content_img_1, content_left)
})

content_img_2.addEventListener('click', () => {
    changeBgImage(content_img_2, content_left)
})

content_img_3.addEventListener('click', () => {
    changeBgImage(content_img_3, content_left)
})

content_img_4.addEventListener('click', () => {
    changeBgImage(content_img_4, content_left)
})

content_img_5.addEventListener('click', () => {
    changeBgImage(content_img_5, content_left)
})