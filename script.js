<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const sampleTextElement = document.getElementById('sample-text');</p>
<p class="p1">const inputTextElement = document.getElementById('input-text');</p>
<p class="p1">const startButton = document.getElementById('start-btn');</p>
<p class="p1">const wpmElement = document.getElementById('wpm');</p>
<p class="p1">const accuracyElement = document.getElementById('accuracy');</p>
<p class="p2"><br></p>
<p class="p1">let startTime, endTime;</p>
<p class="p1">const sampleTexts = [</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Быстрая коричневая лисица перепрыгнула через ленивую собаку.",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Солнце светит ярко, и птицы поют в лесу.",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Как прекрасен этот мир, посмотри!",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Человек, который смеется, живет дольше всех."</p>
<p class="p1">];</p>
<p class="p2"><br></p>
<p class="p1">function getRandomText() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const randomIndex = Math.floor(Math.random() * sampleTexts.length);</p>
<p class="p1"><span class="Apple-converted-space">    </span>return sampleTexts[randomIndex];</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function startTest() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const sampleText = getRandomText();</p>
<p class="p1"><span class="Apple-converted-space">    </span>sampleTextElement.textContent = sampleText;</p>
<p class="p1"><span class="Apple-converted-space">    </span>inputTextElement.value = '';</p>
<p class="p1"><span class="Apple-converted-space">    </span>inputTextElement.disabled = false;</p>
<p class="p1"><span class="Apple-converted-space">    </span>inputTextElement.focus();</p>
<p class="p1"><span class="Apple-converted-space">    </span>startButton.textContent = 'Завершить';</p>
<p class="p1"><span class="Apple-converted-space">    </span>startButton.onclick = endTest;</p>
<p class="p1"><span class="Apple-converted-space">    </span>startTime = new Date();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function endTest() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>endTime = new Date();</p>
<p class="p1"><span class="Apple-converted-space">    </span>const timeTaken = (endTime - startTime) / 1000 / 60; // время в минутах</p>
<p class="p1"><span class="Apple-converted-space">    </span>const typedText = inputTextElement.value;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const sampleText = sampleTextElement.textContent;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Подсчет слов в минуту (WPM)</p>
<p class="p1"><span class="Apple-converted-space">    </span>const typedWords = typedText.trim().split(/\s+/).length;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const wpm = Math.round(typedWords / timeTaken);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Подсчет точности</p>
<p class="p1"><span class="Apple-converted-space">    </span>const sampleWords = sampleText.trim().split(/\s+/);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const typedWordsArray = typedText.trim().split(/\s+/);</p>
<p class="p1"><span class="Apple-converted-space">    </span>let correctWords = 0;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>for (let i = 0; i &lt; Math.min(sampleWords.length, typedWordsArray.length); i++) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (sampleWords[i] === typedWordsArray[i]) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>correctWords++;</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const accuracy = Math.round((correctWords / sampleWords.length) * 100);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Отображение результатов</p>
<p class="p1"><span class="Apple-converted-space">    </span>wpmElement.textContent = wpm;</p>
<p class="p1"><span class="Apple-converted-space">    </span>accuracyElement.textContent = `${accuracy}%`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Сброс</p>
<p class="p1"><span class="Apple-converted-space">    </span>inputTextElement.disabled = true;</p>
<p class="p1"><span class="Apple-converted-space">    </span>startButton.textContent = 'Начать';</p>
<p class="p1"><span class="Apple-converted-space">    </span>startButton.onclick = startTest;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">startButton.addEventListener('click', startTest);</p>
</body>
</html>
