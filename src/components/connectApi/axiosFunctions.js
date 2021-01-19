import axios from 'axios'
import cookies from 'universal-cookie'
var FormData = require('form-data')
const cookie = new cookies()


async function login(username,password){
        // console.log(username)
        // console.log(password)
        if(username === null || username === undefined || password === null || password === undefined){
            console.log('Values empty')
        }else{
            await axios.post('https://rooftop-api.herokuapp.com/auth/login/',
            {
                "username": username,
                "password": password
            }
            ).then(function (response) {
                console.log(response)
                const getHeader = response.headers
                const headerValues = Object.values(getHeader)
                const token = headerValues[2]
                cookie.set('x-auth', token, 
                {sameSite:'strict',
                 path: '/'
            });

            }).catch(function (error) {
                console.log(error.response.data.errors)                
            })
            
        }  
}

async function signUp(userName, password, email) {
    if(userName === null || userName === undefined || password === null || password === undefined || email === null || email === undefined){
        console.log('Values empty')
    }else{
        await axios.post('https://rooftop-api.herokuapp.com/auth/',
        {
            "username": userName,
            "password": password,
            "email": email
        }
        ).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error.response.data.errors)
        })
    }
    
}

async function googleAuth(){
    await axios.post('https://rooftop-api.herokuapp.com/auth/google/')
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    })
}

async function facebookAuth(){
    await axios.get('https://rooftop-api.herokuapp.com/auth/facebook/')
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error)
    })
}

async function verifySignup(token) {
    await axios.get('https://rooftop-api.herokuapp.com/auth/verifySignup',
    {
        "verificationToken": token
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function sendSignupVE(email) {
    await axios.post('https://rooftop-api.herokuapp.com/auth/sendSignupVerificationEmail',
    {
        "email": email
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function passResetEmail(email) {
    await axios.post('https://rooftop-api.herokuapp.com/auth/sendPasswordResetEmail',
    {
        "email": email
    }
    )
    .then(function (response){
        console.log(response)

        return(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function passResetToken(token) {
    await axios.post('https://rooftop-api.herokuapp.com/auth/verifyPasswordResetToken',
    {
        "passwordResetToken": token
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function passReset(token, password) {
    await axios.post('https://rooftop-api.herokuapp.com/auth/resetPassword',
    {
        "passwordResetToken": token,
        "password": password
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function changePass(oldPass, newPass) {
    const token = cookie.get('x-auth')
    await axios.post('https://rooftop-api.herokuapp.com/user/changePassword',
    {
        "oldPassword": oldPass,
        "newPassword": newPass
    },{
        headers:{
            "x-auth": token
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getProfile() {
    const token = cookie.get('x-auth')
    await axios.get('https://rooftop-api.herokuapp.com/user/',
    {
        headers:{
            "x-auth": token
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getProfileById(id) {
    await axios.post('https://rooftop-api.herokuapp.com/user/id/',
    {
        "userId": id
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function updateProfile(bio, profilePic, tag, cashAppProfileUrl, zelleProfileUrl, spotifyProfileUrl, twitterProfileUrl, instagramProfileUrl) {
    const token = cookie.get('x-auth')
    const formData = new FormData()
    formData.append('bio',bio)
    formData.append('profilePic',profilePic)
    formData.append('tag',tag)
    formData.append('cashAppProfileUrl',cashAppProfileUrl)
    formData.append('zelleProfileUrl',zelleProfileUrl)
    formData.append('spotifyProfileUrl',spotifyProfileUrl)
    formData.append('twitterProfileUrl',twitterProfileUrl)
    formData.append('instagramProfileUrl',instagramProfileUrl)

    await axios.post('https://rooftop-api.herokuapp.com/user/',
    formData,{
        headers:{
            "x-auth": token,
            'Content-Type': 'multipart/form-data'
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function createparty(title, location, bourough, price, about, vibe, crowdControl, type, crowdCaution, venueSize, endDateTime, startDateTime, cover) {
    const token = cookie.get('x-auth')
    const formData = new FormData()
    formData.append('title',title)
    formData.append('location',location)
    formData.append('bourough',bourough)
    formData.append('price',price)
    formData.append('about',about)
    formData.append('vibe',vibe)
    formData.append('crowdControl',crowdControl)
    formData.append('type',type)
    formData.append('crowdCaution',crowdCaution)
    formData.append('venueSize',venueSize)
    formData.append('endDateTime',endDateTime)
    formData.append('startDateTime',startDateTime)
    formData.append('cover',cover)

    await axios.post('https://rooftop-api.herokuapp.com/party/',
    formData,{
        headers:{
            "x-auth": token,
            'Content-Type': 'multipart/form-data'
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function updateParty(title, location, bourough, price, about, vibe, crowdControl, type, crowdCaution, venueSize, endDateTime, startDateTime, cover, partyId) {
    const token = cookie.get('x-auth')
    const formData = new FormData()
    formData.append('title',title)
    formData.append('location',location)
    formData.append('bourough',bourough)
    formData.append('price',price)
    formData.append('about',about)
    formData.append('vibe',vibe)
    formData.append('crowdControl',crowdControl)
    formData.append('type',type)
    formData.append('crowdCaution',crowdCaution)
    formData.append('venueSize',venueSize)
    formData.append('endDateTime',endDateTime)
    formData.append('startDateTime',startDateTime)
    formData.append('cover',cover)
    formData.append('partyId',partyId)

    await axios.post('https://rooftop-api.herokuapp.com/party/',
    formData,{
        headers:{
            "x-auth": token,
            'Content-Type': 'multipart/form-data'
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getPartyByShortId(shortId,partyId) {
    await axios.post('https://rooftop-api.herokuapp.com/party/id/',
    {
        "shortId": shortId,
        "partyId": partyId
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getParties() {
    await axios.post('https://rooftop-api.herokuapp.com/party/all/',)
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getPartiesFiltered(venueSize, price, bourough, crowdControl, crowdCaution) {
    await axios.post('https://rooftop-api.herokuapp.com/party/all/',
    {
        "filter":{
            "venueSize": venueSize,
            "price": price,
            "bourough": bourough,
            "crowdControl": crowdControl,
            "crowdCaution": crowdCaution
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function rateParty(partyId, rating, review) {
    const token = cookie.get('x-auth')
    await axios.post('https://rooftop-api.herokuapp.com/party/rate/',
    {
        "partyId": partyId,
        "rating": rating,
        "review": review
    },{
        headers:{
            "x-auth": token
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function getMyParties() {
    const token = cookie.get('x-auth')
    await axios.get('https://rooftop-api.herokuapp.com/party/my/',
    {
        headers:{
            "x-auth": token
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

async function deleteParty(partyId) {
    const token = cookie.get('x-auth')
    await axios.delete('https://rooftop-api.herokuapp.com/party/',
    {
        "partyId": partyId
    },{
        headers:{
            "x-auth": token
        }
    }
    )
    .then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error.response.data.errors)
    })
}

export{
    login,
    signUp,
    googleAuth,
    facebookAuth,
    verifySignup,
    sendSignupVE,
    passResetEmail,
    passResetToken,
    passReset,
    changePass,
    getProfile,
    getProfileById,
    updateProfile,
    createparty,
    updateParty,
    getPartyByShortId,
    getParties,
    getPartiesFiltered,
    rateParty,
    getMyParties,
    deleteParty

}