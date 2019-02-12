//variables
const tweetList = document.getElementById('tweet-list');

//event listeners
eventListeners();

function eventListeners(){
    document.querySelector('#form').addEventListener('submit', newMessage);

    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


//funtions
function newMessage(e){
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';


    const li = document.createElement('li');
    li.textContent = tweet;
    

    li.appendChild(removeBtn);
    tweetList.appendChild(li);

    addTweetLocalStorage(tweet);

    this.reset();
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

    removeTweetLocalStorage(e.target.parentElement.textContent);
}

function addTweetLocalStorage(tweet){
    let tweets = getTweetsLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsLocalStorage(tweet){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS === null){
        tweets=[];
    }else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

function localStorageOnLoad(){
    let tweets = getTweetsLocalStorage();

    tweets.forEach(tweet => {
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
    
    
        const li = document.createElement('li');
        li.textContent = tweet;
        
    
        li.appendChild(removeBtn);
        tweetList.appendChild(li);
    });
}

function removeTweetLocalStorage(tweet){
    let tweets = getTweetsLocalStorage();

    const deleteTweet = tweet.substring(0, tweet.lenght -1);

    tweets.forEach(function(tweetsLS, index) {      
        if(deleteTweet === tweetsLS){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}