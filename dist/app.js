(() => {
  'use strict';

  const memories = {
    love: { title: 'The Love We Made With Our Hands', kicker: 'THE FIRST LITTLE UNIVERSE', image: 'src/picture_1.jpg', alt: 'Our hands spelling the word love', copy: 'We made “LOVE” together with our hands. A little silly, a little imperfect, and completely ours. It reminds me that love is something we make together, one small choice at a time.' },
    evening: { title: 'Our Elegant Moment', kicker: 'AN EVENING TO KEEP', image: 'src/picture_2.jpg', alt: 'The two of us dressed elegantly together', copy: 'I love this moment with you. Being beside you makes any place feel special, and I keep this picture close because it feels so unmistakably ours.' },
    mirror: { title: 'My Arms Around You', kicker: 'THE MIRROR REMEMBERS', image: 'src/picture_3.jpg', alt: 'A mirror photo of me hugging Mami', copy: 'I wish I could step through this mirror and give you this hug again. Until then, let this little moment remind you how close you are to my heart.' },
    hug: { title: 'Your Place In My Hug', kicker: 'A PLACE TO REST', image: 'src/picture_4.jpg', alt: 'The two of us sitting together, close in my hug', copy: 'There is a particular kind of peace in having you close. I hope you can feel a little of that warmth whenever you return to this moment.' }
  };

  const revelations = {
    beauty: { kicker: 'THE WAY I SEE YOU', title: 'Beautiful, exactly as you are.', copy: 'To me, you are the most beautiful woman in the world. I find your body incredibly beautiful—the most beautiful I have ever seen. I love you as you are; you never need to change, or wear makeup, to deserve that love.' },
    mind: { kicker: 'A MIND I ADMIRE', title: 'I see how capable you are.', copy: 'I admire your intelligence and the way you think things through. Even when you doubt yourself, I can see how much you understand, how much you notice, and how capable you are.' },
    kindness: { kicker: 'YOUR GENTLE HEART', title: 'Your kindness stays with me.', copy: 'The care you give people matters. I see it in the way you pay attention and in the tenderness you keep offering, even when a day asks a lot of you.' },
    motherhood: { kicker: 'THE LOVE YOU GIVE YOUR SON', title: 'You show up for him, every day.', copy: 'I admire the effort, love, and dedication you give your son, including on the hard days. You deserve care and support, too. You do not have to carry everything alone.' },
    elegance: { kicker: 'YOUR OWN KIND OF ART', title: 'You make beauty your own.', copy: 'I love your elegance and the creativity you bring to makeup and style. It is a lovely part of you—and you are just as beautiful when you choose not to wear any.' },
    play: { kicker: 'OUR PRIVATE COMEDY CLUB', title: 'You bring out my silly side.', copy: 'On video calls we make ridiculous faces, send drawings, and make each other laugh. I love that playful, childlike version of me that comes out with you.' }
  };

  const feelings = {
    sad: { kicker: 'WHEN YOU FEEL SAD', title: 'No need to find the right words.', paragraphs: ['Mi amor, you don’t have to turn your sadness into something easier for me to understand. Tell me what hurts, or let yourself be quiet for a while. I want to listen.', 'If I were there, I’d want to hold you close and give you a little space to breathe. You don’t have to pretend to be okay for me.'] },
    happy: { kicker: 'WHEN YOU FEEL HAPPY', title: 'Let’s keep this little joy.', paragraphs: ['I want to hear all about it. Send me a drawing, show me your smile, or let’s make the funniest faces we can on a video call.', 'Your happiness is yours to enjoy. I’m glad when you let me share a little of it with you.'] },
    doubt: { kicker: 'WHEN YOU DOUBT YOURSELF', title: 'I see the person you are.', paragraphs: ['I see your beauty, your beautiful body, your intelligence, and your kind heart. None of those things disappears on a day when you cannot feel them.', 'You have value beyond how you look, what you accomplish, or what you can do for anyone else. I’m here to remind you gently, not to ask you to prove it.'] },
    hurt: { kicker: 'WHEN SOMETHING HURTS', title: 'Your hurt deserves to be heard.', paragraphs: ['I know I can get angry and say harsh things. That is mine to take responsibility for. I want to hear how it affected you, without arguing you out of your feelings.', 'I want to repair what I can through care and changed actions. You do not owe me quick forgiveness.'] },
    miss: { kicker: 'WHEN YOU MISS ME', title: 'Te extraño, Mi amor.', paragraphs: ['Te necesito. Quiero cuidarte. Quiero besarte. The distance makes ordinary closeness impossible some days, and I miss the simple comfort of being beside you.', 'Until I can hold you again, let these words be a small reminder: you are loved, and I’m thinking of you.'] },
    alone: { kicker: 'WHEN YOU FEEL ALONE', title: 'We can meet this with care.', paragraphs: ['I want to show up through honesty, respect, and consistent actions—not ask you to ignore your feelings. You can tell me what would help you feel more connected.', 'You deserve closeness that feels safe and freely chosen. I want us to keep building that together.'] },
    much: { kicker: 'WHEN EVERYTHING FEELS TOO MUCH', title: 'You can set something down.', paragraphs: ['I see how much you carry, and you do not have to be strong every moment. You can pause, breathe, and take one small thing at a time.', 'You don’t have to solve everything right now or carry it by yourself. I wish I could hold you while the noise settles.'] },
    future: { kicker: 'WHEN YOU WORRY ABOUT THE FUTURE', title: 'We can take it one step at a time.', paragraphs: ['I see how deeply you care for your son and how much you want a steady, loving life for him. You deserve support as we work toward that.', 'I hope to build a warm future with you both, through patience, responsibility, and real actions. We can talk about the next step when it feels right.'] }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const dialog = $('#memoryDialog');
  const dialogImage = $('#dialogImage');
  let lastMemoryTrigger = null;

  function openMemory(key, trigger) {
    const memory = memories[key];
    if (!memory) return;
    lastMemoryTrigger = trigger;
    $('#dialogKicker').textContent = memory.kicker;
    $('#dialogTitle').textContent = memory.title;
    $('#dialogCopy').textContent = memory.copy;
    dialogImage.src = memory.image;
    dialogImage.alt = memory.alt;
    dialogImage.hidden = false;
    dialogImage.onerror = () => { dialogImage.hidden = true; };
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    $('#dialogClose').focus();
  }

  $$('[data-memory]').forEach(button => button.addEventListener('click', () => openMemory(button.dataset.memory, button)));
  $('#dialogClose').addEventListener('click', () => {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  });
  dialog.addEventListener('close', () => { if (lastMemoryTrigger) lastMemoryTrigger.focus(); });

  function setActive(items, selected) {
    items.forEach(item => {
      const active = item === selected;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
  }

  const revelationTabs = $$('.revelation-tab');
  const feelingTabs = $$('.feeling-button');
  for (const items of [revelationTabs, feelingTabs]) {
    items.forEach(item => { item.tabIndex = item.classList?.contains('active') ? 0 : -1; });
  }

  revelationTabs.forEach(button => button.addEventListener('click', () => {
    const item = revelations[button.dataset.revelation];
    if (!item) return;
    setActive(revelationTabs, button);
    $('#revelationStage').setAttribute('aria-labelledby', button.id);
    $('#playfulCat').hidden = button.dataset.revelation !== 'play';
    $('#revelationKicker').textContent = item.kicker;
    $('#revelationTitle').textContent = item.title;
    $('#revelationCopy').textContent = item.copy;
  }));

  feelingTabs.forEach(button => button.addEventListener('click', () => {
    const item = feelings[button.dataset.feeling];
    if (!item) return;
    setActive(feelingTabs, button);
    $('#feelingStage').setAttribute('aria-labelledby', button.id);
    $('#feelingKicker').textContent = item.kicker;
    $('#feelingTitle').textContent = item.title;
    const container = $('#feelingCopy');
    container.replaceChildren(...item.paragraphs.map(copy => {
      const paragraph = document.createElement('p');
      paragraph.textContent = copy;
      return paragraph;
    }));
  }));

  for (const tablist of $$('.revelation-list, .feeling-list')) {
    tablist.addEventListener('keydown', event => {
      const items = $$('.revelation-tab, .feeling-button', tablist);
      const current = items.indexOf(document.activeElement);
      if (current < 0 || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next].focus();
      items[next].click();
    });
  }

  $('#starCountButton').addEventListener('click', () => {
    const joke = $('#starJoke');
    joke.textContent = '“One, two, three… five! I counted the cat’s paws.”';
    joke.classList.add('recounted');
  });

  $('#readAgain').addEventListener('click', () => {
    const copy = $('#letterCopy');
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    copy.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    const firstParagraph = $('p', copy);
    firstParagraph.setAttribute('tabindex', '-1');
    firstParagraph.focus({ preventScroll: true });
    const status = $('#liveMessage');
    status.textContent = 'Back to the beginning of your letter, Mi amor.';
    status.classList.add('show');
    window.setTimeout(() => status.classList.remove('show'), 2600);
  });

  // Keep return links easy to find while preserving native anchor navigation.
  const header = $('#siteHeader');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
