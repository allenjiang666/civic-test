// Application Logic
let cards = [...flashcardData];
let currentIndex = 0;
let currentLang = 'en'; // 'en' or 'cn'

// DOM Elements
const cardElement = document.getElementById('flashcard');
const questionElement = document.getElementById('question-text');
const answerElement = document.getElementById('answer-content');
const qNumElement = document.getElementById('q-num');
const countElement = document.getElementById('current-index');
const totalElement = document.getElementById('total-count');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const readAloudBtn = document.getElementById('read-aloud-btn');
const readAloudAnswerBtn = document.getElementById('read-aloud-answer-btn');

// Button Text Elements
const btnPrevText = document.getElementById('btn-prev-text');
const btnNextText = document.getElementById('btn-next-text');
const langBtnText = document.getElementById('lang-btn-text');

// Label Elements
const labelQuestion = document.getElementById('label-question');
const labelAnswer = document.getElementById('label-answer');
const labelFlip = document.getElementById('label-flip');

// Speech synthesis
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let englishVoice = null;

// Function to find the best English voice
function findEnglishVoice() {
    const voices = speechSynthesis.getVoices();

    // 1. Try to find specific high-quality iOS/macOS voices
    const iosVoices = ['Samantha', 'Karen', 'Daniel', 'Moira', 'Rishi', 'Tessa'];
    const bestMatch = voices.find(voice =>
        iosVoices.some(name => voice.name.includes(name)) && voice.lang.startsWith('en')
    );
    if (bestMatch) {
        console.log('Found iOS premium voice:', bestMatch.name);
        return bestMatch;
    }

    // 2. Try to find any en-US voice
    const usVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang === 'en_US');
    if (usVoice) {
        console.log('Found US English voice:', usVoice.name);
        return usVoice;
    }

    // 3. Fallback: find any English voice
    const anyEnglishFn = voices.find(voice => voice.lang.startsWith('en'));
    if (anyEnglishFn) {
        console.log('Found fallback English voice:', anyEnglishFn.name);
        return anyEnglishFn;
    }

    console.log('No English voice found in list of ' + voices.length + ' voices');
    return null;
}

function readAloud() {
    // Stop any ongoing speech
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        return;
    }

    // Only read in English mode
    if (currentLang !== 'en') return;

    const card = cards[currentIndex];
    const textToRead = card.q_en;

    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'en-US'; // Explicitly request en-US
    currentUtterance.rate = 0.9;

    // Attempt to force an English voice object
    const voice = findEnglishVoice();
    if (voice) {
        currentUtterance.voice = voice;
    }

    // Visual feedback
    readAloudBtn.classList.add('bg-green-200');

    currentUtterance.onend = () => {
        readAloudBtn.classList.remove('bg-green-200');
    };

    currentUtterance.onerror = (e) => {
        console.error('Speech error:', e);
        readAloudBtn.classList.remove('bg-green-200');
    };

    speechSynthesis.speak(currentUtterance);
}

function readAloudAnswer() {
    // Stop any ongoing speech
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        return;
    }

    // Only read in English mode
    if (currentLang !== 'en') return;

    const card = cards[currentIndex];
    const answers = card.a_en;

    // Join all answers with "or" for better speech
    const textToRead = answers.length === 1
        ? answers[0]
        : answers.join(', or ');

    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = 0.9;

    // Attempt to force an English voice object
    const voice = findEnglishVoice();
    if (voice) {
        currentUtterance.voice = voice;
    }

    // Visual feedback
    readAloudAnswerBtn.classList.add('bg-green-600');

    currentUtterance.onend = () => {
        readAloudAnswerBtn.classList.remove('bg-green-600');
    };

    currentUtterance.onerror = (e) => {
        console.error('Speech error:', e);
        readAloudAnswerBtn.classList.remove('bg-green-600');
    };

    speechSynthesis.speak(currentUtterance);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'cn' : 'en';
    updateLanguageUI();
    updateCard();
}

function updateLanguageUI() {
    if (currentLang === 'en') {
        btnPrevText.textContent = "Prev";
        btnNextText.textContent = "Next";
        langBtnText.textContent = "中文";

        labelQuestion.textContent = "Question";
        labelAnswer.textContent = "Answer";
        labelFlip.textContent = "Tap to Flip";

        // Show read-aloud buttons for English
        readAloudBtn.style.display = 'block';
        readAloudAnswerBtn.style.display = 'block';
    } else {
        btnPrevText.textContent = "上一题";
        btnNextText.textContent = "下一题";
        langBtnText.textContent = "English";

        labelQuestion.textContent = "问题";
        labelAnswer.textContent = "答案";
        labelFlip.textContent = "点击翻转";

        // Hide read-aloud buttons for Chinese
        readAloudBtn.style.display = 'none';
        readAloudAnswerBtn.style.display = 'none';

        // Stop any ongoing speech when switching to Chinese
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
    }
}

function updateCard() {
    const card = cards[currentIndex];

    // Determine text based on language
    const questionKey = currentLang === 'en' ? 'q_en' : 'q_cn';
    const answerKey = currentLang === 'en' ? 'a_en' : 'a_cn';

    // Text Content
    questionElement.textContent = card[questionKey];
    qNumElement.textContent = currentLang === 'en' ? `Card ${currentIndex + 1}` : `卡片 ${currentIndex + 1}`;

    const answers = card[answerKey];

    // Format Answer
    if (answers.length === 1) {
        answerElement.innerHTML = `<h3 class="text-3xl font-extrabold mb-2 text-green-300 animate-fade-in">${answers[0]}</h3>`;
    } else {
        const list = answers.map(ans => `<li class="flex items-start text-left"><span class="text-green-400 mr-2 flex-shrink-0 mt-1">✓</span><span>${ans}</span></li>`).join('');
        answerElement.innerHTML = `<ul class="space-y-3 text-lg font-medium inline-block mx-auto text-left w-full max-w-sm">${list}</ul>`;
    }

    // Counters
    countElement.textContent = currentIndex + 1;
    totalElement.textContent = cards.length;

    // Progress Bar
    const progress = ((currentIndex + 1) / cards.length) * 100;
    progressBar.style.width = `${progress}%`;

    // State
    cardElement.classList.remove('flipped');
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;

    // Visual disable state
    if (currentIndex === 0) {
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        prevBtn.classList.remove('hover:shadow-md', 'active:scale-95');
    } else {
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        prevBtn.classList.add('hover:shadow-md', 'active:scale-95');
    }

    if (currentIndex === cards.length - 1) {
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        nextBtn.classList.remove('hover:bg-blue-700', 'hover:shadow-xl', 'active:scale-95');
    } else {
        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        nextBtn.classList.add('hover:bg-blue-700', 'hover:shadow-xl', 'active:scale-95');
    }
}

function navigate(dir) {
    const newIndex = currentIndex + dir;
    if (newIndex >= 0 && newIndex < cards.length) {
        // Stop any ongoing speech
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        currentIndex = newIndex;
        updateCard();
    }
}

function shuffleCards() {
    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    updateCard();

    // Visual feedback for shuffle
    const btn = document.getElementById('shuffle-btn');
    btn.classList.remove('bg-indigo-50');
    btn.classList.add('bg-green-100', 'text-green-600');
    setTimeout(() => {
        btn.classList.remove('bg-green-100', 'text-green-600');
        btn.classList.add('bg-indigo-50');
    }, 300);
}

// Flip card function
function flipCard() {
    cardElement.classList.toggle('flipped');
}

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        flipCard();
    } else if (e.code === 'ArrowRight') {
        navigate(1);
    } else if (e.code === 'ArrowLeft') {
        navigate(-1);
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load voices (needed for some browsers)
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            console.log('Voices changed, loading...');
            speechSynthesis.getVoices();
        };
    }

    // Explicitly call getVoices once to trigger loading
    speechSynthesis.getVoices();

    // iOS Audio Context / Voice Unlock
    const unlockAudio = () => {
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            console.log('Audio unlocked, voices found:', voices.length);
            document.body.removeEventListener('touchstart', unlockAudio);
            document.body.removeEventListener('click', unlockAudio);
        }
    };

    document.body.addEventListener('touchstart', unlockAudio);
    document.body.addEventListener('click', unlockAudio);

    updateCard();
});
