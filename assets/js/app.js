//variables
const tweetList = document.getElementById('tweet-list');

//event listeners
eventListeners();

function eventListeners(){
    document.querySelector('#form').addEventListener('submit', newMessage);

    tweetList.addEventListener('click', removeTweet);
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
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
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